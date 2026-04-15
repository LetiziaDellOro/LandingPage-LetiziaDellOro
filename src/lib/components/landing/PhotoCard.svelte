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
		background: color-mix(in oklab, var(--page-bg), white 8%);
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 280ms ease;
	}

	.card:hover img {
		transform: scale(1.03);
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
	}
</style>
