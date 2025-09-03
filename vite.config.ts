import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		host: true,
		allowedHosts: [
			'localhost',
			'127.0.0.1',
			'::1',
			'*.ngrok-free.app',
			'*.ngrok.io',
			'*.ngrok.app',
			'ed2a5e18ec98.ngrok-free.app'
		]
	}
});
