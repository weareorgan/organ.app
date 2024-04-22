<script>
	import ButtonBlack from './ButtonBlack.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let hide = false;
	let flyArr = [];

	onMount(() => {
		if ($page.url.pathname === '/buildinpublic') {
			hide = true;
		}
	});
</script>

<div class="content">
	<h2><span class="text">In 2024 we earned</span> <span class="number">734 000 $</span></h2>
	<div style={hide === true ? 'visibility:hidden' : ''}>
		<ButtonBlack href={'/buildinpublic'} content={'Get All Insights – Open Dashboard'} />
	</div>

	{#each Array(4) as _, i}
		<div class="fly" data-index={i}>
			<div class="left">
				<div class="picture"></div>
				<div class="description"><span>Netflix</span> <span class="date">08/11/2024</span></div>
			</div>

			<div class="right">+$50 000.00</div>
		</div>
	{/each}
</div>

<style>
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		flex-direction: column;
		gap: 50px;
	}

	h2 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	h2 .text {
		font-size: 18px;
		font-weight: 400;
	}

	h2 .number {
		font-size: 48px;
		font-weight: 600;
	}

	.fly {
		position: absolute;
		display: flex;
		width: 400px;
		height: 64px;
		padding: 0 20px;
		justify-content: space-between;
		align-items: center;
		border-radius: 24px;
		border: 1px solid var(--grey);
		opacity: 0.75;
		background: var(--grey3);
		font-weight: 500;
		will-change: transform;
		transform: translate(-50%, -50%);

		&[data-index='0'] {
			top: 25%;
			left: 25%;
		}

		&[data-index='1'] {
			top: 35%;
			left: 75%;
		}

		&[data-index='2'] {
			top: 75%;
			left: 20%;
		}

		&[data-index='3'] {
			top: 70%;
			left: 70%;
		}

		& .left {
			display: flex;
			gap: 10px;
		}

		& .left .picture {
			height: 34px;
			width: 34px;
			background-color: var(--black);
			border-radius: 50%;
		}

		& .left .description {
			display: flex;
			flex-direction: column;
			gap: 3px;

			& .date {
				color: var(--grey2);
				font-size: 11px;
			}
		}
	}

	@media (max-width: 768px) {
		.fly {
			scale: 0.8;
		}
	}
</style>
