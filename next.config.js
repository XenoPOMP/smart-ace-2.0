/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CANONICAL_URL: process.env.CANONICAL_URL,
  },
};

module.exports = nextConfig;
