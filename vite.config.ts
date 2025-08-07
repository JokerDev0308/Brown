import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";


export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  server: {
    port: 3000,      // ポートを3000に設定
    host: '0.0.0.0', // 外部アクセスを許可
    https: false,     // HTTPS対応
    proxy: {
      '/api': {
        // target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  worker: {
    format: 'es',
    plugins: () => []
  },
  
});

