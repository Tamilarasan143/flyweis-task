import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://mamun-reza-freeshops-backend.vercel.app/api/v1/:path*',
      },
    ]
  },
};

export default nextConfig;
