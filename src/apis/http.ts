import axios from 'axios'
import qs from 'qs'
import { showToast } from 'vant/es'
import { useUserStore } from '@/stores'

const config = {
  baseURL: import.meta.env.VITE_APP_ENV === 'development' ? '/api' : `${location.protocol}//${import.meta.env.VITE_APP_WEB_URL}`,
  isUser: false
}

const _axios = axios.create(config)

// 请求拦截，如果请求带有isUser则说明是需要用户信息
_axios.interceptors.request.use((config) => {
  const userInfoStore = useUserStore()
  if (config.isUser) {
    Object.assign(config.data, {
      userId: userInfoStore.userInfo.userId,
      source: userInfoStore.userInfo.source
    })
  }
  config.data = qs.stringify(config.data)
  return config
})
_axios.interceptors.response.use((res) => {
  if (!res.data) {
    showToast('请求异常，暂无数据')
    return Promise.reject('请求异常')
  }
  if (res.data.errCode !== 0 && res.data.errCode !== undefined) {
    showToast(res.data.message || res.data.msg || '请求异常')
    return Promise.reject(res.data.message)
  }
  return res.data
}, (error) => {
  console.error('请求错误')
  return Promise.reject(error)
})

export default _axios