// /opt/agent-ia-dev/frontend/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',  // Escuchar en todas las interfaces
    port: 5173,
    strictPort: true, // Falla si el puerto está ocupado en lugar de saltar a otro
  },
})
