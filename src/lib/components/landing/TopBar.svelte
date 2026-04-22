<script>
	let { aboutLabel = 'About', handle = '@letydelloro' } = $props();
</script>

<header class="topbar">
	<img class="mark" src="/image/logo%20personale.svg" alt="Logo personale" />

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
		display: block;
		height: 44px;
		width: auto;
		object-fit: contain;
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

		.mark {
			height: 38px;
		}

		.links {
			gap: var(--spacing-4);
		}
	}
</style>
