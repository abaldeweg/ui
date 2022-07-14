import { rest } from 'msw'
import { mockToken } from './resolvers/jwtAuth/mockToken.js'
import { mockUser } from './resolvers/jwtAuth/mockUser.js'
import { mockPassword } from './resolvers/jwtAuth/mockPassword.js'
import { mockSignInWithPassword } from './resolvers/gcpAuth/mockSignInWithPassword.js'
import { mockLookup } from './resolvers/gcpAuth/mockLookup.js'
import { mockUpdate } from './resolvers/gcpAuth/mockUpdate.js'

export const handlers = [
  // jwt auth
  rest.post('http://localhost:3000/api/login_check', mockToken),
  rest.put('http://localhost:3000/api/password', mockPassword),
  rest.post('http://localhost:3000/api/token/refresh', mockToken),
  rest.get('http://localhost:3000/api/me', mockUser),

  // gcp auth
  rest.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
    mockSignInWithPassword
  ),
  rest.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:lookup',
    mockLookup
  ),
  rest.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:update',
    mockUpdate
  ),
]
