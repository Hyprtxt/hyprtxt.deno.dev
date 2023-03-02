// ./routes/sitemap.xml.ts
import { SitemapContext } from "$freshSEO"
import manifest from "@/fresh.gen.ts"
const BASE_URL = Deno.env.get("BASE_URL") || "http://localhost:8000"

export const handler = {
  GET(_req, _ctx) {
    const sitemap = new SitemapContext(
      // "http://example.com",
      BASE_URL,
      manifest,
    )

    // You can add additional page here
    // sitemap.add("/blog/hello-world")
    return sitemap.render()
  },
}
