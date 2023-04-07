import { resolve } from "path";
import { defineConfig } from "vite";
import { MarkdownTransform } from "./.vitepress/plugins/markdown-transform";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000,
    fs: {
      allow: [resolve(__dirname, "..")],
    },
  },
  resolve: {
    alias: {
      "element-import-excel": resolve(__dirname, "..", "./lib"),
    },
  },
  ssr:{
    external:[],
    noExternal:true
  },
  plugins: [MarkdownTransform()],
});
