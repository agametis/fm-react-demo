import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  root: 'src',
  plugins: [
    react(),
    viteSingleFile(),
    ViteMinifyPlugin(),
  ],
  build: {
    outDir: '../dist',
    sourcemap: false,
    minify: true,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      'fmFetch': '@proofgeist/fm-webviewer-fetch/dist/',
    },
  },
});
