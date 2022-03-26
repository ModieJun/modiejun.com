/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true, //add docker support
  },
};

module.exports = nextConfig;
