import { assertEquals } from "$std/testing/asserts.ts"
import { freshTestWrapper } from "fresh_marionette"
import { BASE_URL } from "@/utils/config.js"
import { Status } from "$std/http/http_status.ts"

Deno.test(
  "Some Testing",
  freshTestWrapper(async (t) => {
    // fresh has been started
    await t.step("The homepage should work (200)", async () => {
      const requestStatus = await fetch(`${BASE_URL}`).then(
        async (res) => {
          await res.text()
          return res.status
        },
      )
      assertEquals(requestStatus, Status.OK)
    })
    // all done? Fresh will close gracefully
  }),
)
