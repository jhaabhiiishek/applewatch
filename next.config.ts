import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'store.storeimages.cdn-apple.com',
        port: '', // Optional, can be omitted if there's no specific port
        pathname: '/**', // Matches all paths under the hostname
      },
    ],
  },
};

export default nextConfig;
