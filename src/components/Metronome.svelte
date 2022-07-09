<script lang="ts">
  import MetronomeRunner from "./MetronomeRunner.svelte";
  import MetronomeInput from "./MetronomeInput.svelte";

  let speed = 60;
  let volume = 1;
  let movements = 1;
</script>

<div>
  <MetronomeRunner {speed} {volume} {movements} />
  <MetronomeInput bind:movements bind:speed bind:volume />
</div>
