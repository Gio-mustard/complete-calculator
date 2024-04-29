/*
! Por ahora no usare esto, hay que investigar mas sobre el funcionamiento de proxy's

import { createProxyMiddleware } from "http-proxy-middleware";
export default function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.milenio.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/temas/matematicas',
      },
    })
  );
}
*/