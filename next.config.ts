import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.insuveo.com' }],
        destination: 'https://insuveo.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
