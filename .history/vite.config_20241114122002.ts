import path, { join } from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'


const Reponame = 'RuiYuFengXingYe'

export default defineConfig({
  plugins: [react() , svgr()],
  base: process.env.NODE_ENV === 'production'? '/<REPO>/' : '/',
  server: {
    host: '0.0.0.0', // 允许局域网访问
    port: 3001 ,
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