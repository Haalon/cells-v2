<script lang="ts">
  import {
    Button,
    ButtonGroup,
    Checkbox,
    Kbd,
    RadioButton,
    Range,
    Select,
    TabItem,
    Tabs,
    Textarea,
  } from "flowbite-svelte";
  import type { ChangeEventHandler, MouseEventHandler } from "svelte/elements";
  import { rules } from "../lib/rules";
  import { density, history, mode, radius, src, stateSize } from "../state";
  import { isTouchDevice } from "../utils";

  let visibility = "visible";

  const handleChangeX = (e: { currentTarget: EventTarget | null }) => {
    const currentTarget = e.currentTarget as HTMLInputElement;
    $stateSize = [+currentTarget.value, $stateSize[1]];
  };
  const handleChangeY = (e: { currentTarget: EventTarget | null }) => {
    const currentTarget = e.currentTarget as HTMLInputElement;
    $stateSize = [$stateSize[0], +currentTarget.value];
  };

  function keydown(e: KeyboardEvent) {
    if (e.key == "Escape") visibility = visibility === "visible" ? "hidden" : "visible";
  }

  let ruleIndex = 0;
  let tempSrc = "";

  $: {
    tempSrc = $src;
  }

  $: {
    const rule = rules[ruleIndex];
    $src = rule.src;
    $density = rule.r;
  }

  const visibilityHandler = (e: { currentTarget: EventTarget | null }) => {
    const currentTarget = e.currentTarget as HTMLButtonElement;
    visibility = visibility === "visible" ? "hidden" : "visible";
    setTimeout(() => currentTarget.blur(), 200);
  };
</script>

<svelte:document on:keydown={keydown} />

<div class="w-full min-h-full absolute items-stretch flex justify-end pointer-events-none" style:visibility>
  <div
    class="mt-2 mb-2 pointer-events-auto p-5 pt-10 bg-slate-900/95 w-fit min-w-[60%] text-white rounded flex flex-col flex-shrink-0"
  >
    <Tabs style="pill" contentClass="p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4 grid flex-grow">
      <TabItem open title="Controls">
        <div class="grid grid-cols-2 gap-y-4 items-baseline">
          <div><Kbd class="px-2 py-1.5">Esc</Kbd></div>
          <div>Show\Hide this dialog</div>

          <div><Kbd class="px-2 py-1.5">Backspace</Kbd></div>
          <div>Repopulate field</div>

          <div><Kbd class="px-2 py-1.5">Delete</Kbd></div>
          <div>Clear field</div>

          <div><Kbd class="px-2 py-1.5">Space</Kbd></div>
          <div>Toggle pause</div>

          <div><Kbd class="px-2 py-1.5">Enter</Kbd></div>
          <div>Advance one iteration</div>

          <div><Kbd class="px-2 py-1.5">Rmb</Kbd> + Mouse Drag</div>
          <div>Drag the field around</div>

          <div><Kbd class="px-2 py-1.5">Wheel</Kbd></div>
          <div>Zoom In\Out</div>

          <div><Kbd class="px-2 py-1.5">Lmb</Kbd></div>
          <div>Draw on the field</div>

          <div><Kbd class="px-2 py-1.5">Lmb</Kbd> + <Kbd class="px-2 py-1.5">Shift</Kbd></div>
          <div>Erase on the field</div>

          <div><Kbd class="px-2 py-1.5">H</Kbd></div>
          <div>Toggle history shader</div>

          <div><Kbd class="px-2 py-1.5">1</Kbd>...<Kbd class="px-2 py-1.5">9</Kbd></div>
          <div>Switch preset drawing sizes</div>

          <div>
            <Kbd class="px-2 py-1.5">R</Kbd> / <Kbd class="px-2 py-1.5">C</Kbd> / <Kbd class="px-2 py-1.5">S</Kbd>
          </div>
          <div>Switch drawing shape</div>
        </div>
      </TabItem>
      <TabItem title="General">
        <div class="grid grid-cols-2 gap-y-4 items-baseline">
          <label for="rules">Select rule</label>
          <Select id="rules" bind:value={ruleIndex} placeholder="">
            {#each rules as { name }, i}
              <option value={i}>{name}</option>
            {/each}
          </Select>

          <label for="size_x">Field width: {$stateSize[0]}</label>
          <Range
            name="size_x"
            on:change={handleChangeX}
            value={$stateSize[0]}
            min="16"
            max="4096"
            step="16"
            class="h-full bg-transparent dark:bg-transparent"
          />

          <label for="size_y">Field height: {$stateSize[1]}</label>
          <Range
            name="size_y"
            on:change={handleChangeY}
            value={$stateSize[1]}
            min="16"
            max="4096"
            step="16"
            class="h-full bg-transparent dark:bg-transparent"
          />

          <label for="density">Density: {$density}</label>
          <Range
            name="density"
            bind:value={$density}
            min="0"
            max="1"
            step="0.01"
            class="h-full bg-transparent dark:bg-transparent"
          />

          <label for="history">Enable history shader</label>
          <Checkbox name="history" bind:checked={$history} />
        </div>
      </TabItem>
      <TabItem title="Source">
        <div class="flex flex-col min-h-full gap-4">
          <Textarea
            on:keydown={(e) => e.stopPropagation()}
            id="textarea-id"
            placeholder="Your message"
            rows="12"
            wrap="off"
            name="message"
            class="flex-grow"
            bind:value={tempSrc}
          />

          <Button on:click={() => ($src = tempSrc)}>compile</Button>
        </div>
      </TabItem>
      <TabItem title="Drawing">
        <div class="grid grid-cols-2 gap-y-4 items-baseline">
          <label for="radius">Radius: {$radius}</label>
          <Range
            name="radius"
            bind:value={$radius}
            min="1"
            max="100"
            step="1"
            class="h-full bg-transparent dark:bg-transparent"
          />

          <label for="mode">Drawing shape</label>
          <ButtonGroup name="mode">
            <RadioButton value={0} bind:group={$mode}>■</RadioButton>
            <RadioButton value={1} bind:group={$mode}>◆</RadioButton>
            <RadioButton value={2} bind:group={$mode}>●</RadioButton>
          </ButtonGroup>
        </div>
      </TabItem>
    </Tabs>
  </div>
</div>
<div class="fixed top-2 right-2" style:visibility={isTouchDevice() ? "visible" : "hidden"}>
  <Button size="sm" on:click={visibilityHandler}>X</Button>
</div>
