import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ImportExcel from '../lib/index'

createApp(App).use(ElementPlus).use(ImportExcel).mount('#app')
