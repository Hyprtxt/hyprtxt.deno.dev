import Layout from "@/components/Layout.jsx"
import { API_URL, TOKEN } from "@/utils/config.js"
import { Head } from "$fresh/runtime.ts"
import { stringify } from "qs"

export const handler = {
  GET: async (_req, ctx) => {
    // This query could be a lookup somehow?
    const pages = await fetch(
      `${API_URL}/pages?filters[slug][$eq]=${ctx.params.slug}`,
      {
        headers: new Headers({
          Authorization: `Bearer ${TOKEN}`,
        }),
      },
    )
      .then(async (res) => await res.json())

    const page_query = {
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
          },
        },
      },
    }
    const page = await fetch(
      `${API_URL}/pages/${pages.data[0].id}?${stringify(page_query)}`,
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

const StrapiMedia = ({ data, index }) => {
  const sizes = ["thumbnail", "small", "medium", "large"]
  if (!data) {
    return <></>
  }
  const sources = sizes.reduce(
    (acc, current) => {
      const thing = data.attributes.formats[current]
      if (thing === undefined) {
        return acc
      }
      acc.push(`${thing.url} ${thing.width}w`)
      return acc
    },
    [],
  )
  return (
    <img
      src={data.attributes.formats.thumbnail.url}
      srcset={sources.join(" ,")}
      alt={data.attributes.alternativeText}
    />
  )
}

export default function PageIndexPage(props) {
  const { data } = props
  // console.log(data, "DAADDA")
  const { meta, content } = data.page.data.attributes
  const { title, description } = meta
  return (
    <Layout data={data}>
      <Head>
        <title>Hyprtxt | {title}</title>
        <meta name="author" content="Taylor Young" />
        <meta
          name="description"
          content={description}
        />
      </Head>
      <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white">
        {content.map((component) => {
          const { __component } = component
          if (__component === "layout.text-content") {
            const { title, content } = component
            return (
              <>
                <h1>{title}</h1>
                <p>{content}</p>
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
          return <p>We couldn't find that component</p>
        })}
      </section>
    </Layout>
  )
}
