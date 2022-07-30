import { ref } from 'vue'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updatePassword as firebaseUpdatePassword,
  browserSessionPersistence,
} from 'firebase/auth'

const user = ref(null)
const token = ref(null)
const isAuthenticated = ref(false)

export function useGCPAuth(firebaseConfig) {
  const username = ref(null)
  const password = ref(null)
  const isLoggingIn = ref(false)
  const isUpdatingPassword = ref(false)

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  auth.setPersistence(browserSessionPersistence)

  const login = () => {
    isLoggingIn.value = true

    return signInWithEmailAndPassword(
      auth,
      username.value,
      password.value
    ).then(() => {
      user.value = auth.currentUser
      auth.currentUser.getIdToken().then((idToken) => {
        token.value = idToken
      })
      isAuthenticated.value = true
      isLoggingIn.value = false

      username.value = null
      password.value = null
    })
  }

  const logout = () => {
    return signOut(auth).then(() => {
      user.value = null
      token.value = null
      isAuthenticated.value = false
    })
  }

  const updatePassword = () => {
    isUpdatingPassword.value = true

    return firebaseUpdatePassword(auth.currentUser, password.value).then(() => {
      isUpdatingPassword.value = false

      password.value = null
    })
  }

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      user.value = auth.currentUser
      auth.currentUser.getIdToken().then((idToken) => {
        token.value = idToken
      })
      isAuthenticated.value = true
    }
  })

  return {
    user,
    token,
    isAuthenticated,
    username,
    password,
    isLoggingIn,
    isUpdatingPassword,
    login,
    logout,
    updatePassword,
  }
}
