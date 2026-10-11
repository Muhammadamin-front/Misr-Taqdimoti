import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  // singlefile: JS va CSS index.html ichiga joylanadi — dist/index.html ni
  // internet va serversiz, ikki marta bosib ochish mumkin.
  plugins: [react(), viteSingleFile()],
  base: './',
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
