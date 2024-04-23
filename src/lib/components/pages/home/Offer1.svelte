<script>
	import Accordion from '../../global/Accordion.svelte';
	import Warning from '../../global/Warning.svelte';
</script>

<div class="offer-1">
	<h3>Want to Be at the Top of Google Results?</h3>

	<Accordion title={'Explore impressions and performance of our websites.'}>
		We provide comprehensive insights, including <a
			class="link"
			href="https://pagespeed.web.dev/"
			target="_blank">Google PageSpeed</a
		>
		and <a class="link" href="https://plausible.io/" target="_blank">Plausible analytics </a>
		showcasing the effectiveness of our web solutions. Experience our projects' transformations that
		improve speed, usability, and engagement.
		<strong>
			Check our own site's PageSpeed score <a class="link" href="/" target="_blank">here</a> and our
			detailed analytics
			<a class="link" href="/" target="_blank">here</a>.</strong
		>
		We ensure transparency and demonstrate the real value we bring to every website we craft.
	</Accordion>

	<div class="illustration">
		<div>
			<div>More Traffic</div>
			<div>More Engagement</div>
		</div>

		<div>
			<div>More Conversions</div>
			<div>Better UX</div>
		</div>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="49"
			height="102"
			viewBox="0 0 49 102"
			fill="none"
			class="left"
		>
			<path
				d="M47 100C29.6671 93.6173 15.0991 86.6481 6.62782 69.4366C1.16951 58.3467 0.724534 44.2915 4.32082 32.5808C7.32954 22.7834 16.1329 17.8292 23.6738 12.1624C26.5258 10.0192 31.0634 8.99593 33.4144 6.64044C34.0538 5.99985 26.4956 2.72478 25.0837 2.01739C24.6192 1.7847 31.1744 3.96166 33.1581 4.07208C43.9639 4.67356 27.3598 15.5677 29.6976 20.2527"
				stroke="#171717"
				stroke-width="3"
				stroke-linecap="round"
			/>
		</svg>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="85"
			height="29"
			viewBox="0 0 85 29"
			fill="none"
			class="top-mid"
		>
			<path
				d="M2 12.0496C24.6325 13.7152 46.2862 12.6198 68.8782 11.7514C70.1542 11.7024 83.4728 10.8771 82.8054 10.287C77.1497 5.28653 67.0962 7.31241 61.411 3.32339C55.3464 -0.931865 75.3883 8.89342 82.6715 8.67464C85.3043 8.59556 77.6648 12.0824 76.6633 12.6585C70.6831 16.0981 66.8995 21.3581 62.5872 26.7732"
				stroke="#171717"
				stroke-width="3"
				stroke-linecap="round"
			/>
		</svg>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="58"
			height="119"
			viewBox="0 0 58 119"
			fill="none"
			class="right"
		>
			<path
				d="M2.40785 2.24967C27.2983 22.0543 73.713 52.7454 48.0719 89.2309C41.7907 98.1687 32.7461 101.128 23.0527 105.045C22.634 105.214 12.3074 107.571 13.0306 106.28C14.9669 102.824 26.0645 82.2837 18.7418 95.532C17.9671 96.9336 11.1018 105.557 11.7321 107.117C13.4495 111.368 33.257 115.511 37.7127 117.41"
				stroke="#171717"
				stroke-width="3"
				stroke-linecap="round"
			/>
		</svg>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="94"
			height="38"
			viewBox="0 0 94 38"
			fill="none"
			class="bottom-mid"
		>
			<path
				d="M92.0681 2C71.3063 17.0061 56.7731 24.925 31.2716 20.1435C25.0822 18.983 14.9133 17.8754 9.94501 13.459C7.12295 10.9505 2.74946 10.7165 8.24741 8.57834C12.7751 6.81753 19.3406 3.90981 24.2689 3.90981C26.0487 3.90981 8.62202 8.55411 3.26061 9.74548C-3.59384 11.2686 19.5637 32.6269 23.314 36.3771"
				stroke="#171717"
				stroke-width="3"
				stroke-linecap="round"
			/>
		</svg>
	</div>

	<Warning title={'Important'}>
		<a
			class="link"
			href="https://developers.google.com/speed/docs/insights/v5/about"
			target="_blank"
			>According to Google
		</a>, a PageSpeed score of 90 or above is good. We guarantee these top scores — <br />
		<strong> or your money back – </strong>
		<a class="link" href="/refund" target="_blank">Check our refund policy. </a>
	</Warning>
</div>

<style>
	.illustration {
		position: relative;
		display: flex;
		flex-direction: column;
		margin: 100px 0;

		& div {
			display: flex;
			justify-content: space-between;
			padding: 0 50px;
		}

		& svg {
			position: absolute;
		}

		& svg.left {
			left: 20px;
			top: 25px;
		}

		& svg.top-mid {
			left: 270px;
			top: 0px;
		}

		& svg.right {
			right: 0px;
			top: 15px;
		}

		& svg.bottom-mid {
			left: 330px;
			bottom: -40px;
		}
	}
</style>
