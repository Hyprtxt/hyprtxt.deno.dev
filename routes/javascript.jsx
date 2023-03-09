import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
// import Features from "@/components/Features.jsx"
// import { tw } from "twind"
// import { apply, css, theme } from "twind/css"

export default function JSPage(props) {
  return (
    <>
      <Head>
        <title>Hyprtxt | Good Websites</title>
      </Head>
      <Layout data={props}>
        <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white">
          <h2 id="welcome" class="text(3xl gray-600) font-bold">
            <a href="#welcome" class="hover:underline">Welcome</a>
          </h2>
          <p>
            Welcome here's some websites I have created.
          </p>
          <h2>
            Client Side JavaScript
          </h2>
          <p>Code that runs in the browser to enable interactive Hypertext</p>
          <h2>
            Server Side JavaScript
          </h2>
          <p>
            Secret code that runs when someone makes a request. Server side
            JavaScript runs to output the "Client Side" code: HTML, CSS, and
            JavaScript that is sent to and loaded by client browsers.
          </p>
          <h2>
            Testing JavaScript
          </h2>
          <p>
            We want to test our projects and Deno allows us to use JavaScript to
            write our test cases. There is a driver called Puppetteer that
            allows me to control a Chromium browser with JavaScript.
          </p>
          <h2>
            Isomorphic JavaScript
          </h2>
          <p>
            Code that can be run on the Server and/or Browser. Fresh implements
            an Island Hydration strategy that moves work client-side only when
            absolutely necessary.
          </p>
        </section>
      </Layout>
    </>
  )
}
