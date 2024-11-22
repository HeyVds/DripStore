import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: parseInt(import.meta.env.VITE_PORT) || 3000, // Use a porta da variável de ambiente ou a porta 3000 como fallback
  },
});
