<script>
	// export let data;
</script>

	<main>
		<slot />
	</main>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
</style>