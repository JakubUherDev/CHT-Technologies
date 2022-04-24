import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
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
    rollupOptions: {
      main: resolve(__dirname, 'index.html'),
      kontakt: resolve(__dirname, 'kontakt/index.html')
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
