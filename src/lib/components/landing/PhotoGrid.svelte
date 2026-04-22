<script>
	import PhotoCard from './PhotoCard.svelte';

	let { cards = [] } = $props();
</script>

<section class="grid-wrap" aria-label="Travel photos">
	<div class="grid">
		{#each cards as card (card.title)}
			<PhotoCard {card} />
		{/each}
	</div>
</section>

<style>
	.grid-wrap {
		padding: 0 var(--layout-gutter-inline);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(var(--layout-card-columns), minmax(0, 1fr));
		gap: var(--layout-card-gap);
	}

	@media (max-width: 900px) {
		.grid-wrap {
			padding-inline: var(--spacing-4);
		}

		.grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-5);
		}
	}
</style>
