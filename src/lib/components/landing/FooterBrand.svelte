<footer class="footer" aria-label="Politecnico di Milano">
	<img src="/image/Logo_Politecnico_Bianco%201.svg" alt="Politecnico di Milano" />
</footer>

<style>
	.footer {
		display: flex;
		justify-content: center;
		padding: var(--spacing-6) var(--layout-gutter-inline) var(--spacing-8);
	}

	.footer img {
		display: block;
		width: min(201px, 100%);
		height: auto;
		object-fit: contain;
		filter: var(--footer-logo-filter);
	}

	@media (max-width: 900px) {
		.footer {
			padding-inline: var(--spacing-4);
			padding-bottom: var(--spacing-7);
		}
	}
</style>
