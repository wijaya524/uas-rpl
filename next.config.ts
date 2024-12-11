import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/custom-route",
        destination: "/feature/user",
      },
    ];
  },
};

export default nextConfig;
