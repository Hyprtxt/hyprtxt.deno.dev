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
          <h2 id="javascript" class="text(3xl gray-600) font-bold">
            <a href="#javascript" class="hover:underline">All The JavaScript</a>
          </h2>
          <p>
            There are many different places JavaScript runs when developing a
            modern website. This page lists important ones.
          </p>
          <h2>
            Client Side JavaScript
          </h2>
          <p>
            Code that runs in the browser to enable interactive Hypertext.
            JavaScript uses the Document Object Model or DOM to create logical
            tree of tags. Tags get clumped together into Components, the model
            that JSX imposes on all the HTML tags in the DOM.
          </p>
          <h2>
            Server Side JavaScript
          </h2>
          <p>
            Secret code that runs when someone makes a request. Server side
            JavaScript runs to output the "Client Side" code: HTML, CSS, and
            JavaScript that is sent to and loaded by client browsers.
          </p>
          <p>
            JSX is a special language extension for JavaScript that turns Markup
            used in the source code into JavaScript functions that render HTML
            tags. I use JSX to express all of my HTML elements. This gives me
            peace of mind because it means the computer is checking and making
            sure that I have closed and properly nested every signle tag. This
            helps us keep our HTML DOMs error free.
          </p>
          <h2>
            Testing JavaScript
          </h2>
          <p>
            We want to test our projects and Deno allows us to use JavaScript to
            write our test cases. There is a driver called Puppetteer that
            allows me to control a Chromium browser with JavaScript. The test
            runner has it's own context. One that launches the Server context so
            the test browser can download webpages.
          </p>
          <p>
            Puppeteer can be used to reach into the client context of an HTML
            Document during a test. This is super useful; We can use it to click
            on things and interact with the webpage like a client does, but in a
            predicable, repeatable way. Puppeteer can also take screenshots.
          </p>
          <h2>
            Isomorphic JavaScript
          </h2>
          <p>
            Code that can be run on the Server and/or Browser. Fresh implements
            an Island Hydration strategy that renders html sever side first, and
            allows us to write client-side code only when absolutely necessary.
          </p>
        </section>
      </Layout>
    </>
  )
}
