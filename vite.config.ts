import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages deployment base path for repo 'teacher-gui'
  base: mode === 'production' ? '/teacher-gui/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
}));
