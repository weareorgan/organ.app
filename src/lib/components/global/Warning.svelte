<script>
	export let title;
</script>

<div class="warning">
	<div class="title">{title}</div>

	<div class="content">
		<slot />
	</div>
</div>

<style>
	.warning {
		display: flex;
		width: 680px;
		padding: 10px;
		flex-direction: column;
		justify-content: center;
		gap: 10px;

		border-radius: 6px;
		border: 1px solid var(--orange);
		background: rgba(255, 149, 0, 0.05);
	}

	.title {
		color: var(--orange);
		font-size: 18px;
		font-weight: 600;
	}
</style>
