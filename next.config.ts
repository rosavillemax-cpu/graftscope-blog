import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/blog',
  assetPrefix: '/blog',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.clinixglow.com/blog/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
