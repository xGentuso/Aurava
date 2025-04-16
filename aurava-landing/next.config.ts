import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['aurava.health'], // Add your domain here
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
