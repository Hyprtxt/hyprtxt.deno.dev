export const handler = {
  GET: (_req, ctx) => {
    return ctx.render({ ...ctx.state, hits: ctx.hits })
  },
}
