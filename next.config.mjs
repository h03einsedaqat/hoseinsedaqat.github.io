/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    '*.e2b.app',
    '*.arena.ai',
    'localhost',
    '127.0.0.1',
  ],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
