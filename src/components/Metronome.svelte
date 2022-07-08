<script lang="typescript">
  type IntervalId = ReturnType<typeof setInterval>;

  const BEAT_LENGTH = 50;

  let speed = 60;
  let isRunning = false;
  let isBeating = false;

  let intervalId: IntervalId | null = null;

  $: runBeat(speed, isRunning);

  function runBeat(velocity: number, isActive: boolean) {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    if(!isActive) {
      return;
    }
    intervalId = setInterval(() => {
      isBeating = true;
      setTimeout(() => {
        isBeating = false;
      }, BEAT_LENGTH);
    }, Math.trunc(60 * 1000/velocity));
    
  }
</script>

<div>
  <input type="range" min="40" max="240" bind:value={speed} class="speed-slider">
  <div>
    <button on:click={() => speed--}>-</button>
    {speed}
    <button on:click={() => speed++}>+</button>
  </div>
  <hr />
  <div class="circle-wrapper">
    <div class="circle" class:beat={isBeating} />
  </div>
  <hr />
  {#if isRunning}
  <button on:click={() => isRunning = false}>stop</button>
  {:else}
  <button on:click={() => isRunning = true}>play</button>
  {/if}
</div>

<style>
  .speed-slider {
    width: 100%;
  }

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

  input[type=range] {
    width: 80%;
    padding-left: 0;
    padding-right: 0;
  }
</style>