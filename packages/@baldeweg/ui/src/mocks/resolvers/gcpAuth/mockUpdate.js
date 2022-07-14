export const mockUpdate = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      kind: 'identitytoolkit#SetAccountInfoResponse',
      localId: 'id',
      email: 'test@localhost',
      idToken: 'token',
      providerUserInfo: [
        {
          providerId: 'password',
          federatedId: 'test@localhost',
          email: 'test@localhost',
          rawId: 'test@localhost',
        },
      ],
      refreshToken: 'refresh_token',
      expiresIn: '3600',
      passwordHash: 'hash',
      emailVerified: false,
    })
  )
}
