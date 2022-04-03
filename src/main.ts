import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store, { setupStore } from './store'
import { globelRegister } from './globel'

import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

setupStore()

app.use(router)
app.use(store)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(globelRegister)

app.mount('#app')
