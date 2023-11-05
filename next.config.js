const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: "http://185.38.142.8:81/:path*"
      },
      { 
        source: "/(.*)", 
        destination: "/api/404" 
      }
    ];
  },
}; 

