// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// REEMPLAZAR: dominio definitivo del estudio.
	site: 'https://abogadospapus.com.ar',
	vite: {
		plugins: [tailwindcss()],
	},
});
