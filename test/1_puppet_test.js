import { assertEquals } from "$std/testing/asserts.ts"
import { BASE_URL } from "@/utils/config.js"
import { Status } from "$std/http/http_status.ts"
import { freshPuppetTestWrapper } from "@/test/wrapper.ts"

Deno.test(
  "The homepage should work puppeteer (200)",
  {
    sanitizeResources: false,
  },
  freshPuppetTestWrapper(async (t, page) => {
    const response = await page.goto(`${BASE_URL}`, {
      waitUntil: "networkidle2",
    })
    assertEquals(response.status(), Status.OK)
  }),
)

Deno.test(
  "The showcase should work",
  {
    sanitizeResources: false,
  },
  freshPuppetTestWrapper(async (t, page) => {
    const response = await page.goto(`${BASE_URL}/showcase`, {
      waitUntil: "networkidle2",
    })
    assertEquals(response.status(), Status.OK)
  }),
)

Deno.test(
  "The 404 page should 404",
  {
    sanitizeResources: false,
  },
  freshPuppetTestWrapper(async (t, page) => {
    const response = await page.goto(`${BASE_URL}/404`, {
      waitUntil: "networkidle2",
    })
    assertEquals(response.status(), Status.NotFound)
  }),
)
