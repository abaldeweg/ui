import axios from 'axios'
import { ref } from 'vue'

const config = ref({
  baseURL: '',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export function useRequest(localConfig) {
  let mergedConfig = { ...config.value, ...localConfig }

  const setAuthHeader = (token) => {
    mergedConfig.headers['Authorization'] = 'Bearer ' + token
  }

  const request = (method, url, data, params) => {
    return axios.create(mergedConfig).request({
      method,
      url,
      data,
      params,
    })
  }

  return { config, localConfig, setAuthHeader, request }
}
