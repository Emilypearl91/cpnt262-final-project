<script>
  export let data;
</script>

<h1 class="h1 text-center p-4">Patterns</h1>

<ul>
<section class="flex flex-row flex-wrap justify-evenly">
{#each data.summaries as { slug, title, img, alt }}
	<li>		
	<a href="./gallery/{slug}"> 
		<div class="card p-4 max-w-md m-5">
				<h2 class="h2 text-center p-4">{title}</h2> 
				<img src="{img}" alt="{alt}" class="w">
			</div>
		</a> 
	</li>
{/each}	
</section>
</ul>