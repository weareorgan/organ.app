<script>
	export let title;
</script>

<div class="accordion">
	<button class="title">
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
	button {
		display: flex;
		max-height: 37px;
		padding: 10px 12px;
		justify-content: space-between;
		align-items: center;
		font-weight: 600;
		border-bottom: 1px solid var(--grey);
		margin-bottom: 12px;
		width: 100%;
	}

	.content {
		padding: 0px 12px;
	}
</style>
