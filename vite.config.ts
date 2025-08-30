import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		// host: true, // Listen on all addresses including IPv4 and IPv6
		// port: 5176,
		// strictPort: true,
		// allowedHosts: [
		// 	'localhost',
		// 	'127.0.0.1',
		// 	'::1',
		// 	'*.ngrok-free.app',
		// 	'*.ngrok.io',
		// 	'*.ngrok.app',
		// 	'bddbfe629173.ngrok-free.app',
		// 	'ec01d13f90df.ngrok-free.app'
		// ],
		// headers: {
		// 	'Access-Control-Allow-Origin': '*',
		// 	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
		// 	'Access-Control-Allow-Headers': 'Content-Type, Authorization'
		// }
	}
});
