// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000',  // Redirige las solicitudes a tu servidor Express en el puerto 3000
    },
  },
});
