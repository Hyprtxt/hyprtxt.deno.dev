// routes/_middleware.js
import { blue, cyan, green, magenta, red, yellow } from "$std/fmt/colors.ts"

export async function handler(req, ctx) {
  // For Logging
  const start = Date.now()
  const { pathname } = new URL(req.url)
  const withSession = [
    "/",
    "/showcase",
    "/pages",
  ]
  if (
    withSession.includes(pathname) ||
    pathname.startsWith("/pages/")
  ) {
    // Hit Counter
    const kv = await Deno.openKv()
    const key = ["hits"]
    await kv.atomic().mutate({
      type: "sum",
      key,
      value: new Deno.KvU64(1n),
    }).commit()
    const v = await kv.get(key)
    ctx.state.hits = parseInt(v.value.value) + 5844
  }
  const resp = await ctx.next()
  const now = Date.now()
  const ms = now - start
  const status = () => {
    const str = resp.status.toString()
    if (str[0] === "2") {
      return green(str)
    }
    if (str[0] === "3") {
      return yellow(str)
    } else {
      return red(str)
    }
  }
  resp.headers.set("X-Response-Time", `${ms}ms`)
  console.log(
    `[${magenta(new Date(now).toISOString())}] ${blue(req.method)} ${
      cyan(pathname)
    } - ${blue(String(ms) + "ms")} - ${status()}`,
  )
  return resp
}
