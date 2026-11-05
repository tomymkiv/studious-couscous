// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Despliegue en GitHub Pages: https://tomymkiv.github.io/studious-couscous
	site: 'https://tomymkiv.github.io',
	base: '/studious-couscous',
	vite: {
		plugins: [tailwindcss()],
	},
});
