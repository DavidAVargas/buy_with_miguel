import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photography until Miguel's own listing photos are added.
    remotePatterns: [new URL("https://images.unsplash.com/**")],
  },
};

export default nextConfig;
