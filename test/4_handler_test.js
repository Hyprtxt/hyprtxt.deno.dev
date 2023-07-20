import { createHandler } from "$fresh/server.ts"
import manifest from "@/fresh.gen.ts"
import { assert, assertEquals } from "$std/testing/asserts.ts"
import { Status } from "$std/http/http_status.ts"

const CONN_INFO = {
  localAddr: { hostname: "127.0.0.1", port: 8000, transport: "tcp" },
  remoteAddr: { hostname: "127.0.0.1", port: 53496, transport: "tcp" },
}

// globalThis.document = new DOMParser().parseFromString(
//   "<html></html>", // this the main change
//   "text/html",
// )
// window.document = globalThis.document

Deno.test("HTTP assert test.", async (t) => {
  const handler = await createHandler(manifest)

  await t.step("#1 GET /", async () => {
    const resp = await handler(new Request("http://127.0.0.1/"), CONN_INFO)
    assertEquals(resp.status, Status.OK)
  })

  // await t.step("#3 GET /showcase", async () => {
  //   const resp = await handler(
  //     new Request("http://127.0.0.1/showcase"),
  //     CONN_INFO,
  //   )
  //   const text = await resp.text()
  //   assert(text.includes("<div>Hello Foo!</div>"))
  // })
})
