import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'  // Optional: default is 'dist', but Vercel works with either
  }
});
