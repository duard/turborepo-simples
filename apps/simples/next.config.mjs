// FIX: I changed .mjs to .js
// More info: https://github.com/shadcn-ui/taxonomy/issues/100#issuecomment-1605867844


import("./env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
    ],
  },
};

