<script>
	let {
		onclick = () => {},
		label = 'Click and send a postcard to whoever you want!'
	} = $props();

	const logoSrc = '/image/logo%20personale.svg';
</script>

<button class="postcard-preview" type="button" onclick={() => onclick()} aria-label={label}>
	<div class="postcard">
		<img class="logo" src={logoSrc} alt="Logo personale" />

		<div class="left-copy" aria-hidden="true">
			<span>Made using Letizia's Travel Journal</span>
		</div>

		<div class="divider" aria-hidden="true"></div>

		<div class="right-panel" aria-hidden="true">
			<div class="lines">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<p class="signature">xoxo</p>
		</div>

		<span class="overlay" aria-hidden="true">
			<span>{label}</span>
		</span>
	</div>

	<span class="trigger-label" aria-hidden="true">{label}</span>
</button>

<style>
	.postcard-preview {
		position: relative;
		display: block;
		width: 100%;
		padding: 0;
		border: 0;
		border-radius: 0;
		background: transparent;
		cursor: pointer;
		text-align: left;
	}

	.postcard {
		position: relative;
		width: 100%;
		aspect-ratio: 665 / 400;
		overflow: hidden;
		background: var(--postcard-bg);
		box-shadow: none;
		border: 0;
	}

	:global(:root[data-theme='dark']) {
		--postcard-bg: #fafafa;
		--postcard-line: #bdbdbd;
		--postcard-text: #c4aef4;
		--postcard-signature: #bdbdbd;
	}

	:global(:root[data-theme='light']) {
		--postcard-bg: #131313;
		--postcard-line: #fafafa;
		--postcard-text: #c4aef4;
		--postcard-signature: #fafafa;
	}

	.logo {
		position: absolute;
		right: 36px;
		top: 34px;
		width: 62px;
		height: auto;
		filter: brightness(0) saturate(100%) invert(76%) sepia(28%) saturate(684%) hue-rotate(208deg) brightness(97%) contrast(93%);
		pointer-events: none;
	}

	.left-copy {
		position: absolute;
		left: 28px;
		top: 26px;
		bottom: 26px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 28px;
	}

	.left-copy span {
		transform: rotate(-90deg);
		transform-origin: center;
		white-space: nowrap;
		color: var(--postcard-text);
		font-family: var(--script-font-family);
		font-size: 14px;
		line-height: 1;
	}

	.divider {
		position: absolute;
		left: 49.8%;
		top: 15.5%;
		bottom: 12.5%;
		width: 1.5px;
		background: var(--postcard-line);
	}

	.right-panel {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		left: 50.8%;
	}

	.lines {
		position: absolute;
		left: 52px;
		top: 33%;
		width: calc(100% - 108px);
		display: flex;
		flex-direction: column;
		gap: 17px;
	}

	.lines span {
		display: block;
		height: 1.5px;
		background: var(--postcard-line);
	}

	.signature {
		position: absolute;
		left: 50%;
		bottom: 8.5%;
		transform: translateX(-50%);
		margin: 0;
		color: var(--postcard-signature);
		font-family: var(--script-font-family);
		font-size: 18px;
		line-height: 1;
	}

	.overlay {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.58);
		opacity: 0;
		transition: opacity 220ms ease;
		padding: var(--spacing-5);
	}

	.trigger-label {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.overlay span {
		max-width: 22rem;
		text-align: center;
		color: #fafafa;
		font-family: var(--h1-font-family);
		font-size: clamp(1.15rem, 1.6vw, 1.75rem);
		font-weight: var(--h1-font-weight);
		line-height: 1.1;
	}

	.postcard-preview:hover .overlay,
	.postcard-preview:focus-visible .overlay {
		opacity: 1;
	}

	.postcard-preview:focus-visible {
		outline: 2px solid var(--color-filter-background-selected);
		outline-offset: 4px;
	}

	@media (max-width: 900px) {
		.logo {
			right: 22px;
			top: 20px;
			width: 34px;
		}

		.left-copy {
			left: 24px;
			width: 22px;
		}

		.left-copy span {
			font-size: 11px;
			line-height: 0.95;
		}

		.lines {
			left: 44px;
			top: 34%;
			gap: 15px;
		}

		.signature {
			font-size: 17px;
		}
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		.logo {
			right: 24px;
			top: 22px;
			width: 38px;
		}

		.left-copy {
			left: 22px;
			width: 20px;
		}

		.left-copy span {
			font-size: 11px;
		}

		.lines {
			left: 42px;
			top: 34%;
			gap: 14px;
		}

		.signature {
			font-size: 16px;
		}
	}

	@media (max-width: 600px) {
		.logo {
			right: 18px;
			top: 18px;
			width: 28px;
		}

		.left-copy {
			left: 20px;
			width: 18px;
		}

		.left-copy span {
			font-size: 10px;
		}

		.lines {
			left: 38px;
			top: 35%;
			gap: 13px;
		}

		.signature {
			font-size: 15px;
		}
	}
</style>
