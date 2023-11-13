/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CANONICAL_URL: process.env.CANONICAL_URL,
    API_URL: process.env.API_URL,
    DEV_MODE: process.env.DEV_MODE,
  },
};

module.exports = nextConfig;
