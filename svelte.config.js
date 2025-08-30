import ≈ from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter()
		// SPA configuration for Cloudflare Pages
		// adapter: adapter({
		// 	fallback: 'index.html',
		// 	strict: false
		// })
	}
};