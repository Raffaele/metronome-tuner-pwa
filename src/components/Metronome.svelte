<script lang="ts">
  import { onDestroy } from "svelte";
  import MetronomeRunner from "./MetronomeRunner.svelte";
  import MetronomeInput from "./MetronomeInput.svelte";
  import { getMetronome, storeMetronome } from "../utils/localMemo";

  const stored = getMetronome();

  let speed = stored.speed || 60;
  let volume = stored.valume || 1;
  let movements = stored.movements || 1;

  onDestroy(() => {
    storeMetronome({
      speed,
      volume,
      movements,
    });
  });
</script>

<div>
  <MetronomeRunner {speed} {volume} {movements} />
  <MetronomeInput bind:movements bind:speed bind:volume />
</div>
