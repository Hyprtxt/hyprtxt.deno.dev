import { delay } from "$std/async/delay.ts"
import { startFreshServer } from "$fresh/tests/test_utils.ts"

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
