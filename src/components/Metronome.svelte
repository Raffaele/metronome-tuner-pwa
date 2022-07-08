<script lang="typescript">
  import ParamSetter from "./ParamSetter.svelte";
  import { beat } from "../sound";
  type IntervalId = ReturnType<typeof setInterval>;

  const BEAT_LENGTH = 50;

  let speed = 60;
  let isRunning = false;
  let isBeating = false;
  let volume = 1;

  let intervalId: IntervalId | null = null;

  $: runBeat(speed, isRunning);

  function runBeat(velocity: number, isActive: boolean) {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    if (!isActive) {
      return;
    }
    intervalId = setInterval(() => {
      isBeating = true;
      beat(BEAT_LENGTH, volume / 20);
      setTimeout(() => {
        isBeating = false;
      }, BEAT_LENGTH);
    }, Math.trunc((60 * 1000) / velocity));
  }
</script>

<div>
  <ParamSetter bind:value={speed} min={40} max={240} title="Velocity" />

  <ParamSetter bind:value={volume} min={0} max={20} title="Volume" />

  <div class="circle-wrapper">
    <div class="circle" class:beat={isBeating} />
  </div>

  {#if isRunning}
    <button on:click={() => (isRunning = false)}>stop</button>
  {:else}
    <button on:click={() => (isRunning = true)}>play</button>
  {/if}
</div>

<style>
  .circle-wrapper {
    display: flex;
    justify-content: center;
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: gray;
  }

  .beat {
    background-color: red;
  }
</style>
