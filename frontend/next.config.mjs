/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3333',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  // Configuração do webpack como função assíncrona
  webpack: async (config, { isServer }) => {
    config.resolve = {
      ...config.resolve,
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
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Desabilitar checagem de tipos durante o build
  experimental: {
    typedRoutes: false,
  }
};

export default nextConfig;
