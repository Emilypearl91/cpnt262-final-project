<script>
import {lemonPillow} from './galleryData'
	import {cactusStuffie} from './galleryData'
	import { deerPlushie } from './galleryData'
	import { gingerBread } from './galleryData'
	import { grannySquare } from './galleryData'
	import { puffHat } from './galleryData'
	
</script>

<section  class="flex flex-row flex-wrap justify-around m-8 snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
<a href="/">
<div class="card p-4 w-80 ">
<img src="{gingerBread.img}" alt="{gingerBread.alt}">
<h2 class="h2">{gingerBread.title}</h2>
<p>{gingerBread.description}</p>
</div>
</a>

<a href="/">
<div class="card p-4 w-80 ">
<img src="{puffHat.img}" alt="{puffHat.alt}">
<h2 class="h2">{puffHat.title}</h2>
<p>{puffHat.description}</p>
</div>
</a>

<a href="/">
<div class="card p-4 w-80 ">
<img src="{grannySquare.img}" alt="{grannySquare.alt}">
<h2 class="h2">{grannySquare.title}</h2>
<p>{grannySquare.description}</p>
</div>
</a>

<a href="/">
<div class="card p-4 w-80 ">
<img src="{deerPlushie.img}" alt="{deerPlushie.alt}">
<h2 class="h2">{deerPlushie.title}</h2>
<p>{deerPlushie.description}</p>
</div>
</a>

<a href="/">
<div class="card p-4 w-80 ">
<img src="{cactusStuffie.img}" alt="{cactusStuffie.alt}">
<h2 class="h2">{cactusStuffie.title}</h2>
<p>{cactusStuffie.description}</p>
</div>
</a>

<a href="/">
<div class="card p-4 w-80 ">
<img src="{lemonPillow.img}" alt="{lemonPillow.alt}">
<h2 class="h2">{lemonPillow.title}</h2>
<p>{lemonPillow.description}</p>
</div>
</a>
</section>
