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
      '@icons/*': path.resolve(__dirname, './src/shared/assets/icons/*'),
      '@images/*': path.resolve(__dirname, './src/shared/assets/images/*'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/shared/constants'),
      '@api': path.resolve(__dirname, './src/shared/api'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
      '@store': path.resolve(__dirname, './src/shared/store'),
    },
  },
});
