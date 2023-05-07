import { assertEquals } from "$std/testing/asserts.ts"
import { freshPuppetTestWrapper } from "@/test/wrapper.js"
import { BASE_URL, DENO_ENV } from "@/utils/config.js"
import { Status } from "$std/http/http_status.ts"

const puppet_config = DENO_ENV === "development"
  ? { headless: false, defaultViewport: null }
  : { headless: true }

Deno.test(
  "Public Pages Testing",
  freshPuppetTestWrapper(puppet_config, async (t, page) => {
    await t.step("The homepage should work", async () => {
      const response = await page.goto(`${BASE_URL}`, {
        waitUntil: "networkidle2",
      })
      assertEquals(response.status(), Status.OK)
    })

    await t.step("The showcase should work", async () => {
      const response = await page.goto(`${BASE_URL}/showcase`, {
        waitUntil: "networkidle2",
      })
      assertEquals(response.status(), Status.OK)
    })

    await t.step("The 404 page should 404", async () => {
      const response = await page.goto(`${BASE_URL}/404`, {
        waitUntil: "networkidle2",
      })
      assertEquals(response.status(), Status.NotFound)
    })

    // More steps?
  }),
)
