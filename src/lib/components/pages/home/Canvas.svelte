<script>
	import { onDestroy, onMount } from 'svelte';

	let canvas, instance;

	onMount(async () => {
		const Experience = (await import('../../../webgl/home/main.js')).default;

		instance = new Experience(canvas);

		return () => instance.destroy();
	});

	onDestroy(() => {
		console.log('here');
		if (instance) instance.destroy();
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: absolute;
		top: 0;
	}
</style>
