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
			<div class="feature-card-media">
				<img src="/image/about.png" alt="Letizia Dell'Oro at Primrose Hill in London" />
			</div>
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

	<div class="footer-gap" aria-hidden="true"></div>

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
		padding: var(--spacing-8) var(--spacing-10) calc(var(--spacing-11) * 6 + var(--spacing-10) * 3);
		gap: var(--spacing-7);
	}

	.feature-card {
		margin: 0;
		width: min(664px, 100%);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
	}

	.feature-card-media {
		padding: var(--spacing-4);
		background: var(--image-frame-surface);
		border: 1px solid var(--image-frame-border);
	}

	.feature-card-media img {
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

	.feature-card:hover .feature-card-media img,
	.feature-card:focus-within .feature-card-media img {
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
		width: min(620px, 100%);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
		font-family: var(--h1-font-family);
		font-size: var(--unit-24);
		font-weight: var(--h1-font-weight);
		line-height: 1.1;
		text-align: center;
	}

	.copy p {
		margin: 0;
	}

	.back-link {
		color: var(--color-link-default);
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

	.footer-gap {
		flex: 0 0 clamp(180px, 20vw, 320px);
	}

	@media (max-width: 900px) {
		.about-content {
			padding: var(--spacing-8) var(--spacing-5) calc(var(--spacing-11) * 6 + var(--spacing-10) * 3);
			gap: var(--spacing-6);
		}

		.back-link {
			white-space: normal;
		}
	}

	@media (max-width: 600px) {
		.about-content {
			padding: var(--spacing-7) var(--spacing-5) calc(var(--spacing-11) * 6 + var(--spacing-10) * 3);
			gap: var(--spacing-5);
		}

		.feature-card {
			gap: var(--spacing-4);
		}

		.feature-card-media {
			padding: var(--spacing-3);
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
		}

		.footer-gap {
			flex-basis: clamp(140px, 18vw, 240px);
		}

		.back-link {
			font-size: 20px;
			margin-top: var(--spacing-4);
		}
	}
</style>
