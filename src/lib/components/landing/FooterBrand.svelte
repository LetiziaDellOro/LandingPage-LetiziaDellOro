<footer class="footer">
	<p>Politecnico di Milano</p>
</footer>

<style>
	.footer {
		display: flex;
		justify-content: flex-start;
		padding: var(--spacing-6) var(--layout-gutter-inline);
	}

	.footer p {
		margin: 0;
		color: var(--text-secondary);
		font-family: var(--h2-font-family);
		font-size: clamp(0.95rem, 1.2vw, 1.05rem);
	}

	@media (max-width: 900px) {
		.footer {
			padding-inline: var(--spacing-4);
		}
	}
</style>
