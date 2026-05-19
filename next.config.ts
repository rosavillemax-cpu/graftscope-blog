import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/blog',
  assetPrefix: '/blog',
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.graftscope.com/blog/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Exclude sitemap from authentication
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
      },
    ];
  },
};

export default nextConfig;
