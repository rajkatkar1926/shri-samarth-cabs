const staticAssetCache = [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  output: "standalone",
  // Images are pre-sized webp files; on-demand resizing was taking 10s+ on the small server.
  images: { unoptimized: true },
  async redirects() {
    return [{ source: "/:path*", has: [{ type: "host", value: "www.shrisamarthcabs.com" }], destination: "https://shrisamarthcabs.com/:path*", permanent: true }];
  },
  async headers() {
    return ["hero", "cards", "temples", "brand", "fleet"].map((dir) => ({ source: `/${dir}/:path*`, headers: staticAssetCache }));
  },
};

export default nextConfig;
