// vite.config.js

import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Path to your entry file (src/index.js)
      entry: resolve(__dirname, 'src/index.js'),
      // The name for your UMD build (browser-friendly)
      name: 'ReactTeeRenderer',
      // The output file name (e.g., react-tee-renderer.js)
      fileName: (format) => `react-tee-renderer.${format}.js`
    },
    rollupOptions: {
      // Make sure to externalize dependencies we don't want
      // bundled into our library (React, Styled-components)
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled'
        }
      }
    }
  }
});