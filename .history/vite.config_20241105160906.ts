import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react() , s],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
