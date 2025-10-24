import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
      ignoreDuringBuilds: true,
    },
   images: {
      remotePatterns: [
          { hostname: 'img.clerk.com'}
      ]
  }
};

export default nextConfig;
