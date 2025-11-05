/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/docs/:path*',
          destination: `${process.env.DOCS_ZONE_URL}/docs/:path*`,
        },
        {
          source: '/web/:path*',
          destination: `${process.env.WEB_ZONE_URL}/web/:path*`,
        },
      ],
    }
  },
};