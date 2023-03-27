import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import  { resolve } from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './lib')
    }
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name:'index',
      formats:['es','cjs','umd'],
      fileName:'index'
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    },
    cssCodeSplit:true
  }
})
