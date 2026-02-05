import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: '/vireact',
	preview: {
		allowedHosts: ['vireact-app-stvxh.ondigitalocean.app', '*.ondigitalocean.app', 'www.cargorental.me', 'cargorental.me', 'localhost', '.ondigitalocean.app'],
	},
	server: {
		allowedHosts: ['vireact-app-stvxh.ondigitalocean.app', '*.ondigitalocean.app', 'www.cargorental.me', 'cargorental.me', 'localhost', '.ondigitalocean.app'],
	},
});
