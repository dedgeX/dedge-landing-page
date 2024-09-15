/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
//   assetPrefix: process.env.NODE_ENV === 'production' ? '/dedge-landing-page/' : '',
//   basePath: process.env.NODE_ENV === 'production' ? '/dedge-landing-page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',

  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;