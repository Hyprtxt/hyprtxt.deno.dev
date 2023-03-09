// routes/_middleware.js
import { blue, cyan, green, magenta, red, yellow } from "$std/fmt/colors.ts"

import { API_URL, BASE_URL, DENO_ENV } from "@/utils/config.js"

export async function handler(req, ctx) {
  // For Logging
  const start = Date.now()
  const { pathname } = new URL(req.url)
  const withSession = [
    "/",
    // "/pages",
  ]
  if (
    withSession.includes(pathname) ||
    pathname.startsWith("/pages/")
  ) {
    ctx.API_URL = API_URL
    ctx.BASE_URL = BASE_URL
    ctx.DENO_ENV = DENO_ENV
    // ctx.store = store
    // resp = await setupSession(req, ctx)
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
