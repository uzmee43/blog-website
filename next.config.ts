import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true,
    
  },
};

export default nextConfig;
module.exports = {
  reactStrictMode: true,
  images: {
      domains: ['cdn.sanity.io'], // Add other domains if needed
  },
};
