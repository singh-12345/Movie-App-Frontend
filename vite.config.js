import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api/": "https://movies-app-dkd2.onrender.com",

      "/uploads/": "https://movies-app-dkd2.onrender.com",
      
    },
  

  },

});
