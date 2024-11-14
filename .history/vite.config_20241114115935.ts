import path, { join } from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react() , svgr()],
  base: process.env.NODE_ENV === 'production'? '/<REPO>/' : '/',

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
  }
})