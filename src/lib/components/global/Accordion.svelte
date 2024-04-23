<script>
	import gsap from 'gsap';
	import { onDestroy } from 'svelte';
	export let title;
	export let defaultState = 'closed';

	let open;

	let ctx, accordion;

	const click = () => {
		gsap.context(() => {
			if (open === false) {
				open = true;
				gsap.to(accordion, { height: accordion.scrollHeight + 'px' });
				gsap.to('svg', { rotate: 0 });
			} else {
				open = false;
				gsap.to(accordion, { height: '37px' });
				gsap.to('svg', { rotate: -180 });
			}
		}, accordion);
	};

	onDestroy(() => {
		if (ctx) ctx.revert();
	});
</script>

<div
	class="accordion"
	bind:this={accordion}
	style="height: {defaultState === 'open' ? 'fit-content' : '37px'};"
>
	<button class="title" on:click={click}>
		<span>{title}</span>
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
			<path
				d="M1.5 5.75L6 1.25L10.5 5.75"
				stroke="black"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
	<div class="content"><slot /></div>
</div>

<style>
	.accordion {
		overflow: hidden;
		border-bottom: 1px solid var(--grey);
	}
	button {
		display: flex;
		max-height: 37px;
		padding: 10px 12px;
		justify-content: space-between;
		align-items: center;
		font-weight: 600;
		margin-bottom: 12px;
		width: 100%;
		background-color: white;
		position: relative;
		z-index: 50;
	}

	.content {
		padding: 0 12px;
		padding-bottom: 12px;
	}

	svg {
		rotate: -179deg;
	}
</style>
