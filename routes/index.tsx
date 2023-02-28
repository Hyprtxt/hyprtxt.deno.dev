import { Head } from "$fresh/runtime.ts"
// import Counter from "@/islands/Counter.tsx"
import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"
import Features from "@/components/Features.jsx"
import { tw } from "twind"
import { apply, css, theme } from "twind/css"

const globalStyles = css({
  ":global": {
    a: {
      color: theme("colors.blue.500"),
      "&:hover": apply`text-blue-700`,
    },
    body: {
      background:
        "url(https://hyprtxt.dev/images/nebula.jpg) no-repeat center center fixed",
      backgroundSize: "cover",
      backgroundColor: "#271f3f",
    },
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
      minHeight: "95vh",
      color: "white",
      textAlign: "center",
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
      <div class={tw`${globalStyles}`}></div>
      <section class="landing-page">
        <div class="mx-auto">
          <p class="my-8">Welcome</p>
          <div class="logo"></div>
          <p class="my-8">本当に速いのウェブサイト</p>
        </div>
      </section>
      <section class={tw`flex justify-center`}>
        <Header />
      </section>
      <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white">
        <h2 id="welcome" class="text(3xl gray-600) font-bold">
          <a href="#getting-started" class="hover:underline">Welcome</a>
        </h2>
        <p>
          Simple websites can still be very effective at getting your message
          across. At Hyprtxt we use Deno JavaScript to program websites.
        </p>
      </section>
      <section class="mx-auto max-w-screen-md">
        <Features />
      </section>
      <div class={tw`flex justify-center`}>
        <Footer />
      </div>
    </>
  )
}
