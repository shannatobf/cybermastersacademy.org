import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cybermastersacademy.org/', // <-- move base here
  server: {
    port: 5173
  }
})