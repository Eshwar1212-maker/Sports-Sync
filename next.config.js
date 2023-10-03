/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "psmag.com",
      "cdn.pixabay.com"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",

      },
    ],
  },
};

module.exports = nextConfig;
