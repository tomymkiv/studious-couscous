// Rutas con el `base` configurado en astro.config.mjs.
// Permite desplegar el sitio en un subdirectorio (por ejemplo, GitHub Pages)
// sin romper los enlaces internos.

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
	if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
		return path;
	}

	if (path.startsWith('#')) return `${base}/${path}`;
	if (path.startsWith('/')) return `${base}${path}`;
	return `${base}/${path}`;
}

export const homeUrl = `${base}/`;
