/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: ["moviesapi.ir"],
  },
};

module.exports = nextConfig;
