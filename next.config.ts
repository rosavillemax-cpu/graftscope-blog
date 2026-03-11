import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/blog',
  assetPrefix: '/blog',
  async redirects() {
    return [
      {
        source: '/articles/yapay-zeka-sac-analizi-2026',
        destination: '/articles/yapay-zeka-sac-analizi',
        permanent: true,
      },
      {
        source: '/',
        destination: 'https://graftscope.com/blog',
        permanent: true,
        has: [{ type: 'host', value: 'www.graftscope.org' }]
      },
      {
        source: '/en',
        destination: 'https://graftscope.com/blog/en',
        permanent: true,
        has: [{ type: 'host', value: 'www.graftscope.org' }]
      },
      {
        source: '/de',
        destination: 'https://graftscope.com/blog/de',
        permanent: true,
        has: [{ type: 'host', value: 'www.graftscope.org' }]
      },
      {
        source: '/:path*',
        destination: 'https://graftscope.com/blog/:path*',
        permanent: true,
        has: [{ type: 'host', value: 'www.graftscope.org' }]
      },
    ];
  },
};

export default nextConfig;
