import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import Features from "@/components/Features.jsx"
import { tw } from "twind"
import { homeStyles } from "@/utils/style.js"
import GoogleMap from "@/components/GoogleMap.jsx"

export default function Home(props) {
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
          <p class="tagline">
            本当に速いのウェブサイト
          </p>
        </div>
      </section>
      <Layout data={props}>
        <section class="max-w-screen-md mx-auto p-8 space-y-4 bg-white">
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
        <section class="max-w-screen-md mx-auto py-8 bg-white">
          <div class="px-8">
            <h2>Want to meet up?</h2>
          </div>
          <GoogleMap />
        </section>
      </Layout>
    </>
  )
}
