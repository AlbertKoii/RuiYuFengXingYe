import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  root: join(__dirname, 'src'),
  plugins: [react() , svgr()],
  server: {
    host: '0.0.0.0', // 允许局域网访问
    port: 5000
},
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
