/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
      },
      fallback: {
        ...config.resolve.fallback,
        fs: false,
        module: false,
      }
    };
    config.module = {
      ...config.module,
      unknownContextCritical: false,
      exprContextCritical: false,
      unknownContextRegExp: /$^/,
      exprContextRegExp: /$^/,
    };
    return config;
  },
  experimental: {
    // Removed deprecated options
  }
};

export default nextConfig;
