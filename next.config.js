/** @type {import('next').NextConfig} */
const nextConfig = {
  favicon: {
    src: "/icon.jpeg"
  }
  ,
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
