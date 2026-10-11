/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site 100% statique : `npm run build` génère le dossier /out (déployable sur Vercel, Netlify, GitHub Pages ou tout hébergement).
  output: "export",
  images: { unoptimized: true },
};

module.exports = nextConfig;
