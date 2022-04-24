import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'


const root = resolve(__dirname, '')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        kontakt: resolve(root, 'kontakt', 'index.html'),
        b2b: resolve(root, 'b2b', 'index.html')
      }
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
