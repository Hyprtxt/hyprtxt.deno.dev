import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"
import { tw } from "twind"
import { asset } from "$fresh/runtime.ts"
import { apply, css, theme } from "twind/css"
import { DENO_ENV } from "@/utils/config.js"

const globalStyles = css({
  ":global": {
    a: {
      color: theme("colors.indigo"),
      "&:visited": apply`text-violet`,
      "&:hover": apply`text-blue underline`,
      "&:active": apply`text-green`,
    },
    "h1, h2, h3": {
      "@apply": `mb-3`,
      a: {
        "@apply": `text-dark`,
        "&:visited": apply`text-dark`,
      },
    },
    h1: {
      "@apply": `text-4xl`,
    },
    h2: {
      "@apply": `text-2xl`,
    },
    h3: {
      "@apply": `text-xl`,
    },
    "ul.list-disc li": {
      marginLeft: "1rem",
    },
    "p": {
      "@apply": `mb-3`,
    },
    body: {
      "&::before": {
        content: `""`,
        display: "block",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: -10,
        width: "100%",
        height: "100%",
        background: `url(${asset("/nebula.jpg")}) no-repeat center center`,
        backgroundSize: "cover",
      },
      backgroundColor: theme("colors.purple"),
    },
    ".header-wrapper": {
      marginTop: "1rem",
    },
  },
})

const Layout = ({ children, data = {} }) => (
  <>
    <div class={tw`${globalStyles}`}></div>
    <section class={tw`flex justify-center header-wrapper`}>
      <Header />
    </section>
    {children}
    <section class={tw`flex justify-center`}>
      <Footer />
    </section>
    {DENO_ENV === "development"
      ? (
        <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white">
          <pre>{JSON.stringify(data, null, 2 )}</pre>
        </section>
      )
      : <></>}
  </>
)

export default Layout
