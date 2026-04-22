<script>
	let { tabs = [], activeSlug = '', onSelect = () => {} } = $props();
</script>

<nav class="tabs" aria-label="Travel filters">
	{#each tabs as tab}
		<button
			type="button"
			class:active={tab.slug === activeSlug}
			onclick={() => onSelect(tab.slug)}
		>
			{tab.label}
		</button>
	{/each}
</nav>

<style>
	.tabs {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-5);
		padding: 0 var(--layout-gutter-inline);
	}

	button {
		border: 0;
		background: transparent;
		color: var(--text-primary);
		padding: var(--spacing-2) var(--spacing-4);
		border-radius: var(--radius-full);
		font-family: var(--script-font-family);
		font-size: clamp(1.05rem, 1.9vw, var(--script-font-size));
		font-weight: var(--script-font-weight);
		line-height: var(--script-line-height);
		cursor: pointer;
		transition: background-color 180ms ease, color 180ms ease;
	}

	button.active {
		background: var(--tab-active-bg);
		color: var(--tab-active-text);
	}

	button:focus-visible {
		outline: 2px solid var(--tab-active-bg);
		outline-offset: 2px;
	}

	@media (max-width: 900px) {
		.tabs {
			padding-inline: var(--spacing-4);
			gap: var(--spacing-2);
		}
	}
</style>
