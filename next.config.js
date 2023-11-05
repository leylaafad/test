const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: "http://45.138.16.69:1502/:path*"
      },
      { 
        source: "/(.*)", 
        destination: "/api/404" 
      }
    ];
  },
}; 

