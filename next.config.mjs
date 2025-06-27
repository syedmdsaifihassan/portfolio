/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(isProd && {
    output: "export",
    trailingSlash: true,
    distDir: "out",
    basePath: "/portfolio",
    assetPrefix: "/portfolio/",
  }),

  // inside next.config.mjs
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/portfolio" : "",
  },
};

export default nextConfig;
