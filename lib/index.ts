import type{ App } from 'vue'
import { ImportView } from './components/home'

export { ImportView } from './components/home'

const install=(app:App)=>{
    app.component(ImportView.name,ImportView)
}
export default install