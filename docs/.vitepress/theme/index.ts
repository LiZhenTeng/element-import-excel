import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import ImportView from "element-import-excel";
import { globals } from "../vitepress";

const define = <T>(value: T) => value;
export default define<Theme>({
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(ImportView);
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  },
});
