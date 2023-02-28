import { Head } from "$fresh/runtime.ts"
import Counter from "@/islands/Counter.tsx"
import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"
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
      height: "95vh",
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
      <div class="landing-page">
        <div class="mx-auto max-w-screen-lg">
          <p class="my-8">Welcome</p>
          <div class="logo"></div>
          <p class="my-8">本当に速いのウェブサイト</p>
        </div>
      </div>
      <div class={tw`flex justify-center`}>
        <Header />
      </div>
      <div class="p-4 mx-auto max-w-screen-lg bg-white">
        <img
          src="/logo.png"
          class="w-32 h-32"
          alt="the hyprtxt logo: </> in a circle"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh. <a href="/thigns">Link</a>
        </p>
        <Counter start={3} />
      </div>
      <div class={tw`flex justify-center`}>
        <Footer />
      </div>
    </>
  )
}
