<script>
	import { onDestroy, onMount } from 'svelte';

	let canvas, instance;

	onMount(async () => {
		const Experience = (await import('../../../webgl/grid/main.js')).default;

		instance = new Experience(canvas);

		return () => instance.destroy();
	});

	onDestroy(() => {
		if (instance) instance.destroy();
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		outline: none;
	}
</style>
