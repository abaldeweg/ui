export const mockToken = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      token: 'token',
      refresh_token: 'refresh_token',
    })
  )
}
