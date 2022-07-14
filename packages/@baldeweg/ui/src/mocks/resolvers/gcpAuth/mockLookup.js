export const mockLookup = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      kind: 'identitytoolkit#GetAccountInfoResponse',
      users: [
        {
          localId: 'id',
          email: 'mail@localhost',
          passwordHash: 'hash',
          emailVerified: false,
          passwordUpdatedAt: 1649778621493,
          providerUserInfo: [
            {
              providerId: 'password',
              federatedId: 'mail@localhost',
              email: 'mail@localhost',
              rawId: 'mail@localhost',
            },
          ],
          validSince: '1649778621',
          disabled: false,
          lastLoginAt: '1657537202275',
          createdAt: '1649778621493',
          lastRefreshAt: '2022-07-11T11:00:02.275Z',
        },
      ],
    })
  )
}
