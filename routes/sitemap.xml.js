// ./routes/sitemap.xml.ts
import { SitemapContext } from "fresh_seo"
import manifest from "@/fresh.gen.ts"
import { API_URL, BASE_URL, TOKEN } from "@/utils/config.js"

export const handler = {
  GET: async (_req, _ctx) => {
    const sitemap = new SitemapContext(
      BASE_URL,
      manifest,
    )
    const pages = await fetch(
      `${API_URL}/pages?populate[meta]=*`,
      {
        headers: new Headers({
          Authorization: `Bearer ${TOKEN}`,
        }),
      },
    )
      .then(async (res) => await res.json())
    pages.data.map((page) => {
      // console.log(page)
      sitemap.add(`/pages/${page.attributes.slug}`)
      return
    })
    return sitemap.render()
  },
}
