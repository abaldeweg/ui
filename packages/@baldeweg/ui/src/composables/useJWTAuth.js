import { ref, watch } from 'vue'
import Cookies from 'js-cookie'
import { useRequest } from '@/composables/useRequest.js'

const token = ref(Cookies.get('token') || null)
const refreshToken = ref(Cookies.get('refresh_token') || null)
const user = ref(null)
const isAuthenticated = ref(false)

export function useJWTAuth() {
  const { request } = useRequest()

  const username = ref(null)
  const password = ref(null)
  const isLoggingIn = ref(false)
  const isChangingPassword = ref(false)
  const interval = ref(undefined)

  const login = () => {
    isLoggingIn.value = true

    return request('post', '/api/login_check', {
      username: username.value,
      password: password.value,
    }).then((res) => {
      isAuthenticated.value = true
      isLoggingIn.value = false

      username.value = null
      password.value = null

      token.value = res.data.token
      refreshToken.value = res.data.refresh_token
      Cookies.set('token', res.data.token, { expires: 7 })
      Cookies.set('refresh_token', res.data.refresh_token, {
        expires: 30,
      })
    })
  }

  const logout = () => {
    isAuthenticated.value = false
    user.value = null

    token.value = null
    refreshToken.value = null
    Cookies.remove('token')
    Cookies.remove('refresh_token')
  }

  const refresh = () => {
    return request('post', '/api/token/refresh', {
      refresh_token: Cookies.get('refresh_token'),
    })
      .then((res) => {
        isAuthenticated.value = true

        token.value = res.data.token
        refreshToken.value = res.data.refresh_token
        Cookies.set('token', res.data.token, { expires: 7 })
        Cookies.set('refresh_token', res.data.refresh_token, {
          expires: 30,
        })
      })
      .catch(() => {
        logout()
      })
  }

  const getUser = () => {
    return request('get', '/api/me')
      .then((res) => {
        user.value = res.data
      })
      .catch((err) => {
        if (err.response.status === 401) {
          logout()
        }
      })
  }

  const updatePassword = () => {
    isChangingPassword.value = true

    return request('put', '/api/password', {
      password: password.value,
    }).then(() => {
      isChangingPassword.value = false
      password.value = null
    })
  }

  const setCheckInterval = () => {
    if (!Cookies.get('refresh_token')) return

    interval.value = setInterval(() => {
      if (!Cookies.get('token')) refresh()
    }, 30000)
  }

  const checkForRefresh = (from, to) => {
    if (from === null && typeof to === 'string') {
      if (!Cookies.get('token')) refresh()
      setCheckInterval()
    }

    if ((typeof from === 'string', to === null)) {
      interval.value = clearInterval(interval.value)
    }
  }

  const watchToken = () => {
    if (Cookies.get('token')) setCheckInterval()

    watch(token, (from, to) => {
      checkForRefresh(from, to)
    })
  }

  return {
    token,
    refreshToken,
    user,
    isAuthenticated,
    username,
    password,
    isLoggingIn,
    isChangingPassword,
    interval,
    login,
    logout,
    refresh,
    getUser,
    updatePassword,
    checkForRefresh,
    watchToken,
  }
}
