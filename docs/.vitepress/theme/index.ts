import ImportView from "../../../lib";
import { globals } from "../vitepress";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import '../vitepress/styles/code.scss'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

export const define = <T>(value: T): T => value;

export default define<Theme>({
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(ImportView);
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  },
});
