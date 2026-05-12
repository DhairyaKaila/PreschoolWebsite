import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow network access for development HMR
  allowedDevOrigins: [
    '10.226.130.3',
    'localhost',
    '127.0.0.1',
  ],
};

export default nextConfig;
