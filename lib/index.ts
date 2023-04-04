import type{ App } from 'vue'
import { ImportView } from './components'

export { ImportView } from './components'

const install=(app:App)=>{
    app.component('ImportView',ImportView)
}
export default install

export * from './components'
export * from './composables'