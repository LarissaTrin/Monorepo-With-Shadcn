/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/docs/:path*',
          destination: `http://localhost:3002/docs/:path*`,
        },
        {
          source: '/web/:path*',
          destination: `http://localhost:3001/web/:path*`,
        },
      ],
    }
  },
};