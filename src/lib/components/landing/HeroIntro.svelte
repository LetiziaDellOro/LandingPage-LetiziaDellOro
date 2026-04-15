<script>
	let { text = '' } = $props();
</script>

<section id="about" class="hero">
	<p>{text}</p>
</section>

<style>
	.hero {
		padding: var(--spacing-11) var(--layout-gutter-inline) var(--spacing-10);
		max-width: calc(var(--layout-card-width) * 1.35 + var(--layout-card-gap) + var(--layout-gutter-inline));
	}

	.hero p {
		margin: 0;
		color: var(--text-primary);
		font-family: var(--h1-font-family);
		font-size: clamp(1.95rem, 4.2vw, var(--h1-font-size));
		font-weight: var(--h1-font-weight);
		line-height: 1.08;
		letter-spacing: var(--h1-letter-spacing);
	}

	@media (max-width: 900px) {
		.hero {
			padding: var(--spacing-7) var(--spacing-4) var(--spacing-6);
		}
	}
</style>
