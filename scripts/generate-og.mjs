import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
	<rect width="1200" height="630" fill="#16324F" />
	<g stroke="#F5F4F1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
		<path d="M96 86v96" />
		<path d="M52 106h88" />
		<path d="M52 106 30 150h44l-22-44Z" />
		<path d="M140 106 118 150h44l-22-44Z" />
		<path d="M74 186h44" />
	</g>
	<text x="96" y="330" font-family="Segoe UI, Geist, Arial, sans-serif" font-size="72" font-weight="600" fill="#FFFFFF">Abogados Papus</text>
	<text x="96" y="400" font-family="Segoe UI, Geist, Arial, sans-serif" font-size="34" fill="#C9D3DD">Accidentes de tránsito y derecho de familia</text>
	<line x1="96" y1="470" x2="1104" y2="470" stroke="#FFFFFF" stroke-opacity="0.18" stroke-width="2" />
	<text x="96" y="530" font-family="Segoe UI, Geist, Arial, sans-serif" font-size="26" fill="#C9D3DD">Estudio jurídico en Buenos Aires</text>
	<text x="1104" y="530" text-anchor="end" font-family="Segoe UI, Geist, Arial, sans-serif" font-size="26" fill="#C9D3DD">abogadospapus.com.ar</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('og.png generado');
