import { assertEquals } from "$std/testing/asserts.ts"
import { BASE_URL } from "@/utils/config.js"
import { Status } from "$std/http/http_status.ts"
import { startFreshServer } from "$fresh/tests/test_utils.ts"
import { delay } from "$std/async/delay.ts"

// import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts"
// import { startFreshServer } from "$fresh/tests/test_utils.ts"

Deno.test(
  "The homepage should work (200)",
  {
    sanitizeResources: false,
  },
  async (t) => {
    const { serverProcess, lines, address } = await startFreshServer({
      args: ["run", "-A", "--unstable", "./main.ts"],
    })

    const requestStatus = await fetch(`${BASE_URL}`).then(
      async (res) => {
        await res.text()
        return res.status
      },
    )
    assertEquals(requestStatus, Status.OK)
    // })

    // Stop the Server
    await lines.cancel()
    serverProcess.kill("SIGTERM")
    // await for the server to close
    await delay(100)
  },
)
