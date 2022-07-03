<script lang="ts">
	import Header from './components/Header.svelte';
	import Selector from './components/Selector.svelte';
	import Metronome from './components/Metronome.svelte';
	import Tuner from './components/Tuner.svelte';
	import {toolSelection, ToolSelection} from './stores/toolSelection';

	let selectedTool: ToolSelection;

	toolSelection.subscribe((selected) => {
		selectedTool = selected;
	});
</script>

<main>
	<Header />
	<Selector />
	{#if selectedTool === ToolSelection.Metronome}
		<Metronome />
	{:else}
		<Tuner />
	{/if}
</main>

<style>
	:global(:root){
  	--main-color: purple;
		--secondary-color: pink;
	}
	main {
		text-align: center;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>