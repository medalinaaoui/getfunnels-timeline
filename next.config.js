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
      {
        protocol: "https",
        hostname: "getfunnels.agency",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "d1yei2z3i6k35z.cloudfront.net",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
