<script lang="typescript">
  export let title = "";
  export let value: number;

  export let min: number;
  export let max: number;
  export let step = 1;

  function increase() {
    if (value + step <= max) value += step;
  }
  function decrease() {
    if (value - step >= min) value -= step;
  }
</script>

<fieldset>
  <legend>{title}</legend>
  <input type="range" {min} {max} {step} bind:value />
  <div>
    <button on:click={decrease}>-</button>
    {value}
    <button on:click={increase}>+</button>
  </div>
</fieldset>

<style>
  fieldset {
    width: 85%;
    margin: 2px auto 5vh;
  }

  legend {
    text-align: left;
  }

  input[type="range"] {
    width: 80%;
    padding-left: 0;
    padding-right: 0;
  }
</style>
