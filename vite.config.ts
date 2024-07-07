import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: path.resolve(__dirname, 'assets'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './src/shared/components/ui'),
      '@components': path.resolve(__dirname, './src/shared/components'),
      '@consts': path.resolve(__dirname, './src/shared/consts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
    },
  },
});
