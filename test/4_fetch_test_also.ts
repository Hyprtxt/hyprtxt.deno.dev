import { fetchTestWrapper } from "@/test/fetch_test_wrapper.ts"
import { assert, assertEquals } from "$std/assert/mod.ts"
import { Status } from "$std/http/http_status.ts"
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts"
import { BASE_URL } from "@/utils/config.js"

Deno.test(
  "The index page works",
  {
    sanitizeResources: false,
    sanitizeOps: false,
  },
  fetchTestWrapper(async (t: Deno.TestContext) => {
    await t.step(
      "The index page returns 200, a 'Welcome', HTML Document, and more",
      async () => {
        const response = await fetch(`${BASE_URL}`)
        assertEquals(response.status, Status.OK)
        const text = await response.text()
        assert(text.includes("Welcome"))
        const document = new DOMParser().parseFromString(text, "text/html")
        assert(document)
        const h1 = document.querySelector("h1")
        assert(h1)
        assertEquals(h1.textContent, "Hello")
      },
    )
  }),
)
