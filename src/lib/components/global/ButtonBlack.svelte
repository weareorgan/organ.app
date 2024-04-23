<script>
	export let href = '/',
		content;
</script>

<a {href}
	>{content}
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path
			d="M5.75 4L10.25 8.5L5.75 13"
			stroke="white"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg></a
>

<style>
	a {
		padding: 10px 12px;
		background-color: var(--black);
		color: white;
		border-radius: 6px;
		display: inline-flex;
		align-items: center;
		gap: 10px;
	}
</style>
