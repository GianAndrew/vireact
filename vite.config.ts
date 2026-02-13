import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],

	preview: {
		allowedHosts: ['*.ondigitalocean.app', '.ondigitalocean.app', '64.225.44.255'],
	},
	server: {
		allowedHosts: ['*.ondigitalocean.app', '.ondigitalocean.app', '64.225.44.255'],
	},
});
