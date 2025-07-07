/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.bodwell.org',
        port: '',
        pathname: '/kevin/**',
        search: '',
      }
    ]
  },
};

module.exports = nextConfig;
