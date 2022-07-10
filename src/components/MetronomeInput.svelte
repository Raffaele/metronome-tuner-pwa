<script lang="ts">
  import ParamSetter from "./ParamSetter.svelte";

  export let speed: number;
  export let volume: number;
  export let movements: number;
</script>

<ParamSetter bind:value={speed} min={40} max={240} title="Velocity" />
<ParamSetter bind:value={volume} min={0} max={10} title="Volume" />
<ParamSetter bind:value={movements} min={1} max={12} title="Movements" />
