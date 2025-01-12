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
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
        worker_threads: false,
        workers: false,
        child_process: false,
        net: false,
        dns: false,
        tls: false,
        webworker: false
      };
    }
    config.module = {
      ...config.module,
      exprContextCritical: false,
      unknownContextCritical: false,
    };
    config.resolve.alias = {
      ...config.resolve.alias,
      'web-worker': false,
      'worker_threads': false
    };
    return config;
  },
  output: 'standalone'
};

export default nextConfig;
