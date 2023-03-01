import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
// import Features from "@/components/Features.jsx"
// import { tw } from "twind"
// import { apply, css, theme } from "twind/css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Hyprtxt | Good Websites</title>
      </Head>
      <Layout>
        <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white">
          <h2>
            Showcase
          </h2>
          <p>
            Some websites I have created or contributed to. Links open in new
            tabs.
          </p>
          <h3>Open Source Websites</h3>
          <ul class="list-disc">
            <li>
              <a target="_blank" href="https://linceo.club/">Linceo Club</a>
            </li>
            <li>
              <a target="_blank" href="https://videopoker.academy/">
                Video Poker Academy
              </a>
            </li>
            <li>
              <a target="_blank" href="https://fresh-strapi.deno.dev/">
                Fresh Strapi
              </a>
            </li>
          </ul>
          <h3>For Hire</h3>
          <ul class="list-disc">
            <li>
              <a target="_blank" href="https://cactusstone.com/">
                Cactus Stone
              </a>
            </li>
            <li>
              <a target="_blank" href="https://andbounds.com/">
                ANDBOUNDS Inc.
              </a>
            </li>
          </ul>
          <h3>Open Source Projects</h3>
          <ul class="list-disc">
            <li>
              <a target="_blank" href="https://marionette.deno.dev/">
                Marionette
              </a>
            </li>
            <li>
              <a target="_blank" href="https://classic.videopoker.academy/">
                JavaScript Video Poker
              </a>
            </li>
          </ul>
        </section>
      </Layout>
    </>
  )
}
