import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mybarberblob.blob.core.windows.net",
        pathname: "/barberspics/**",
      },
    ],
  },
};

export default nextConfig;
