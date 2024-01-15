const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: "http://91.92.240.191:1502/:path*"
      },
      { 
        source: "/(.*)", 
        destination: "/api/404" 
      }
    ];
  },
}; 

