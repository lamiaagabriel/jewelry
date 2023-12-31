/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "toktamjewelry.com",
      "image.unsplash.com",
      "source.unsplash.com",
      "lh3.googleusercontent.com",
    ],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverComponentsExternalPackages: ["@prisma/client", "bcrypt"],
    serverActions: true,
    // runtime: "edge",
  },
}

module.exports = nextConfig
