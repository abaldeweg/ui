export const mockSignInWithPassword = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      kind: 'identitytoolkit#VerifyPasswordResponse',
      localId: 'id',
      email: 'mail@localhost',
      displayName: '',
      idToken: 'token',
      registered: true,
      refreshToken: 'refresh_token',
      expiresIn: '3600',
    })
  )
}
