<script>
	export let data;
	
</script>
<section class="content-center m-5">
<h1 class="h1 m-2">{data.post.title}</h1>
<img src="{data.post.img}" alt="{data.post.alt}" class="w-1/2">
<p>{data.post.description}</p>
</section>