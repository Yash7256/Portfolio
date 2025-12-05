import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ],
  base: './',
  define: {
    'process.env': {}
  },
  server: {
    fs: {
      strict: false
    },
    hmr: {
      host: 'localhost',
      protocol: 'ws'
    },
    cors: true,
    headers: {
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://unpkg.com https://prod.spline.design https://cdn.jsdelivr.net https://fonts.gstatic.com https://app.spline.design",
        "connect-src 'self' data: blob: https://unpkg.com https://prod.spline.design https://cdn.jsdelivr.net https://fonts.gstatic.com https://app.spline.design",
        "style-src 'self' 'unsafe-inline' 'unsafe-hashes' https://unpkg.com https://prod.spline.design https://fonts.googleapis.com",
        "img-src 'self' data: blob: https://prod.spline.design https://unpkg.com https://app.spline.design",
        "font-src 'self' data: https://unpkg.com https://prod.spline.design https://fonts.gstatic.com",
        "media-src 'self' blob: https://prod.spline.design https://unpkg.com https://app.spline.design",
        "worker-src 'self' blob: https://unpkg.com 'unsafe-eval'",
        "frame-src 'self' blob: https://prod.spline.design https://unpkg.com https://app.spline.design",
        "object-src 'none'"
      ].join('; ')
    }
  },
  assetsInclude: ['**/*.spline'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled'],
    exclude: ['lucide-react']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep spline files as is
          if (assetInfo.name && assetInfo.name.endsWith('.spline')) {
            return 'assets/spline/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});
