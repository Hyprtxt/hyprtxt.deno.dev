import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import { API_URL, TOKEN } from "@/utils/config.js"
import { stringify } from "qs"

export const handler = {
  GET: async (_req, ctx) => {
    // This query could be a lookup somehow?
    const query = stringify({
      populate: {
        meta: "*",
      },
    })
    const pages = await fetch(
      `${API_URL}/pages?${query}`,
      {
        headers: new Headers({
          Authorization: `Bearer ${TOKEN}`,
        }),
      },
    )
      .then(async (res) => await res.json())
    // console.log(pages.data, "TLKJSDFLKj")
    return ctx.render({ ...ctx.state, pages: pages.data })
  },
}

export default function Home(props) {
  // console.log(props.data.pages, "THIOSHFPages")
  return (
    <>
      <Head>
        <title>Hyprtxt | Good Websites</title>
      </Head>
      <Layout data={props}>
        <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white markdown">
          <h1>
            Pages
          </h1>
          <ul id="pages">
            {props.data.pages.map((page) => {
              // console.log(page, "PAGE")
              const { slug, meta } = page.attributes
              const { title } = meta
              return (
                <li>
                  <a href={`/pages/${slug}`}>{title}</a>
                </li>
              )
            })}
          </ul>
        </section>
      </Layout>
    </>
  )
}
