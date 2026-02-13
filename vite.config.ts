import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],

	preview: {
		allowedHosts: ['*.ondigitalocean.app', '.ondigitalocean.app', '206.189.86.201'],
	},
	server: {
		allowedHosts: ['*.ondigitalocean.app', '.ondigitalocean.app', '206.189.86.201'],
	},
});
