<script>
	import { onDestroy } from 'svelte';

	let { onBack = () => {} } = $props();

	let recipient = $state('');
	let message = $state('');
	let imageUrl = $state('');
	let imageFileName = $state('No image selected');
	let previewObjectUrl = '';

	/** @param {Event & { currentTarget: HTMLInputElement }} event */
	const updateImage = (event) => {
		const input = event.currentTarget;
		const file = input.files?.[0] ?? null;

		if (previewObjectUrl) {
			URL.revokeObjectURL(previewObjectUrl);
			previewObjectUrl = '';
		}

		if (!file) {
			imageUrl = '';
			imageFileName = 'No image selected';
			return;
		}

		previewObjectUrl = URL.createObjectURL(file);
		imageUrl = previewObjectUrl;
		imageFileName = file.name;
	};

	const sendPostcard = () => {
		const subject = encodeURIComponent('Postcard for you');
		const body = encodeURIComponent(
			`Hi,\n\n${message || 'I wanted to send you a postcard.'}\n\nSent from Letizia\'s Travel Journal.`
		);
		const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;

		window.location.href = mailto;
	};

	/** @param {SubmitEvent} event */
	const handleSubmit = (event) => {
		event.preventDefault();
		sendPostcard();
	};

	onDestroy(() => {
		if (previewObjectUrl) {
			URL.revokeObjectURL(previewObjectUrl);
		}
	});
</script>

<section class="creator" aria-label="Create a postcard">
	<div class="header-row">
		<div>
			<p class="eyebrow">Postcard</p>
			<h2>Create and send</h2>
		</div>
		<button class="back" type="button" onclick={() => onBack()}>Back</button>
	</div>

	<div class="layout">
		<form class="form" onsubmit={handleSubmit}>
			<label>
				<span>Upload image</span>
				<input type="file" accept="image/*" onchange={updateImage} />
				<small>{imageFileName}</small>
			</label>

			<label>
				<span>Recipient email</span>
				<input type="email" bind:value={recipient} required placeholder="name@example.com" />
			</label>

			<label>
				<span>Message</span>
				<textarea bind:value={message} rows="8" placeholder="Write your postcard message..."></textarea>
			</label>

			<button class="send" type="submit">Send postcard</button>
		</form>

		<aside class="preview" aria-label="Postcard preview">
			<div class="postcard">
				<div class="photo-shell">
					{#if imageUrl}
						<img src={imageUrl} alt={imageFileName} />
					{:else}
						<div class="placeholder">
							<span>Choose an image to preview it here</span>
						</div>
					{/if}
				</div>

				<div class="postcard-copy">
					<p class="preview-label">To {recipient || 'recipient@email.com'}</p>
					<p class="preview-message">{message || 'Your message will appear here in real time.'}</p>
				</div>
			</div>
		</aside>
	</div>
</section>

<style>
	.creator {
		padding: 0 var(--layout-gutter-inline);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-5);
	}

	.header-row {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: var(--spacing-4);
	}

	.eyebrow {
		margin: 0 0 6px;
		color: var(--text-secondary);
		font-family: var(--script-font-family);
		font-size: var(--unit-24);
		line-height: 1;
	}

	h2 {
		margin: 0;
		color: var(--text-primary);
		font-family: var(--h1-font-family);
		font-size: clamp(2rem, 3vw, var(--h1-font-size));
		font-weight: var(--h1-font-weight);
		line-height: 1;
	}

	.back,
	.send {
		appearance: none;
		-webkit-appearance: none;
		border: 0;
		border-radius: var(--radius-full);
		cursor: pointer;
		font-family: var(--script-font-family);
		font-size: var(--unit-24);
		line-height: 1;
		transition: transform 180ms ease, background-color 180ms ease, color 180ms ease;
	}

	.back {
		background: transparent;
		color: var(--color-link-default);
		padding: 0;
	}

	.back:hover,
	.back:focus-visible {
		color: var(--color-filter-background-selected);
	}

	.layout {
		display: grid;
		grid-template-columns: minmax(280px, 1fr) minmax(0, 1.1fr);
		gap: var(--spacing-5);
	}

	.form,
	.preview {
		background: color-mix(in oklab, var(--page-bg), var(--text-primary) 4%);
		border: 1px solid color-mix(in oklab, var(--text-primary), transparent 84%);
		border-radius: calc(var(--radius-3) * 1.25);
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
		padding: var(--spacing-5);
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 10px;
		color: var(--text-primary);
		font-family: var(--h2-font-family);
		font-size: 1rem;
		font-weight: var(--h2-font-weight);
	}

	input,
	textarea {
		width: 100%;
		border: 1px solid color-mix(in oklab, var(--text-primary), transparent 72%);
		border-radius: var(--radius-2);
		background: var(--page-bg);
		color: var(--text-primary);
		padding: 14px 16px;
		font: inherit;
		outline: none;
	}

	input::file-selector-button {
		margin-right: 12px;
		border: 0;
		border-radius: var(--radius-full);
		background: var(--tab-active-bg);
		color: var(--tab-active-text);
		padding: 10px 14px;
		font-family: var(--script-font-family);
		cursor: pointer;
	}

	input:focus-visible,
	textarea:focus-visible {
		border-color: var(--color-filter-background-selected);
		box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-filter-background-selected), transparent 78%);
	}

	small {
		color: var(--text-secondary);
		font-family: var(--script-font-family);
		font-size: 0.95rem;
	}

	.send {
		align-self: flex-start;
		background: var(--tab-active-bg);
		color: var(--tab-active-text);
		padding: 14px 20px;
	}

	.send:hover,
	.send:focus-visible {
		transform: translateY(-1px);
	}

	.preview {
		padding: var(--spacing-5);
		display: flex;
	}

	.postcard {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
	}

	.photo-shell {
		aspect-ratio: 665 / 400;
		border-radius: var(--radius-2);
		overflow: hidden;
		border: 1px solid var(--image-frame-border);
		background: var(--image-frame-surface);
	}

	.photo-shell img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.placeholder {
		display: grid;
		place-items: center;
		width: 100%;
		height: 100%;
		padding: var(--spacing-5);
		background:
			radial-gradient(circle at top left, color-mix(in oklab, var(--tab-active-bg), white 14%), transparent 50%),
			linear-gradient(135deg, color-mix(in oklab, var(--page-bg), white 3%), var(--page-bg));
	}

	.placeholder span {
		max-width: 16ch;
		text-align: center;
		color: var(--text-secondary);
		font-family: var(--script-font-family);
		font-size: 1.25rem;
	}

	.postcard-copy {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.preview-label {
		margin: 0;
		color: var(--text-secondary);
		font-family: var(--script-font-family);
		font-size: 1.25rem;
	}

	.preview-message {
		margin: 0;
		color: var(--text-primary);
		font-family: var(--h2-font-family);
		font-size: clamp(1.15rem, 1.8vw, 1.55rem);
		line-height: 1.15;
	}

	@media (max-width: 900px) {
		.creator {
			padding-inline: var(--spacing-4);
		}

		.layout {
			grid-template-columns: 1fr;
		}

		.form,
		.preview {
			padding: var(--spacing-4);
		}
	}
</style>