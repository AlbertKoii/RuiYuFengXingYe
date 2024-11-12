import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0', // 允许局域网访问
    port: 5000,
    // 使用 configureServer 选项添加 middleware
    configureServer: (server) => {
      server.middlewares.use((req, res, next) => {
        if (req.url.endsWith('.js')) {
          res.setHeader('Content-Type', 'application/javascript');
        } else if (req.url.endsWith('.css')) {
          res.setHeader('Content-Type', 'text/css');
        }
        next();
      });
    },
  },
  resolve: {
    alias: {
      "@": require('path').resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
  }
});