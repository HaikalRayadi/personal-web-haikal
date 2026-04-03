import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from "url" // Wajib ditambahkan untuk alias shadcn

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind v4
  ],
  assetsInclude: ['**/*.glb'], // Biar Lanyard 3D tetap jalan
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // Wajib agar CLI shadcn tidak error
    },
  },
})