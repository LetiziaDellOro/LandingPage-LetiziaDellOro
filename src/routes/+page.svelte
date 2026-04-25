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

	const learnMoreLinks = {
		[malawi.slug]: {
			label: 'Learn more about Malawi!',
			href: 'https://www.malawi.gov.mw/'
		},
		[canada.slug]: {
			label: 'Learn more about Canada!',
			href: 'https://www.canada.ca/en.html'
		},
		[interrail.slug]: {
			label: 'Learn more about Interrail!',
			href: 'https://www.interrail.eu/it/interrail-passes/global-pass?utm_medium=cpc&utm_source=google&utm_campaign=IR_IT_IT_DO_Paid-Search_Brand-AlwaysOn&utm_id=20904261512&utm_content=brand&gad_source=1&gad_campaignid=20904261512&gbraid=0AAAAAD8teh8Wy2LC2A5KXMhquF1nDb8F-&gclid=CjwKCAjwzLHPBhBTEiwABaLsSphuKU9cHREhVpQ56tlgLA7hCNxDFA6eR8x3MVYoWpo1u_kZF3xApRoC2GsQAvD_BwE'
		}
	};

	const cardsByTravel = {
		[malawi.slug]: malawi.cards,
		[canada.slug]: canada.cards,
		[interrail.slug]: interrail.cards
	};

	let activeSlug = $state(malawi.slug);
	let activeCards = $derived(cardsByTravel[activeSlug] ?? []);
	let activeLearnMore = $derived(learnMoreLinks[activeSlug] ?? null);

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

		{#if activeLearnMore}
			<div class="learn-more-wrap">
				<a
					class="learn-more script"
					href={activeLearnMore.href}
					target="_blank"
					rel="noreferrer"
				>
					{activeLearnMore.label}
				</a>
			</div>
		{/if}
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
		gap: var(--spacing-5);
	}

	.learn-more-wrap {
		padding: 0 var(--layout-gutter-inline);
	}

	.learn-more {
		color: var(--color-link-default);
		display: inline-block;
		font-family: var(--script-font-family);
		font-size: var(--unit-24);
		font-weight: var(--script-font-weight);
		line-height: var(--script-line-height);
		text-decoration: underline;
		text-decoration-thickness: from-font;
		text-underline-offset: 0.06em;
		transition: color 180ms ease;
	}

	.learn-more:hover,
	.learn-more:focus-visible {
		color: var(--color-filter-background-selected);
	}

	@media (max-width: 900px) {
		.content {
			gap: var(--spacing-4);
		}

		.learn-more-wrap {
			padding-inline: var(--spacing-4);
		}

		.learn-more {
			font-size: 20px;
		}
	}
</style>
