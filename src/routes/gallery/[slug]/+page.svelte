<script>
	export let data;
	
</script>
<section>
<h1 class="h1 m-2 text-center p-4">{data.post.title}</h1>
<img src="{data.post.img}" alt="{data.post.alt}" class="w-1/2 m-auto">
<p class="text-center">{data.post.description}</p>
</section>