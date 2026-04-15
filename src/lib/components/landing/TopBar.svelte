<script>
	let { aboutLabel = 'About', handle = '@letydelloro' } = $props();
</script>

<header class="topbar">
	<div class="mark" aria-label="Site logo">
		<span class="ring"></span>
		<span class="tail"></span>
	</div>

	<nav class="links" aria-label="Primary">
		<a class="link script" href="#about">{aboutLabel}</a>
		<a class="link script" href="https://instagram.com/letydelloro" target="_blank" rel="noreferrer">{handle}</a>
	</nav>
</header>

<style>
	.topbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-6) var(--layout-gutter-inline);
	}

	.mark {
		position: relative;
		width: 40px;
		height: 40px;
	}

	.ring {
		position: absolute;
		inset: 6px;
		border: 2px solid var(--text-primary);
		border-radius: 999px;
		opacity: 0.95;
	}

	.tail {
		position: absolute;
		width: 18px;
		height: 2px;
		background: var(--text-primary);
		top: 24px;
		left: 2px;
		transform: rotate(-26deg);
		transform-origin: left center;
		border-radius: 2px;
	}

	.links {
		display: flex;
		gap: var(--spacing-6);
		align-items: center;
	}

	.link {
		color: var(--color-link-default);
		text-decoration: none;
	}

	.script {
		font-family: var(--script-font-family);
		font-size: clamp(1.1rem, 1.5vw, var(--script-font-size));
		font-weight: var(--script-font-weight);
		line-height: var(--script-line-height);
	}

	@media (max-width: 900px) {
		.topbar {
			padding-inline: var(--spacing-4);
			padding-block: var(--spacing-5);
		}

		.links {
			gap: var(--spacing-4);
		}
	}
</style>
