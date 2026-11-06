/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF first (best compression), WebP fallback.
    // Note: the first request for a new image runs AVIF encoding (can be slow);
    // subsequent requests are cached. If first-load latency matters more than
    // bytes, drop 'image/avif' and keep only 'image/webp'.
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;