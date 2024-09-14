/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/dedge-landing-page/',
  basePath: '/dedge-landing-page',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
