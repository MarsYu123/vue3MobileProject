import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import directives from '@/directives'

import 'virtual:uno.css'

import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'mars-echarts/dist/style.css'
import './styles/base.scss'
import './styles/theme/default.scss'
import './styles/theme/main.scss'
import { asyncComponent } from './plugins/createComponents'
import { useUserStore } from '@/stores'

const app = createApp(App)
directives(app)
asyncComponent(app)


// 暂时用于生成用户id
let userId
if (!localStorage.getItem('jl-userInfo')) {
  const ios = navigator.userAgent.match(/(iphone | ipad | ipod )/i)?.[0]
  const android = navigator.userAgent.match(/(Android | Adr)/i)?.[0]
  userId = `${ios || android || 'other'}-${new Date().getTime()}`
  localStorage.setItem('jl-userInfo', userId)
} else {
  userId = localStorage.getItem('jl-userInfo')
}

app.use(createPinia())
app.use(router)

useUserStore().setUserInfo({
  userId,
  source: '1'
})

app.mount('#app')
