import path, { join } from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

import { fileURLToPath, URL } from 'node:url'




export default defineConfig(({ mode }) => {
  // const repoName = 'RuiYuFengXingYe';
  // const base = mode === 'production'? `/${repoName}/` : '/';

  
  return {

    plugins: [
      react(), 
      svgr()],

    server:{
      middlewareMode: true
    },
      
    base : "/RuiYuFengXingYe/",
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))

      },
      extensions:[
          '.js',
          '.json',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx',
          '.css'
      ]
    },
    build: {
      outDir: 'dist',
      rollupOptions:{
        input:"./index.html",
      }
      ,
    },
    define: { 'process.env': {} },
  };
});