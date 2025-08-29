import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = 3000;

// Proxy all requests to the Vite dev server
const proxy = createProxyMiddleware({
  target: 'http://localhost:5176',
  changeOrigin: true,
  ws: true, // Enable WebSocket proxying
  onProxyReq: (proxyReq, req, res) => {
    // Remove problematic headers
    delete proxyReq.headers['x-forwarded-host'];
    delete proxyReq.headers['x-forwarded-proto'];
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy Error');
  }
});

app.use('/', proxy);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
  console.log(`You can now use ngrok on port ${PORT} instead`);
});