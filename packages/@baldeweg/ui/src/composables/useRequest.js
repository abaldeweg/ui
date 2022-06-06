import axios from 'axios'
import { ref } from 'vue'

const config = ref({
  baseURL: '',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export function useRequest() {
  const setAuthHeader = (token) => {
    config.value.headers['Authorization'] = 'Bearer ' + token
  }

  const request = (method, url, data, params) => {
    return axios.create(config.value).request({
      method,
      url,
      data,
      params,
    })
  }

  return { config, setAuthHeader, request }
}
