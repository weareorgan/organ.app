<script>
	import Hero from '$lib/components/pages/home/Hero.svelte';
	import BIP from '$lib/components/pages/home/BIP.svelte';
	import OfferLayout from '$lib/components/pages/home/OfferLayout.svelte';
	import Articles from '$lib/components/pages/home/Articles.svelte';
	import About from '$lib/components/pages/home/About.svelte';
	import Footer from '$lib/components/pages/home/Footer.svelte';
</script>

<svelte:head>
	<title>Organ – Innovative Web Application Design & Development Services</title>
	<meta
		name="description"
		content="We drive your business to success with our innovative web application design and development services. Enjoy top-tier performance, straightforward pricing, and rapid project delivery—all tailored to your specific needs"
	/>
</svelte:head>

<Hero />
<BIP />
<OfferLayout />
<Articles />
<About />
<Footer />
