<script>
	import BipContent from '../../global/BIPContent.svelte';
</script>

<div class="bip">
	<img src="/home/grid.png" alt="3d grid with depth" />

	<BipContent />
</div>

<style>
	.bip {
		height: 100svh;
		width: 100vw;
		position: relative;
	}
	img {
		position: absolute;
		height: 100%;
		width: 100%;
		object-fit: cover;
		z-index: -99;
	}
</style>
