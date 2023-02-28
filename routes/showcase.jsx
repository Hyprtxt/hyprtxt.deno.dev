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
          <h2 id="welcome" class="text(3xl gray-600) font-bold">
            <a href="#welcome" class="hover:underline">Welcome</a>
          </h2>
          <p>
            Welcome here's some websites I have created.
          </p>
          <ul>
            <li>
              <a href="https://cactusstone.com/">Cactus Stone</a>
            </li>
            <li>
              <a href="https://videopoker.academy/">Video Poker Academy</a>
            </li>
            <li>
              <a href="https://fresh-strapi.deno.dev/">Fresh Strapi</a>
            </li>
            <li>
              <a href="https://linceo.club/">Linceo Club</a>
            </li>
          </ul>
        </section>
      </Layout>
    </>
  )
}
