import { describe, it, expect, afterEach, vi } from 'vitest'
import { useGCPAuth } from '../useGCPAuth.js'

const promise = () => {
  return new Promise((resolve) => {
    resolve()
  })
}

vi.mock('firebase/app', () => {
  const initializeApp = vi.fn()

  return { initializeApp }
})

vi.mock('firebase/auth', () => {
  const signInWithEmailAndPassword = () => {
    return promise()
  }
  const signOut = () => {
    return promise()
  }
  const updatePassword = () => {
    return promise()
  }
  const getAuth = () => {
    const setPersistence = vi.fn()
    const currentUser = {
      getIdToken: () => {
        return new Promise((resolve) => {
          resolve()

          return 'token'
        })
      },
    }

    return { setPersistence, currentUser }
  }
  const onAuthStateChanged = vi.fn()
  const browserSessionPersistence = null

  return {
    signInWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signOut,
    updatePassword,
    browserSessionPersistence
  }
})

const firebaseConfig = {
  apiKey: 'key',
  authDomain: 'localhost',
}

describe('GCPAuth', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  const {
    user,
    isAuthenticated,
    username,
    password,
    isLoggingIn,
    isUpdatingPassword,
    login,
    logout,
    updatePassword,
  } = useGCPAuth(firebaseConfig)

  it('login', () => {
    username.value = 'user'
    password.value = 'pass'

    login().then(() => {
      expect(isAuthenticated.value).toBeTruthy()
      expect(isLoggingIn.value).toBeFalsy()

      expect(username.value).toBeNull()
      expect(password.value).toBeNull()
    })
  })

  it('logout', () => {
    logout().then(() => {
      expect(isAuthenticated.value).toBeFalsy()
    })
  })

  it('user', () => {
    login().then(() => {
      expect(isAuthenticated.value).toBeTruthy()
      expect(user.value).not.toBeNull()
    })
  })

  it('update password', () => {
    login().then(() => {
      password.value = 'pass'

      updatePassword().then(() => {
        expect(password.value).toBeNull()
        expect(isUpdatingPassword.value).toBeFalsy()
      })
    })
  })
})
