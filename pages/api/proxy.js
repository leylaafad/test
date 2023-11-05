import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'http://4.231.238.54:81',
  changeOrigin: true,
  secure: true,
});

// This file will act as the proxy middleware for all API routes
