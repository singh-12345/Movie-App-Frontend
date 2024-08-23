import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),vue()],

  server: {
    proxy: {
      "/api/": "http://localhost:3000",

      "/uploads/": "http://localhost:3000",
      
    },
    css: {
      postcss: './postcss.config.js',
    },

  },

});
