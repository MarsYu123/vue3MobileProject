import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { IUserInfo } from '@type/store'

export const useUserStore = defineStore('userInfo', () => {
  const userInfo = ref({
    userId: '',
    source: ''
  })
  
  const setUserInfo = (data: IUserInfo) => {
    userInfo.value = data
  }
  return { userInfo, setUserInfo }
})

export const useRouterStore = defineStore('routerInfo', () => {
  const routerInfo = reactive({
    keepAlive: [  ]
  })

  const setKeepAlive = (data: string[]) => {
    routerInfo.keepAlive = data
  }
  return { routerInfo, setKeepAlive }
})