/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.senge.com',
      },
    ]
  }
};

export default nextConfig;
