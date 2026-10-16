import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // Dev only: let a phone on the same Wi-Fi open the dev server by LAN IP (otherwise dev assets are
  // blocked, the page never hydrates and client-only parts like the hero video never mount).
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "*.local"],
  partialPrefetching: true,
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
