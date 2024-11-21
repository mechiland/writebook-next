/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/cable',
        destination: `http://localhost:3000/cable`,
      },
      {
        source: '/api/:path*',
        destination: `http://localhost:3000/:path*`,
      },
      {
        source: '/rails/active_storage/:path*',
        destination: `http://localhost:3000/rails/active_storage/:path*`,
      },
    ];
  },
};

export default nextConfig;
