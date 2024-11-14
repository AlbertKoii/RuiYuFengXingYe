import path, { join } from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'


const repoName = 'RuiYuFengXingYe',
const base = process.env.NODE_ENV === 'production'? `/${repoName}/` : ;

export default defineConfig({
  plugins: [react() , svgr()],
  base,
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
  },

  define: {
    __BASE_URL__: JSON.stringify(base),
  },
})