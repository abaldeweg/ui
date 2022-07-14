export const mockUser = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({}))
}
