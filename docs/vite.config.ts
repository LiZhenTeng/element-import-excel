import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port:3000
  },
  resolve:{
    alias:{
      'element-import-excel':resolve(__dirname,'..', './lib')
    }
  }
})
