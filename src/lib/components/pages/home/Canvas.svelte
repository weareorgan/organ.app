<script>
	import { onMount } from 'svelte';

	let canvas;

	onMount(async () => {
		const Experience = (await import('../../../webgl/home/main.js')).default;

		new Experience(canvas);
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: absolute;
		top: 0;
	}
</style>
