<script>
	import TopBar from '$lib/components/landing/TopBar.svelte';
	import HeroIntro from '$lib/components/landing/HeroIntro.svelte';
	import TravelTabs from '$lib/components/landing/TravelTabs.svelte';
	import PhotoGrid from '$lib/components/landing/PhotoGrid.svelte';
	import FooterBrand from '$lib/components/landing/FooterBrand.svelte';

	import { metadata as intro } from '$lib/content/landing/intro.md';
	import { metadata as malawi } from '$lib/content/travels/malawi.md';
	import { metadata as canada } from '$lib/content/travels/canada.md';
	import { metadata as interrail } from '$lib/content/travels/interrail.md';

	const tabs = [malawi, canada, interrail].map((item) => ({
		slug: item.slug,
		label: item.label
	}));

	const cardsByTravel = {
		[malawi.slug]: malawi.cards,
		[canada.slug]: canada.cards,
		[interrail.slug]: interrail.cards
	};

	let activeSlug = $state(malawi.slug);
	let activeCards = $derived(cardsByTravel[activeSlug] ?? []);

	/** @param {string} slug */
	const onSelectTab = (slug) => {
		activeSlug = slug;
	};
</script>

<svelte:head>
	<title>Travel Journal</title>
</svelte:head>
<main class="landing-page">
	<TopBar aboutLabel={intro.aboutLabel} handle={intro.handle} />
	<HeroIntro text={intro.intro} />

	<section class="content">
		<TravelTabs tabs={tabs} activeSlug={activeSlug} onSelect={onSelectTab} />
		<PhotoGrid cards={activeCards} />
	</section>

	<FooterBrand />
</main>

<style>
	.landing-page {
		min-height: 100svh;
		background: var(--page-bg);
		color: var(--text-primary);
		display: flex;
		flex-direction: column;
		gap: var(--layout-section-gap);
		padding-bottom: var(--spacing-7);
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-7);
	}
</style>
