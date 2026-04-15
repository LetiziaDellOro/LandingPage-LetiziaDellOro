declare module '*.md' {
	import type { Component } from 'svelte';

	export const metadata: Record<string, any>;
	const MDComponent: Component;
	export default MDComponent;
}
