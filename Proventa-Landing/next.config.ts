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
  // Ensure favicon is properly served
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ico|png|svg)$/,
      type: 'asset/resource'
    });
    return config;
  },
  // Force favicon to be static
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
