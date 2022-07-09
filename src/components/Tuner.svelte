<script lang="ts">
  import ParamSetter from "./ParamSetter.svelte";
  import { playTuner } from "../sound";
  let selectedNote = "A";
  let octave = 4;
  let aFrequency = 440;
  let isPlaying = false;
  const noteLines = [
    [
      { name: "C", frequency: 261.63 },
      { name: "C#", frequency: 277.18 },
      { name: "D", frequency: 293.66 },
      { name: "D#", frequency: 311.13 },
      { name: "E", frequency: 329.63 },
      { name: "F", frequency: 349.23 },
    ],
    [
      { name: "F#", frequency: 369.99 },
      { name: "G", frequency: 392.0 },
      { name: "G#", frequency: 415.3 },
      { name: "A", frequency: 440 },
      { name: "A#", frequency: 466.16 },
      { name: "B", frequency: 493.88 },
    ],
  ];
  let volume = 1;

  $: runPlay(isPlaying, volume, octave, aFrequency, selectedNote);

  function runPlay(
    isActive: boolean,
    vol: number,
    oct: number,
    aFreq: number,
    selectedN: string
  ) {
    const originalFrequency = noteLines
      .flat()
      .find((noteInfo) => noteInfo.name === selectedN).frequency;

    const rate = aFreq / 440;
    const noteFrequency = rate * originalFrequency;
    const octaveRate = 2 ** (oct - 4);
    const finalFrequency = noteFrequency * octaveRate;
    console.log({ isActive, finalFrequency });
    playTuner(isActive, finalFrequency, volume);
  }
</script>

<div>
  <div>
    {#each noteLines as notes}
      <div>
        {#each notes as note}
          <div
            class="note-button"
            class:selected={selectedNote === note.name}
            on:click={() => (selectedNote = note.name)}
          >
            {note.name}
          </div>
        {/each}
      </div>
    {/each}
  </div>
  <div>
    {#if isPlaying}
      <button on:click={() => (isPlaying = false)}>stop</button>
    {:else}
      <button on:click={() => (isPlaying = true)}>play</button>
    {/if}
  </div>
  <ParamSetter bind:value={volume} min={0} max={20} title="Volume" />
  <ParamSetter bind:value={octave} min={2} max={6} title="Octave" />
  <ParamSetter
    bind:value={aFrequency}
    min={438}
    max={442}
    title="A Frequency"
  />
</div>

<style>
  .note-button {
    display: inline-flex;
    padding: 2px;
    border: 1px red solid;
    margin: 5px;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
  }

  .selected {
    background-color: cyan;
  }
</style>
