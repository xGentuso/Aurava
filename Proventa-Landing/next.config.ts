import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['proventa.health'], // Add your domain here
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  // Simplified asset handling
  assetPrefix: '/',
};

export default nextConfig;
