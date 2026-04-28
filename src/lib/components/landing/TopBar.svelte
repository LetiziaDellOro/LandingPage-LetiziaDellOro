<script>
	import { onMount } from 'svelte';

	let { aboutHref = '/about', aboutLabel = 'About', handle = '@letydelloro' } = $props();
	let theme = $state('dark');

	const storageKey = 'landing-theme';

	const readSavedTheme = () => {
		try {
			return localStorage.getItem(storageKey);
		} catch {
			return null;
		}
	};

	/** @param {'dark' | 'light'} nextTheme */
	const applyTheme = (nextTheme) => {
		theme = nextTheme;
		document.documentElement.dataset.theme = nextTheme;

		try {
			localStorage.setItem(storageKey, nextTheme);
		} catch {
			// Ignore storage failures and keep the visual theme in sync.
		}
	};

	const toggleTheme = () => {
		applyTheme(theme === 'dark' ? 'light' : 'dark');
	};

	onMount(() => {
		const savedTheme = readSavedTheme();
		applyTheme(savedTheme === 'light' ? 'light' : 'dark');
	});
</script>

<header class="topbar">
	<img class="mark" src="/image/logo%20personale.svg" alt="Logo personale" />

	<nav class="links" aria-label="Primary">
		<button
			type="button"
			class="link script theme-toggle"
			onclick={toggleTheme}
			aria-pressed={theme === 'light'}
			aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
		>
			Theme
		</button>
		<a class="link script" href={aboutHref}>{aboutLabel}</a>
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
		filter: var(--brand-logo-filter);
	}

	.links {
		display: flex;
		gap: var(--spacing-6);
		align-items: center;
	}

	.link {
		appearance: none;
		-webkit-appearance: none;
		border: 0;
		background: transparent;
		padding: 0;
		color: var(--color-link-default);
		text-decoration: none;
		transition: color 180ms ease;
		cursor: pointer;
	}

	.link:hover,
	.link:focus-visible {
		color: var(--color-filter-background-selected);
	}

	.script {
		font-family: var(--script-font-family);
		font-size: var(--unit-24);
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

		.script {
			font-size: 20px;
		}
	}
</style>
