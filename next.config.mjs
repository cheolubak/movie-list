/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'yts.mx',
        protocol: 'https',
      }
    ]
  }
};

export default nextConfig;
