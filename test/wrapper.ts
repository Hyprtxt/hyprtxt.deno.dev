import { assertEquals } from "$std/testing/asserts.ts"
// import { Status } from "$std/http/http_status.ts"
import { delay } from "$std/async/delay.ts"
import { startFreshServer } from "$fresh/tests/test_utils.ts"
import { BASE_URL, DENO_ENV } from "@/utils/config.js"
// import puppeteer from "puppeteer"
import { default as puppeteer } from "npm:puppeteer"

const puppet_config = DENO_ENV === "development"
  ? { headless: false, defaultViewport: null }
  : { headless: true }

export const freshTestWrapper = (theTests: any) => async (t: any) => {
  const { serverProcess, lines } = await startFreshServer({
    args: ["run", "-A", "--unstable", "./main.ts"],
  })
  await theTests(t)
  // Stop the Server
  await lines.cancel()
  serverProcess.kill("SIGTERM")
  // await for the server to close
  await delay(100)
}

export const freshPuppetTestWrapper = (theTests: any) =>
  freshTestWrapper(async (t: any) => {
    const browser = await puppeteer.launch(puppet_config)
    const page = await browser.newPage()
    // await delay(100)
    await theTests(t, page)
    // await delay(100)
    await browser.close()
  })

Deno.test(
  "CORS should not set on GET /favicon.ico",
  {
    sanitizeResources: false,
  },
  freshTestWrapper(
    async (t: any) => {
      const res = await fetch(`${BASE_URL}/favicon.ico`)
      await res.body?.cancel()
      assertEquals(res.headers.get("cross-origin-resource-policy"), null)
    },
  ),
)
