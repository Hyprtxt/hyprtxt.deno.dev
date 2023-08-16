import { delay } from "$std/async/delay.ts"
import { startFreshServer } from "$fresh/tests/test_utils.ts"
import { BASE_URL } from "@/utils/config.js"
import { assert, assertEquals } from "$std/assert/mod.ts"
import { Status } from "$std/http/http_status.ts"

const myTestWrapper =
  (args: string[]) => (theTests: any) => async (t: Deno.TestContext) => {
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

export const fetchTestWrapper = myTestWrapper([
  "run",
  "-A",
  "--unstable",
  "./main.ts",
])

Deno.test(
  "The index page works",
  {
    sanitizeResources: false,
    sanitizeOps: false,
  },
  fetchTestWrapper(async (t: Deno.TestContext) => {
    await t.step("The index page returns a 200 and a 'Welcome'", async () => {
      const response = await fetch(`${BASE_URL}`)
      assertEquals(response.status, Status.OK)
      const text = await response.text()
      assert(text.includes("Welcome"))
    })
  }),
)
