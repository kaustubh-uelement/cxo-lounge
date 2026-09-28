/** @type {import('next').NextConfig} */
const isPreview = process.env.STATIC_PREVIEW === "1";

const nextConfig = {
  reactStrictMode: true,
  // `npm run build:preview` produces a static export (no API routes) for sharing a clickable preview.
  // Normal `npm run build` keeps the full server (API routes, form handling).
  ...(isPreview ? { output: "export", trailingSlash: true, images: { unoptimized: true } } : {}),
};

export default nextConfig;
