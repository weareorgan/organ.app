<script>
	import WorkCard from '../../global/WorkCard.svelte';
</script>

<div class="articles">
	<h2>Articles <span>(work and posts)</span></h2>
	<div class="cards">
		<WorkCard />
		<WorkCard />
	</div>
</div>

<style>
	.articles {
		width: 680px;
		margin: auto;
		margin-top: 200px;
	}
	h2 {
		font-size: 48px;
		font-weight: 600;
		margin-bottom: 80px;

		& span {
			font-size: 13px;
			font-weight: 500;
		}
	}

	.cards {
		display: flex;
		flex-direction: column;
		gap: 50px;
	}
</style>
