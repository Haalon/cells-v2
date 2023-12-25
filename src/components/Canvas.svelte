<script lang="ts">
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { Engine } from "../lib/engine";
  import { clamp, sub, type Vec } from "../lib/vector";
  import { density, history, mode, paused, radius, src, stateSize } from "../state";

  let canvas: HTMLCanvasElement;

  let canvasWidth: number, canvasHeight: number;
  let engine: Engine;

  let currPos: Vec = [0, 0];
  let prevPos: Vec = [0, 0];

  let buttonKey: number | null = null;
  let shiftKey = false;

  onMount(() => {
    canvasWidth = canvas.width = screen.width;
    canvasHeight = canvas.height = screen.height;

    engine = new Engine([canvasWidth, canvasHeight], canvas, $stateSize);
    engine.setRandom();

    let frame = requestAnimationFrame(function loop(t) {
      frame = requestAnimationFrame(loop);

      if (!$paused) engine.next();

      if (buttonKey === 0) {
        engine.drawLine({ origin: prevPos, end: currPos, mode: $mode, value: !shiftKey, radius: $radius });
      }

      if (buttonKey === 2) {
        engine.shiftBy(sub(prevPos, currPos));
      }

      prevPos = currPos;
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
    }
  }

  $: {
    if (canvas && engine) {
      engine.setStateSize($stateSize);
      engine.setRandom(get(density));
    }
  }

  function pointerdown(event: MouseEvent) {
    currPos = engine.getWorldPositionFromEvent(event);
    buttonKey = event.button;
    shiftKey = event.shiftKey;
  }

  function pointermove(event: MouseEvent) {
    prevPos = currPos;
    currPos = engine.getWorldPositionFromEvent(event);
    shiftKey = event.shiftKey;
  }

  function pointerup(event: MouseEvent) {
    buttonKey = null;
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

  function resize() {
    console.log(screen.width, screen.height);

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
  on:pointerdown={pointerdown}
  on:pointermove={pointermove}
  on:pointerup={pointerup}
  on:wheel={wheel}
  on:contextmenu|preventDefault
  class="touch-none fixed top-0 left-0 bg-black"
/>
