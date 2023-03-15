import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'element-import-excel/dist',
    lib: {
      entry: path.resolve(__dirname, "./lib/index.ts"),
      name: "element-import-excel",
      fileName: "element-import-excel",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
})
