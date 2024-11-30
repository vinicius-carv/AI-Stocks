import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Expose to all network interfaces
    port: 5173,        // Ensure the port is 5173 as defined in Docker Compose
  },
})
