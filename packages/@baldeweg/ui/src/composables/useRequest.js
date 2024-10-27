import { ref } from 'vue'
import axios from 'axios'

/**
 * Provides a reactive way to manage HTTP requests using Axios.
 *
 * @param {object} localConfig An object containing Axios configuration options.
 *
 * @returns {object} An object containing the config, localConfig, setAuthHeader, and request functions.
 *
 * @example
 * import { useRequest } from '@baldeweg/ui';
 *
 * const { config, setAuthHeader, request } = useRequest({
 *   baseURL: 'https://localhost',
 * });
 *
 * setAuthHeader('your_bearer_token');
 *
 * const response = await request('get', '/users');
 */
export function useRequest(localConfig = {}) {
  const config = ref({
    baseURL: '',
    timeout: 50000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  let mergedConfig = { ...config.value, ...localConfig }

  /**
   * Sets the Authorization header with a bearer token.
   *
   * @param {string} token The bearer token.
   */
  const setAuthHeader = (token) => {
    mergedConfig.headers['Authorization'] = 'Bearer ' + token
  }

  /**
   * Makes an HTTP request using Axios.
   *
   * @param {string} method The HTTP method (e.g., 'get', 'post', 'put', 'delete').
   * @param {string} url The request URL.
   * @param {object} body The request data (for POST, PUT requests).
   * @param {object} query The request query parameters.
   * @returns {Promise} A promise that resolves with the Axios response.
   */
  const request = (method, url, body, query) => {
    return axios.create(mergedConfig).request({
      method,
      url,
      body,
      query,
    })
  }

  return { config, localConfig, setAuthHeader, request }
}
