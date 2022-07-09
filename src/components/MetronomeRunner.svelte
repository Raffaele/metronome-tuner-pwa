<script lang="typescript">
  import PlayIcon from "./icons/PlayIcon.svelte";
  import StopIcon from "./icons/StopIcon.svelte";
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

  $: dotIndexes = Array.from({ length: movements }, (_, i) => i + 1);
  $: runBeat(speed, isRunning);

  function runBeat(velocity: number, isActive: boolean) {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    beatMove = movements;
    if (!isActive) {
      return;
    }
    intervalId = setInterval(() => {
      beatMove = getNextBeatMove();
      isBeating = true;
      const beatVolume = beatMove === 1 ? volume / 10 : volume / 20;
      beat(BEAT_LENGTH, beatVolume);
      setTimeout(() => {
        isBeating = false;
      }, BEAT_LENGTH);
    }, Math.trunc((60 * 1000) / velocity));
  }

  function getNextBeatMove() {
    const nextBeatMove = beatMove + 1;
    return nextBeatMove > movements ? 1 : nextBeatMove;
  }
</script>

<div class="circle-wrapper">
  {#each dotIndexes as dotValue}<div
      class="circle"
      class:beat={isBeating && dotValue === beatMove}
    />{/each}
</div>
{#if isRunning}
  <button on:click={() => (isRunning = false)}><StopIcon /> </button>
{:else}
  <button on:click={() => (isRunning = true)}><PlayIcon /></button>
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
    margin: 0 0.5%;
  }

  .beat {
    background-color: red;
  }
</style>
