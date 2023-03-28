import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import esbuild from 'rollup-plugin-esbuild'
import commonjs from '@rollup/plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './lib')
    }
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      },
      plugins: [
        commonjs(),
        esbuild({
          sourceMap: true,
          target: "es2018",
          loaders: {
            '.vue': 'ts',
          }
        })
      ]
    },
    cssCodeSplit: true
  }
})
