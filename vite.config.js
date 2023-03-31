import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        google: './gle077a68ad4512ff47.html' // Nama file HTML dari Google
      }
    }
  },
  base: '/',
  plugins: [react()]
})