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
    ];
  },
};

export default nextConfig;
