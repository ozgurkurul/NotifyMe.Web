import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // Bu, tüm yolların göreli olmasını sağlar.
  plugins: [react()],
  server: {
    host: true,
    port: 3000, // This is the port which we will use in docker
    origin: "http://localhost:3000",
    strictPort: true,
  },
  preview: {
   port: 3000,
   strictPort: true,
  },
  mode: 'development'
})
