import path, { join } from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => {
  const repoName = 'RuiYuFengXingYe';
  const base = mode === 'production'? `/${repoName}/` : '/';

  return {
    plugins: [react(), svgr()],
    // base,
    server: {
      host: '0.0.0.0', // 允许局域网访问
      port: 3001,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src" , "import.meta.url"),
      },
      extensions:[
        extensions: [
          '.js',
          '.json',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx',
          '.vue',
      ]
    },
    build: {
      outDir: 'dist',
    },
    define: {
      __BASE_URL__: JSON.stringify(base),
    },
  };
});