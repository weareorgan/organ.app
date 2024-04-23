<script>
	export let content = 'Free of charge';
	export let color = 'rgba(0, 122, 255, 0.25)';
</script>

<div class="sign">
	<div class="content" style="background-color: {color};">{content}</div>
	<div class="line" style="background-color: {color};"></div>
</div>

<style>
	.sign {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: max-content;
	}

	.content {
		padding: 5px;
		border-radius: 6px;
		font-size: 12px;
		font-weight: 400;
	}

	.line {
		width: 1px;
		height: 24px;
	}
</style>
