import Layout from "@/components/Layout.jsx"
import { API_URL, TOKEN } from "@/utils/config.js"
import { Head } from "$fresh/runtime.ts"
import { stringify } from "qs"
import { parse } from "marked"
import Slideshow from "@/islands/Slideshow.jsx"
import StrapiMedia from "@/components/StrapiMedia.jsx"

export const handler = {
  GET: async (_req, ctx) => {
    // This query could be a lookup somehow?
    const SLUG_REG_EXP = /^[a-z0-9]+(?:-[a-z0-9]+)*$/g
    const slug = ctx.params.slug.toLowerCase()
    if (!SLUG_REG_EXP.test(slug)) {
      return ctx.renderNotFound()
    }
    const pages_query = stringify({
      filters: {
        slug: {
          $eq: slug,
        },
      },
    })
    const pages = await fetch(
      `${API_URL}/pages?${pages_query}`,
      {
        headers: new Headers({
          Authorization: `Bearer ${TOKEN}`,
        }),
      },
    )
      .then(async (res) => await res.json())

    const page_query = stringify({
      populate: {
        meta: "*",
        content: {
          on: {
            "layout.gallery": {
              populate: "*",
            },
            "layout.text-content": {
              populate: "*",
            },
            "layout.markdown": {
              populate: "*",
            },
            "layout.slideshow": {
              populate: "*",
            },
          },
        },
      },
    })
    if (!pages.data.length) {
      return ctx.renderNotFound()
    }
    // console.log(pages, "KLJDFSLKJ")
    const page_id = parseInt(pages.data[0].id)
    if (!page_id) {
      return ctx.renderNotFound()
    }
    const page = await fetch(
      `${API_URL}/pages/${pages.data[0].id}?${page_query}`,
      {
        headers: new Headers({
          Authorization: `Bearer ${TOKEN}`,
        }),
      },
    )
      .then(async (res) => await res.json())
    // console.log(page.data?.attributes.content, "TIHSI")
    if (!page.data) {
      return ctx.renderNotFound()
    }
    return ctx.render({ ...ctx.state, page })
  },
}

export default function PageIndexPage(props) {
  const { data } = props
  // console.log(data, "DAADDA")
  const { meta, content } = data.page.data.attributes
  const { title, description } = meta
  return (
    <Layout data={props}>
      <Head>
        <title>Hyprtxt | {title}</title>
        <meta name="author" content="Taylor Young" />
        <meta
          name="description"
          content={description}
        />
      </Head>
      <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white markdown">
        {content.map((component) => {
          const { __component } = component
          if (__component === "layout.text-content") {
            const { title, content } = component
            return (
              <>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: parse(content) }}></div>
              </>
            )
          }
          if (__component === "layout.markdown") {
            const { content } = component
            return (
              <>
                <div dangerouslySetInnerHTML={{ __html: parse(content) }}></div>
              </>
            )
          }
          if (__component === "layout.gallery") {
            const { title, media } = component
            return (
              <>
                <h1>{title}</h1>
                {media.data.map((item, idx) => (
                  <StrapiMedia data={item} index={idx} />
                ))}
              </>
            )
          }
          if (__component === "layout.slideshow") {
            const { media } = component
            return (
              <Slideshow
                media={media}
                automatic
                interval={4000}
              />
            )
          }
          return <p>We couldn't find that component</p>
        })}
      </section>
    </Layout>
  )
}
