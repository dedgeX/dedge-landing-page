/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dedge-landing-page/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/dedge-landing-page' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;