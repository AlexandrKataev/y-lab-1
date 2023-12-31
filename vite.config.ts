import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [
          path.join(__dirname, './src/shared/styles/_vars.scss'),
          path.join(__dirname, './src/shared/styles/_normalize.scss'),
        ],
      },
    },
  },
});
