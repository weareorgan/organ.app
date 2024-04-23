<script>
	import Accordion from '../../global/Accordion.svelte';
</script>

<div class="about">
	<h2>
		What is Organ <svg
			xmlns="http://www.w3.org/2000/svg"
			width="54"
			height="108"
			viewBox="0 0 54 108"
			fill="none"
		>
			<path
				d="M16.5747 39.2382C12.3446 39.2382 9.3494 39.0401 6.40359 35.5369C2.39437 30.7692 1.68391 24.8725 2.52749 18.8377C3.69419 10.4913 13.3881 4.58844 20.9754 3.07099C29.9669 1.27269 39.8553 0.860317 47.5835 6.48079C53.6141 10.8667 53.3799 16.7494 49.7401 22.6555C43.4198 32.9111 35.0601 41.4005 27.1247 50.371C22.5358 55.5585 18.8892 61.5763 16.3415 68.0612C15.6282 69.8769 14.4764 72.3995 14.4764 74.3853"
				stroke="black"
				stroke-width="3"
				stroke-linecap="round"
			/>
			<path
				d="M12.3781 106.385C11.8022 105.727 12.4682 105.882 13.0193 105.86C14.3847 105.806 13.9519 104.322 13.9519 103.296C13.9519 101.523 13.6199 101.139 11.8535 101.139"
				stroke="black"
				stroke-width="3"
				stroke-linecap="round"
			/>
		</svg>
	</h2>

	<div class="accordions">
		<Accordion title={'Organ is'}>
			A web studio specialized in web <strong> design and development </strong>, delivering visually
			stunning websites optimized for user engagement and performance. Our team crafts scalable,
			high-speed solutions designed to accelerate business growth and enhance digital presence.</Accordion
		>

		<Accordion title={'Why we build in public'}>
			We build in public because we believe in the power of transparency and community engagement.
			This approach allows us to create a genuine and trustful relationship with our audience,
			<strong
				>sharing our entrepreneurial journey <a class="link" href="/" target="_blank">on YouTube</a
				>. By revealing our challenges, successes, and lessons learned openly</strong
			>, we not only gain invaluable feedback but also inspire and educate others who might be on
			similar paths. It helps us stay accountable and continuously improve, ensuring that we always
			deliver the best possible solutions to our clients.</Accordion
		>
	</div>
</div>

<style>
	.about {
		width: 680px;
		margin: auto;
		margin-top: 200px;
	}

	h2 {
		font-size: 48px;
		font-weight: 600;
		margin-bottom: 25px;

		& svg {
			position: relative;
			top: 20px;
			left: 20px;
		}
	}

	.accordions {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
</style>
