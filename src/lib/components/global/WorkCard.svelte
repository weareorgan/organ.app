<script>
	import Tag from './Tag.svelte';

	export let href = '/';
</script>

<a {href}>
	<div class="left"></div>
	<div class="right">
		<div class="top">
			<div class="title">
				<h3>Netflix</h3>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 14 14"
					fill="none"
				>
					<path
						d="M2.56847 1.77284H12.1144V11.3188M11.4515 2.43576L1.77297 12.1143"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>

			<div class="description">
				<div>March 14 2024,</div>
				<div>3min read</div>
			</div>
		</div>

		<div class="tags">
			Tags:
			<Tag content={'+75% impressions'} />
			<Tag
				content={'$50 000.00'}
				svg={`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
				<path d="M1.5 10.5L14.5 10.5C14.7761 10.5 15 10.2761 15 10L15 3C15 2.72386 14.7761 2.5 14.5 2.5L1.5 2.5C1.22386 2.5 1 2.72386 1 3L1 10C1 10.2761 1.22386 10.5 1.5 10.5Z" stroke="black" stroke-width="0.75" stroke-linejoin="round"/>
				<path d="M2 12H14M3 13.5H13" stroke="black" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9Z" stroke="black" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M15 5C14.337 5 13.7011 4.73661 13.2322 4.26777C12.7634 3.79893 12.5 3.16304 12.5 2.5M1 5C1.3283 5 1.65339 4.93534 1.95671 4.8097C2.26002 4.68406 2.53562 4.49991 2.76777 4.26777C2.99991 4.03562 3.18406 3.76002 3.3097 3.45671C3.43534 3.15339 3.5 2.8283 3.5 2.5M15 8C14.337 8 13.7011 8.26339 13.2322 8.73223C12.7634 9.20107 12.5 9.83696 12.5 10.5M1 8C1.3283 8 1.65339 8.06466 1.95671 8.1903C2.26002 8.31594 2.53562 8.50009 2.76777 8.73223C2.99991 8.96438 3.18406 9.23998 3.3097 9.54329C3.43534 9.84661 3.5 10.1717 3.5 10.5" stroke="black" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
			  </svg>`}
				colorRGB={'249, 145, 1'}
			/>

			<Tag
				content={'Delay respected'}
				svg={`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
				<path d="M13 2.5H3C2.17157 2.5 1.5 3.17157 1.5 4V13C1.5 13.8284 2.17157 14.5 3 14.5H13C13.8284 14.5 14.5 13.8284 14.5 13V4C14.5 3.17157 13.8284 2.5 13 2.5Z" stroke="black" stroke-width="0.75" stroke-linejoin="round"/>
				<path d="M4 1.5V2.5M12 1.5V2.5M14.5 5H1.5M9.5 8.125L10.8569 7.125H11V12.375M4.81187 7.59156C4.94719 7.36281 5.32594 7 5.99469 7C6.78531 7 7.49125 7.43062 7.49125 8.24687C7.49304 8.40489 7.46319 8.56167 7.40345 8.70797C7.34372 8.85427 7.25531 8.98714 7.14344 9.09875C6.80187 9.44844 6.28062 9.58219 5.99594 9.58219C6.31781 9.58219 6.90812 9.73344 7.29437 10.1284C7.54187 10.3806 7.65625 10.7362 7.65625 11.1306C7.65625 12.0019 6.92094 12.5 6.0275 12.5C5.27219 12.5 4.80875 11.9509 4.65625 11.6925" stroke="black" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
			  </svg>`}
				colorRGB={'0, 122, 255'}
			/>
		</div>
	</div>
</a>

<style>
	a {
		display: flex;
		width: 680px;
		height: 240px;
		padding: 10px;
		gap: 10px;
		border-radius: 14px;
		border: 1px solid var(--grey, #e4e4e4);
		background: var(--grey3, #fcfcfc);
		box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.05);
	}

	.left {
		width: 50%;
		height: 100%;
		background-color: var(--grey2);

		border-radius: 6px;
		box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
	}

	.right {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.top {
		& .title {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			padding-right: 10px;
			margin-bottom: 8px;
		}

		& h3 {
			font-size: 36px;
			font-weight: 500;
		}
	}

	.description {
		color: var(--grey2);
		font-size: 13px;
		font-weight: 500;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
	}
</style>
