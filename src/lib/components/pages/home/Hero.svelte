<script>
	import Clump from '$lib/components/pages/home/Clump.svelte';
</script>

<div class="hero">
	<Clump />

	<div class="container">
		<h1>Organ</h1>
		<h2>The web studio that builds in public</h2>
		<h3>ux/ui, web dev</h3>
		<div class="cta">
			<a href="/buildinpublic">Build in public</a>
			<a href="/contact">Contact</a>
		</div>

		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
			<path
				d="M5 12.5625L11.75 19.3125L18.5 12.5625M11.75 18.375V4.6875"
				stroke="black"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</div>
</div>

<style>
	.hero {
		height: 100svh;
		width: 100vw;
		position: relative;
		display: flex;
		justify-content: center;
	}

	.container {
		position: absolute;
		bottom: 50px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	h1 {
		font-size: 48px;
		font-weight: 600;
		margin: 10px;
	}

	h2 {
		font-size: 18px;
		font-weight: 400;
		margin: 0;
	}

	h3 {
		font-size: 13px;
		color: var(--grey2);
		font-weight: 400;
		margin: 5px 0;
	}

	.cta {
		display: flex;
		gap: 30px;
		margin-top: 30px;
	}

	.cta a {
		display: flex;
		height: 44px;
		width: 152px;
		justify-content: center;
		align-items: center;
		border-radius: 6px;
		box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
		font-weight: 600;
	}

	a[href='/buildinpublic'] {
		background-color: var(--black);
		color: white;
		transition: background 0.3s;

		&:hover {
			background-color: var(--black-hover);
		}
	}
	a[href='/contact'] {
		background: linear-gradient(90deg, #fff 0%, #f0f0f0 100%);
		transition: background 0.3s;

		&:hover {
			background: linear-gradient(156deg, #fff, #f0f0f0);
		}
	}

	svg {
		margin-top: 50px;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		.container {
			bottom: 20px;
		}
		svg {
			/* margin-top: 20px; */
		}
	}
</style>
