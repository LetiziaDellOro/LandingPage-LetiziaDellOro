<script>
	let { card } = $props();
</script>

<article class="card">
	<div class="media-wrap">
		<img src={card.image} alt={card.alt} loading="lazy" />
	</div>

	<div class="meta">
		<p class="title">{card.title}</p>
		<p class="slash">/</p>
		<p class="place">{card.place}</p>
		<span class="arrow" aria-hidden="true">↗</span>
	</div>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-2);
	}
	.media-wrap {
		aspect-ratio: var(--layout-card-media-aspect-ratio);
		overflow: hidden;
		padding: 16px;
		background: var(--color-filter-content-selected);
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform-origin: center;
		transition: transform 280ms ease, filter 280ms ease;
	}

	.card:hover img {
		transform: scale(0.60);
		filter: grayscale(100%);
	}

	.meta {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		position: relative;
	}

	p {
		margin: 0;
		font-size: clamp(1.1rem, 1.5vw, var(--h2-font-size));
		line-height: 1;
	}

	.title,
	.slash {
		font-family: var(--h2-font-family);
		font-weight: var(--h2-font-weight);
	}

	.title {
		color: var(--text-primary);
	}

	.slash,
	.place {
		color: var(--text-secondary);
	}

	.place {
		font-family: var(--script-font-family);
		font-weight: var(--script-font-weight);
	}

	.arrow {
		margin-left: auto;
		color: var(--text-secondary);
		font-size: 1.2rem;
		display: inline-block;
		opacity: 0;
		transform: translateY(4px);
		transition: transform 180ms ease, opacity 180ms ease;
	}

	.card:hover .arrow {
		opacity: 1;
		transform: translateY(-2px);
	}
</style>
