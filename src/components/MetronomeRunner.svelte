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
      console.log({ beatMove });
      isBeating = true;
      beat(BEAT_LENGTH, volume / 20);
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
    margin: 0 0.5%;
  }

  .beat {
    background-color: red;
  }
</style>
