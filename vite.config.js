import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/' // Base padrão para sites hospedados na raiz do domínio
});
