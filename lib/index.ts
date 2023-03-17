import ImportView from './import-excel.vue'
import { App } from 'vue'
const install = (app: App) => {
    app.component('ImportView', ImportView)
}
export default install
export { ImportView }