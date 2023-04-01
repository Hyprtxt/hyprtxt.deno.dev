import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"
import { tw } from "twind"
import { DENO_ENV } from "@/utils/config.js"
import { globalStyles } from "@/utils/style.js"
import { Head } from "$fresh/runtime.ts"

const SchemaORG = () => {
  const Schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://hyprtxt.dev/#organization",
        "url": "https://hyprtxt.dev/",
        "name": "Hyprtxt",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://hyprtxt.dev/#logo",
          "url": "https://hyprtxt.dev/logo.png",
        },
        "sameAs": [
          "https://github.com/Hyprtxt",
          "https://www.facebook.com/Hyprtxt/",
          "https://twitter.com/Hyprtxt",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://hyprtxt.dev/#website",
        "url": "https://hyprtxt.dev/",
        "name": "Hyprtxt.dev",
        "publisher": {
          "@id": "https://hyprtxt.dev/#organization",
        },
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema, null, 2) }}
    >
    </script>
  )
}

const Layout = ({ children, data = {} }) => (
  <>
    <Head>
      <SchemaORG />
    </Head>
    <div class={tw`${globalStyles}`}></div>
    <section class={tw`flex justify-center header-wrapper`}>
      <Header active={data.route} />
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
