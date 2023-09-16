import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 2200,
    host: 'localhost'
  },
  define: {
    'process.env': { ...process.env }
  }
})
