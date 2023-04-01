import Layout from "@/components/Layout.jsx"
import { API_URL, TOKEN } from "@/utils/config.js"
import { Head } from "$fresh/runtime.ts"
import { stringify } from "qs"
import { parse } from "marked"
import { tw } from "twind"
import { apply, css } from "twind/css"
import Slideshow from "@/islands/Slideshow.tsx"
import StrapiMedia from "@/components/StrapiMedia.jsx"
import ThumbnailGallery from "@/islands/ThumbnailGallery.tsx"
import Hero from "@/components/Hero.jsx"

export const handler = {
  GET: async (_req, ctx) => {
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
            "layout.markdown": {
              populate: "*",
            },
            "layout.gallery": {
              populate: "*",
            },
            "layout.thumb-gallery": {
              populate: "*",
            },
            "layout.slideshow": {
              populate: "*",
            },
            "layout.hero": {
              populate: "*",
            },
          },
        },
      },
    })
    if (!pages.data.length) {
      return ctx.renderNotFound()
    }
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
    if (!page.data) {
      return ctx.renderNotFound()
    }
    return ctx.render({ ...ctx.state, page })
  },
}

export const BREADCRUMB_STYLE = css({
  a: apply`text-dark`,
})

export default function PageIndexPage(props) {
  const { data, url } = props
  const { meta, content } = data.page.data.attributes
  const { title, description } = meta
  const MetaTags = () => {
    return (
      <>
        <title>Hyprtxt | {title}</title>
        <meta name="author" content="Taylor Young" />
        <meta
          name="description"
          content={description}
        />
      </>
    )
  }
  const Breadcrumbs = () => {
    const currentURL = new URL(url)
    return (
      <section
        class={tw`max-w-screen-md mx-auto pt-3 px(8) bg-white ${BREADCRUMB_STYLE}`}
      >
        <a href="/pages">Pages</a> {">"}{" "}
        <a href={currentURL.pathname}>{title}</a>
      </section>
    )
  }
  return (
    <Layout data={props}>
      <Head>
        <MetaTags />
      </Head>
      <Breadcrumbs />
      <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white markdown">
        {content.map((component) => {
          const { __component } = component
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
          if (__component === "layout.thumb-gallery") {
            const { title, media } = component
            return (
              <>
                {title && <h1>{title}</h1>}
                <ThumbnailGallery media={media} />
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
          if (__component === "layout.hero") {
            // const { title, description } = component
            return <Hero data={component} />
          }
          return <p>We couldn't find that component</p>
        })}
      </section>
    </Layout>
  )
}
