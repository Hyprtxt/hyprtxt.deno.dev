import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import Features from "@/components/Features.jsx"
import { tw } from "twind"
import { apply, css, theme } from "twind/css"

const homeStyles = css({
  ":global": {
    ".logo": {
      background:
        "url(https://hyprtxt.dev/images/hyprtxt_stack.png) no-repeat center center",
      width: "300px",
      height: "304px",
      margin: "0 auto",
      backgroundSize: "cover",
    },
    ".landing-page": {
      background: "transparent",
      width: "100%",
      minHeight: "100vh",
      color: "white",
      textAlign: "center",
      position: "fixed",
      zIndex: -1,
      top: 0,
    },
    "section.header-wrapper": {
      marginTop: "94vh",
    },
  },
})

// "https://hyprtxt.dev/images/nebula.jpg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Hyprtxt | Good Websites</title>
      </Head>
      <div class={tw`${homeStyles}`}></div>
      <section class="landing-page">
        <div class="mx-auto">
          <p class="my-8">Welcome</p>
          <div class="logo"></div>
          <p class="my-8">本当に速いのウェブサイト</p>
        </div>
      </section>
      <Layout>
        <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white">
          <h2 id="welcome" class="text(3xl gray-600) font-bold">
            <a href="#welcomes" class="hover:underline">Welcome</a>
          </h2>
          <p>
            Simple websites can still be very effective at getting your message
            across. At Hyprtxt we use Deno JavaScript to program websites.
          </p>
        </section>
        <section class="mx-auto max-w-screen-md">
          <Features />
        </section>
      </Layout>
    </>
  )
}
