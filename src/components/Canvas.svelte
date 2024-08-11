<script lang="ts">
  import { onMount } from "svelte";
  import { pan, pinch, type GestureCustomEvent, type PanCustomEvent, type PinchCustomEvent } from "svelte-gestures";
  import { get } from "svelte/store";
  import { Engine } from "../lib/engine";
  import { clamp, sub, type Vec } from "../lib/vector";
  import { density, history, isErasing, mode, paused, radius, src, stateSize } from "../state";
  import { isTouchDevice } from "../utils";
  import Controls from "./Controls.svelte";

  let canvas: HTMLCanvasElement;

  let canvasWidth: number, canvasHeight: number;
  let engine: Engine;

  let currPos: Vec = [0, 0];
  let prevPos: Vec | null = null;

  let buttonKey: number | null = null;
  let shiftKey = false;

  const IS_TOUCH_DEVICE = isTouchDevice();

  onMount(() => {
    canvasWidth = canvas.width = screen.width;
    canvasHeight = canvas.height = screen.height;

    if (IS_TOUCH_DEVICE) $stateSize = [512, 512];

    engine = new Engine([canvasWidth, canvasHeight], canvas, $stateSize);
    engine.setRandom();

    let frame = requestAnimationFrame(function loop(t) {
      frame = requestAnimationFrame(loop);

      if (!$paused) engine.next();

      if (buttonKey === 0 && prevPos) {
        engine.drawLine({ origin: prevPos, end: currPos, mode: $mode, value: !shiftKey, radius: $radius });
        prevPos = currPos;
      }

      if (buttonKey === 2 && prevPos) {
        engine.shiftBy(sub(prevPos, currPos));
        prevPos = currPos;
      }

      engine.display($history);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  });

  $: {
    if (canvas && engine) {
      engine.setRule($src);
      engine.setRandom(get(density));

      engine.setStateSize($stateSize);
      engine.setRandom(get(density));
    }
  }

  function panDown(event: GestureCustomEvent) {
    if (!IS_TOUCH_DEVICE) {
      prevPos = currPos = engine.getWorldPositionFromEvent(event.detail.event.pageX, event.detail.event.pageY);
      buttonKey = event.detail.event.button;
      shiftKey = event.detail.event.shiftKey;
    } else {
      prevPos = currPos = engine.getWorldPositionFromEvent(event.detail.x, event.detail.y);
      buttonKey = event.detail.pointersCount > 1 ? 2 : 0;
      shiftKey = $isErasing;
    }
  }

  function panMove(event: GestureCustomEvent) {
    if (!IS_TOUCH_DEVICE) {
      shiftKey = event.detail.event.shiftKey;
      currPos = engine.getWorldPositionFromEvent(event.detail.event.pageX, event.detail.event.pageY);
    } else {
      buttonKey = event.detail.pointersCount > 1 ? 2 : 0;
      currPos = engine.getWorldPositionFromEvent(event.detail.x, event.detail.y);
    }
  }

  function panUp() {
    buttonKey = null;
    prevPos = null;
  }

  function keydown(e: KeyboardEvent) {
    switch (e.code) {
      case "Backspace":
        engine.setRandom($density);
        break;
      case "Delete":
        engine.setRandom(0);
        break;
      case "Space":
        $paused = !$paused;
        break;
      case "Enter":
        $paused = true;
        engine.next();
        break;
      case "KeyH":
        $history = !$history;
        break;
      case "KeyC":
        $mode = 2;
        break;
      case "KeyS":
        $mode = 0;
        break;
      case "KeyR":
        $mode = 1;
        break;
    }

    if (!isNaN(+e.key)) {
      if (+e.key === 0) $radius = 89;
      else $radius = [1, 2, 3, 5, 8, 13, 21, 34, 55][+e.key - 1];
    }
  }

  function wheel(event: WheelEvent) {
    const delta = -Math.sign(event.deltaY);

    let scale = engine.scale;
    if (delta > 0) scale *= 2;
    if (delta < 0) scale /= 2;
    scale = clamp(scale, 0.125, 64);

    engine.zoomAt(currPos, scale);
  }

  let initialScale = 1;

  function pinchDown(event: GestureCustomEvent) {
    initialScale = engine.scale;
  }

  function pinchHandler(event: PinchCustomEvent) {
    let scale = event.detail.scale * initialScale;
    const center = engine.getWorldPositionFromEvent(event.detail.center.x, event.detail.center.y);

    scale = clamp(scale, 0.125, 64);
    engine.zoomAt(center, scale);
  }

  function resize() {
    if (canvasWidth === screen.width && canvasHeight === screen.height) return;
    canvasWidth = canvas.width = screen.width;
    canvasHeight = canvas.height = screen.height;
    engine.setScreenSize([canvasWidth, canvasHeight]);
  }
</script>

<svelte:document on:keydown={keydown} />
<svelte:window on:resize={resize} />

<canvas
  bind:this={canvas}
  use:pan={{ delay: 500 }}
  use:pinch
  on:pandown={panDown}
  on:panmove={panMove}
  on:panup={panUp}
  on:wheel={wheel}
  on:pinchdown={pinchDown}
  on:pinch={pinchHandler}
  on:contextmenu|preventDefault
  class="touch-none fixed top-0 left-0 bg-black"
/>
<Controls {engine} />
