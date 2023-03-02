import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import Features from "@/components/Features.jsx"
import { tw } from "twind"
import { css } from "twind/css"
import { asset } from "$fresh/runtime.ts"

const homeStyles = css({
  ":global": {
    ".logo": {
      background: `url(${asset("/hyprtxt_stack.png")}) no-repeat center center`,
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Hyprtxt | Good Websites</title>
        <meta name="author" content="Taylor Young" />
        <meta
          name="description"
          content="Hyprtxt is Taylor's Brand. Webmaster for hire. Based in Prescott, AZ. Click on in!"
        />
      </Head>
      <div class={tw`${homeStyles}`}></div>
      <section class="landing-page">
        <div class="mx-auto">
          <p class="my-8">Welcome 👋</p>
          <div class="logo"></div>
          <p class="my-8">本当に速いのウェブサイト</p>
        </div>
      </section>
      <Layout>
        <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white">
          <h1 id="welcome">
            <a href="#welcome">Hello</a>
          </h1>
          <p>
            Simple and Fast websites can be very effective at getting your
            message across. At Hyprtxt we use Deno JavaScript to program, test
            and develop websites.
          </p>
        </section>
        <section class="mx-auto max-w-screen-md">
          <Features />
        </section>
      </Layout>
    </>
  )
}
