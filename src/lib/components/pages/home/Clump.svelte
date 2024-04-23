<script>
	import { onDestroy, onMount } from 'svelte';

	let canvas, instance;

	onMount(async () => {
		const Experience = (await import('../../../webgl/clump/main.js')).default;

		instance = new Experience(canvas);

		return () => instance.destroy();
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		outline: none;
		z-index: -99;
	}
</style>
