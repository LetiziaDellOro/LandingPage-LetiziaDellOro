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
		appearance: none;
		-webkit-appearance: none;
		border: 0;
		background: transparent;
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: var(--text-primary);
		padding: var(--spacing-2) var(--spacing-4);
		border-radius: var(--radius-full);
		font-family: var(--font-primary);
		font-size: var(--unit-24);
		font-weight: 500;
		line-height: 1;
		letter-spacing: 0;
		white-space: nowrap;
		cursor: pointer;
		transition: background-color 180ms ease, color 180ms ease;
	}

	button.active {
		background: var(--tab-active-bg);
		color: var(--tab-active-text);
	}

	button:not(.active):hover {
		background: var(--color-filter-background-hover);
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
