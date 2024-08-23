import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy for API requests
      '/api': {
        target: 'https://movies-app-zu13.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // Proxy for file uploads
      '/uploads': {
        target: 'https://movies-app-zu13.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/uploads/, ''),
      },
    },
  },
});
