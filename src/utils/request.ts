import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

export function initAxios(options: AxiosRequestConfig) {
  const instance = axios.create({
    baseURL: options.baseURL || 'https://gw.api.taobao.com/router/rest',
  })

  // TODO: 请求拦截
  instance.interceptors.request.use((config) => {
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  instance.interceptors.response.use((response) => {
    const { data } = response
    return data[Object.keys(data)[0]]
  }, (error) => {
    // console.log('instance.interceptors.response.use ~ error', error)
    // TODO: 响应错误处理
    throw error
  })

  return instance
}
