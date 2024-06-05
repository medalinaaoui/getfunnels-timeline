/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "digitalspeak.group",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "getfunnels.space",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
