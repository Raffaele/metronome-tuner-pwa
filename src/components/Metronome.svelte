<script lang="typescript">
  import MetronomeRunner from "./MetronomeRunner.svelte";
  import MetronomeInput from "./MetronomeInput.svelte";

  let speed = 60;
  let volume = 1;
  let movements = 1;
</script>

<div>
  <MetronomeInput bind:movements bind:speed bind:volume />

  <MetronomeRunner {speed} {volume} {movements} />
</div>
