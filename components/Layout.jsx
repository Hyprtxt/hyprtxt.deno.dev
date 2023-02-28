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
      backgroundColor: "#271f3f",
    },
    ".header-wrapper": {
      marginTop: "1rem",
    },
  },
})

const Layout = ({ children, home = false }) => (
  <>
    <div class={tw`${globalStyles}`}></div>
    <section class={tw`flex justify-center header-wrapper`}>
      <Header />
    </section>
    {children}
    <section class={tw`flex justify-center`}>
      <Footer />
    </section>
  </>
)

export default Layout
