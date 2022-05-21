import axios from 'axios'
import Cookies from 'js-cookie'

const headers = () => {
  let items = {
    'Content-Type': 'application/json',
  }

  if (Cookies.get('token')) {
    items['Authorization'] = 'Bearer ' + Cookies.get('token')
  }

  return items
}

const create = () => {
  return axios.create({
    baseURL: import.meta.env.VUE_APP_API,
    timeout: 50000,
    headers: headers(),
  })
}

const request = (method, url, data, params) => {
  return create().request({
    method,
    url,
    data,
    params,
  })
}

export { request }
