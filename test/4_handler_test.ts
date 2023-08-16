// import { createHandler } from "$fresh/server.ts"
// import manifest from "@/fresh.gen.ts"
import { delay } from "$std/async/delay.ts"
import { startFreshServer } from "$fresh/tests/test_utils.ts"

import { BASE_URL } from "@/utils/config.js"
import { assert, assertEquals } from "$std/assert/mod.ts"
import { Status } from "$std/http/http_status.ts"

const myTestWrapper = (args: any) => (theTests: any) => async (t: any) => {
  const { serverProcess, lines } = await startFreshServer({
    args,
  })
  await theTests(t)
  // Stop the Server
  await lines.cancel()
  serverProcess.kill("SIGTERM")
  // await for the server to close
  await delay(100)
}

export const fixtureTestWrapper = myTestWrapper([
  "run",
  "-A",
  "--unstable",
  "./main.ts",
])

// import { wrapFetch } from "cookiejar";
// const fetch = wrapFetch();

Deno.test(
  "The Dashboard should show a new login",
  {
    sanitizeResources: false,
    sanitizeOps: false,
  },
  fixtureTestWrapper(async (t: any) => {
    await t.step("The dashboard shows nothing", async () => {
      const response = await fetch(`${BASE_URL}`)
      assertEquals(response.status, Status.OK)
      const text = await response.text()
      assert(!text.includes("<div>Flashed message: test</div>"))
    })
  }),
)
