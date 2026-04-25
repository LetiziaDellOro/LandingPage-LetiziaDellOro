<script>
	import TopBar from '$lib/components/landing/TopBar.svelte';
	import FooterBrand from '$lib/components/landing/FooterBrand.svelte';

	const paragraphs = [
		"My name is Letizia Dell’Oro, I’m 21 years old, and traveling is the way I try to understand the world. What began as curiosity has become a need to explore, to question, and to see beyond my own perspective.",
		"I don’t travel just to visit places, but to experience different ways of living and thinking. I’m drawn to small details, everyday moments, and the subtle differences that make each place unique.",
		"Traveling pushes me out of routine and into uncertainty, and that’s where I learn the most, about the world and about myself.",
		"This space collects those experiences, not just destinations, but reflections and fragments of stories that have shaped how I see things."
	];
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<main class="about-page">
	<TopBar aboutHref="/about" />

	<section class="about-content" aria-label="About Letizia Dell'Oro">
		<a class="back-link" href="/">Go back and check out my photos!</a>

		<figure class="feature-card">
			<img src="/image/about.png" alt="Letizia Dell'Oro at Primrose Hill in London" />
			<figcaption>
				<span class="location">Primrose Hill - London</span>
				<span class="divider">/</span>
				<span class="country">England</span>
			</figcaption>
		</figure>

		<h1>On the Move</h1>

		<div class="copy">
			{#each paragraphs as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
	</section>

	<FooterBrand />
</main>

<style>
	.about-page {
		min-height: 100svh;
		background: var(--page-bg);
		color: var(--text-primary);
		display: flex;
		flex-direction: column;
	}

	.about-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--spacing-8) var(--spacing-10) calc(var(--spacing-11) * 2 + var(--spacing-10) * 2);
		gap: var(--spacing-7);
	}

	.feature-card {
		margin: 0;
		width: min(664px, 100%);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-2);
	}

	.feature-card img {
		display: block;
		width: 100%;
		aspect-ratio: 664 / 400;
		object-fit: cover;
		background: color-mix(in oklab, var(--page-bg), white 8%);
		transform-origin: center;
		transition: transform 280ms ease, filter 280ms ease;
	}

	.feature-card:hover img,
	.feature-card:focus-within img {
		transform: scale(0.98);
		filter: grayscale(100%);
	}

	.feature-card figcaption {
		display: flex;
		align-items: baseline;
		gap: var(--spacing-2);
		flex-wrap: wrap;
		white-space: nowrap;
		font-family: var(--h1-font-family);
		font-size: var(--unit-24);
		font-weight: var(--h1-font-weight);
		line-height: 1;
	}

	.location {
		color: var(--text-primary);
	}

	.divider,
	.country {
		color: var(--text-secondary);
	}

	.country {
		font-family: var(--script-font-family);
		font-weight: var(--script-font-weight);
	}

	h1 {
		margin: 0;
		font-family: var(--script-font-family);
		font-size: 40px;
		font-weight: var(--script-font-weight);
		line-height: 1.1;
		text-align: center;
	}

	.copy {
		width: min(893px, 100%);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
		margin-bottom: var(--spacing-14);
		font-family: var(--h1-font-family);
		font-size: var(--unit-24);
		font-weight: var(--h1-font-weight);
		line-height: 1.1;
	}

	.copy p {
		margin: 0;
	}

	.back-link {
		color: var(--color-filter-content-selected);
		font-family: var(--script-font-family);
		font-size: var(--unit-24);
		font-weight: 400;
		line-height: 1;
		text-align: center;
		text-decoration: underline;
		text-decoration-thickness: from-font;
		text-underline-offset: 0.06em;
		white-space: nowrap;
		margin-top: var(--spacing-5);
		transition: color 180ms ease;
	}

	.back-link:hover,
	.back-link:focus-visible {
		color: var(--color-filter-background-selected);
	}

	@media (max-width: 900px) {
		.about-content {
			padding: var(--spacing-8) var(--spacing-5) calc(var(--spacing-10) * 2 + var(--spacing-8));
			gap: var(--spacing-6);
		}

		.back-link {
			white-space: normal;
		}
	}

	@media (max-width: 600px) {
		.about-content {
			padding: var(--spacing-7) var(--spacing-5) calc(var(--spacing-10) * 2 + var(--spacing-7));
			gap: var(--spacing-5);
		}

		.feature-card {
			gap: 10px;
		}

		.feature-card figcaption {
			font-size: 20px;
		}

		h1 {
			font-size: 24px;
		}

		.copy {
			font-size: 20px;
			line-height: 1.15;
			margin-bottom: var(--spacing-14);
		}

		.back-link {
			font-size: 20px;
			margin-top: var(--spacing-4);
		}
	}
</style>
