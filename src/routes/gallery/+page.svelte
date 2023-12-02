<script>
	export let data;
</script>

<h1>patterns</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="./gallery/{slug}">{title}</a></li>
	{/each}
</ul>