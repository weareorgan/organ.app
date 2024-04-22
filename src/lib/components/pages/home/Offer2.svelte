<script>
	import Accordion from '../../global/Accordion.svelte';
</script>

<div class="offer-2">
	<h3>No Hidden Fees</h3>

	<Accordion title={'View our pricing transparency.'}>
		We believe in complete transparency when it comes to pricing. Our detailed breakdowns ensure you
		know exactly what you’re paying for, every step of the way. From initial consultation to final
		delivery, understand all costs upfront — <strong>
			no hidden fees, just clear, straightforward pricing tailored to your needs.
		</strong>
	</Accordion>

	<div class="illustration">
		<div class="top">
			<div>One-time payment</div>
			<div>Maintain your every month</div>
		</div>

		<div class="bottom">Track your website performance anytime you want</div>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="104"
			height="20"
			viewBox="0 0 104 20"
			fill="none"
			class="top-mid"
		>
			<path
				d="M2.00001 16.8904C13.0884 8.32056 22.078 2.34738 36.1863 1.57657C45.041 1.09279 54.7926 4.24329 63.1099 7.07051C72.196 10.1591 80.4982 12.3204 90.1103 12.2288C91.4683 12.2158 101.491 10.553 100.82 10.0886C98.559 8.52499 93.9874 6.44854 91.2062 6.15622C88.5831 5.88052 96.2345 7.77619 98.7227 8.66506C100.993 9.47618 103.702 8.87071 101.421 11.0972C99.0991 13.3639 96.7535 15.6189 94.7324 18.1289"
				stroke="#1C1C1C"
				stroke-width="3"
				stroke-linecap="round"
			/>
		</svg>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="112"
			height="151"
			viewBox="0 0 112 151"
			fill="none"
			class="right"
		>
			<path
				d="M89.0934 1.99993C104.298 28.5264 115.373 52.8526 107.835 83.6554C102.979 103.503 88.6143 121.768 71.6141 132.765C57.3914 141.965 40.9636 138.867 25.3798 138.015C19.4862 137.692 12.644 134.159 7.16018 134.638C5.66881 134.769 11.7765 146.958 12.8159 149.356C13.1579 150.145 7.15598 140.413 4.75724 138.162C-8.30934 125.9 24.3218 129.781 26.333 121.363"
				stroke="#171717"
				stroke-width="3"
				stroke-linecap="round"
			/>
		</svg>
	</div>
</div>

<style>
	.illustration {
		display: flex;
		flex-direction: column;
		gap: 100px;
		position: relative;

		& > div {
			width: 100%;
		}
		& .top {
			display: flex;
			justify-content: space-between;
			padding: 0 50px;
		}

		& .bottom {
			display: flex;
			justify-content: center;
			position: relative;
			right: 15px;
		}

		& svg {
			position: absolute;
		}

		& svg.top-mid {
			left: 260px;
			top: 0;
		}

		& svg.right {
			right: 0;
			top: 10px;
		}
	}
</style>
