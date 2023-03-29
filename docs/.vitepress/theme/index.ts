import ImportView from 'element-import-excel'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
const define = <T>(value: T): T => value

export default define<Theme>({
  Layout,
  enhanceApp: ({ app }) => {
    app.use(ImportView)
  },
})
