export const mockPassword = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({}))
}
