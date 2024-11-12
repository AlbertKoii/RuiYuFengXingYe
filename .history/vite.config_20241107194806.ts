import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react() , svgr()],
  base: '',
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
