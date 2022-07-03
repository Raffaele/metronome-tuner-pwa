<script lang="ts">
	import Header from './components/Header.svelte';
</script>

<main>
	<Header />
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	:global(:root){
  	--header-color: purple;
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