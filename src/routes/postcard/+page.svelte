<script>
	import { goto } from '$app/navigation';

	import TopBar from '$lib/components/landing/TopBar.svelte';
	import PostcardCreator from '$lib/components/postcard/PostcardCreator.svelte';
	import FooterBrand from '$lib/components/landing/FooterBrand.svelte';

	const backHome = () => {
		goto('/');
	};
</script>

<svelte:head>
	<title>Send a postcard</title>
</svelte:head>

<main class="postcard-page">
	<TopBar aboutHref="/about" aboutLabel="About" handle="@letydelloro" />

	<section class="postcard-wrap">
		<PostcardCreator onBack={backHome} />
	</section>

	<FooterBrand />
</main>

<style>
	.postcard-page {
		min-height: 100svh;
		background: var(--page-bg);
		color: var(--text-primary);
		display: flex;
		flex-direction: column;
		gap: var(--layout-section-gap);
		padding-bottom: var(--spacing-7);
	}

	.postcard-wrap {
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 900px) {
		.postcard-page {
			gap: var(--spacing-4);
		}
	}
</style>
