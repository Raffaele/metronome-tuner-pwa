<script lang="typescript">
  import { beat } from "../sound";
  type IntervalId = ReturnType<typeof setInterval>;

  export let speed: number;
  export let volume: number;
  export let movements: number;
  let isRunning = false;
  let isBeating = false;
  let beatMove = 1;

  const BEAT_LENGTH = 50;
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

<div class="circle-wrapper">
  <div class="circle" class:beat={isBeating} />
</div>
{#if isRunning}
  <button on:click={() => (isRunning = false)}>stop</button>
{:else}
  <button on:click={() => (isRunning = true)}>play</button>
{/if}

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
