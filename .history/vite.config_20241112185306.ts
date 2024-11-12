import path, { join } from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react() , svgr()],
  server: {
    host: '0.0.0.0', // 允许局域网访问
    port: 5000
    middleware: [
      {
        handle: (req, res, next) => {
          if (req.url.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
          }
          next();
        },
      },
    ],
},

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
  }
})