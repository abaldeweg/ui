import { onMounted, reactive } from '@vue/composition-api'
import Cookies from 'js-cookie'
import { initializeApp } from 'firebase/app'
import {
  browserSessionPersistence,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'

export const state = reactive({
  username: null,
  password: null,
  isAuthenticated: false,
  isLoggingIn: false,
  isChangingPassword: false,
  interval: null,
  wrongCredentials: false,
  passwordSuccessful: false,
  passwordError: false,
})

export default function useAuth() {
  const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  }

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  auth.setPersistence(browserSessionPersistence)

  const login = () => {
    state.isLoggingIn = true

    signInWithEmailAndPassword(auth, state.username, state.password)
      .then((userCredential) => {
        Cookies.set('token', userCredential.user.accessToken, {
          expires: 1 / 24,
        })
        Cookies.set('refresh_token', userCredential.user.refreshToken, {
          expires: 30,
        })

        state.isAuthenticated = true
        state.username = null
        state.password = null

        check()
      })
      .catch(() => {
        state.wrongCredentials = true
      })
      .finally(() => {
        state.isLoggingIn = false
      })

    state.isLoggingIn = true
  }

  const logout = () => {
    window.clearInterval(state.interval)

    Cookies.remove('token')
    Cookies.remove('refresh_token')

    state.isAuthenticated = false
  }

  const refresh = () => {
    auth.currentUser
      .getIdToken()
      .then((userCredential) => {
        Cookies.set('token', userCredential.user.accessToken, {
          expires: 1 / 24,
        })
        Cookies.set('refresh_token', userCredential.user.refreshToken, {
          expires: 30,
        })

        state.isAuthenticated = true
      })
      .catch(() => {
        logout()
      })
  }

  const session = () => {
    if (undefined !== Cookies.get('token')) {
      state.isAuthenticated = true
    }
    if (
      undefined === Cookies.get('token') &&
      undefined !== Cookies.get('refresh_token')
    ) {
      refresh()
    }
    if (
      undefined === Cookies.get('token') &&
      undefined === Cookies.get('refresh_token')
    ) {
      logout()
    }
  }

  const check = () => {
    session()
    state.interval = window.setInterval(() => {
      session()
    }, 30000)
  }

  onMounted(check)

  return {
    state,
    login,
    logout,
  }
}
