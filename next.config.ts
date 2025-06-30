/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/cv',
  assetPrefix: '/cv/',  
};

module.exports = nextConfig;
