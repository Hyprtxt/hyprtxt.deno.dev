import { assertEquals } from "$std/testing/asserts.ts"
import { BASE_URL } from "@/utils/config.js"
import { Status } from "$std/http/http_status.ts"
import { freshTestWrapper } from "@/test/wrapper.ts"

// I am not sure this is a very good idea.

Deno.test(
  "The homepage should work (200)",
  {
    sanitizeResources: false,
  },
  freshTestWrapper(
    async (t) => {
      const requestStatus = await fetch(`${BASE_URL}`).then(
        async (res) => {
          await res.text()
          return res.status
        },
      )
      assertEquals(requestStatus, Status.OK)
    },
  ),
)
