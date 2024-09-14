/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/dedge-landing-page/',
  basePath: '/dedge-landing-page',
//   assetPrefix: process.env.NODE_ENV === 'production' ? '/dedge-landing-page/' : '',
//   basePath: process.env.NODE_ENV === 'production' ? '/dedge-landing-page' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;