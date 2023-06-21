import { assertEquals } from "$std/testing/asserts.ts"
import { freshPuppetTestWrapper } from "@/test/wrapper.ts"
import { BASE_URL } from "@/utils/config.js"
import { Status } from "$std/http/http_status.ts"

Deno.test(
  "Dynamic Pages Testing",
  {
    sanitizeResources: false,
    sanitizeOps: false,
  },
  freshPuppetTestWrapper(async (t, page) => {
    await t.step(
      "The pages index and all linked pages should work",
      async () => {
        // Visit the index
        const response = await page.goto(`${BASE_URL}/pages`, {
          waitUntil: "networkidle2",
        })
        assertEquals(response.status(), Status.OK)
        // Get the list of links
        const links = await page.$$eval("#pages a", (elements) => {
          return elements.map((e) => e.href)
        })
        // Visit each link and assert status 200
        for (const index in links) {
          const page_link = links[index]
          const response = await page.goto(page_link, {
            waitUntil: "networkidle2",
          })
          assertEquals(response.status(), Status.OK)
        }
      },
    )
  }),
)
