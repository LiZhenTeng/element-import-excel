import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ImportExcel from '../lib/index'

createApp(App).use(ImportExcel).mount('#app')
