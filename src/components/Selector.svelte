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
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px red solid;
    padding-bottom: 10px;
  }

  .selected {
    /* background-color: green; */
    font-weight: bold;
  }
</style>