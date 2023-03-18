import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import Features from "@/components/Features.jsx"
import { tw } from "twind"
import { homeStyles } from "@/utils/style.js"
import { animation, keyframes } from "twind/css"

export default function Home(props) {
  const fadeIn = keyframes({
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  })
  const fadeInLast = keyframes({
    "0%": {
      opacity: 0,
    },
    "70%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  })
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
          <div class={tw`logo ${animation("600ms ease-in 1", fadeIn)}`}></div>
          <p class={tw`my-8 ${animation("1200ms ease-in 1", fadeInLast)}`}>
            本当に速いのウェブサイト
          </p>
        </div>
      </section>
      <Layout data={props}>
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
