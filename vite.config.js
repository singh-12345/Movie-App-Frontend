import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api/": "https://movies-app-1-dv39.onrender.com",

      "/uploads/": "https://movies-app-1-dv39.onrender.com",
      
    },
  

  },

});
