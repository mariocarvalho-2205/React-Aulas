import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // URL do backend
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // Isso remove o /api do início do caminho antes de encaminhar a solicitação
      },
      '/uploads': {
        target: 'http://localhost:5000', // URL do backend para uploads
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
