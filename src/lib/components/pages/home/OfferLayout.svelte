<script>
	import Offer1 from './Offer1.svelte';
	import Offer2 from './Offer2.svelte';
	import Offer3 from './Offer3.svelte';
	import Offer4 from './Offer4.svelte';
</script>

<div class="offer">
	<Offer1 />
	<Offer2 />
	<Offer3 />
	<Offer4 />
</div>

<style>
	.offer {
		width: 680px;
		margin: 0 auto;
		margin-top: 150px;
		gap: 100px;
		display: flex;
		flex-direction: column;
	}

	:global(.offer h2) {
		font-size: 48px;
		font-weight: 600;
		margin-bottom: 25px;
	}

	:global(.offer .illustration) {
		width: 100%;
		font-size: 18px;
		font-weight: 600;
		gap: 70px;
	}

	@media (max-width: 680px) {
		.offer {
			width: 95%;
		}

		:global(.offer h2) {
			font-size: 36px;
			font-weight: 600;
			margin-bottom: 25px;
		}
		:global(.offer .illustration) {
			font-size: 16px;
		}
	}
</style>
