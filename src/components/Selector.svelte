<script lang="ts">
  import {toolSelection, ToolSelection} from '../stores/toolSelection';
  let selectedTool: ToolSelection;

  toolSelection.subscribe((selected) => {
    selectedTool = selected;
  });
</script>

<div class="selector">
  <div on:click={() => toolSelection.set(ToolSelection.Metronome)} class:selected={selectedTool===ToolSelection.Metronome}>
    METRONOME
  </div>
  <div on:click={() => toolSelection.set(ToolSelection.Tuner)} class:selected={selectedTool===ToolSelection.Tuner}>
    TUNER
  </div>
</div>

<style>
  .selector {
    background-color: red;
    display: flex;
    justify-content: space-evenly;
  }

  .selected {
    background-color: green;
  }
</style>