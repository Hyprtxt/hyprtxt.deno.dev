import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"
import { tw } from "twind"
import { CURRENT_ENV, GTM_ID } from "@/utils/config.js"
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
        "name": "Hyprtxt",
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

const GoogleAnalytics = ({ GTM_ID }) => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
    >
    </script>
    <script>
      {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GTM_ID}');`}
    </script>
  </>
)

const Layout = ({ children, data = {} }) => (
  <>
    <Head>
      <SchemaORG />
      {CURRENT_ENV === "production"
        ? <GoogleAnalytics GTM_ID={GTM_ID} />
        : <></>}
      <meta name="view-transition" content="same-origin" />
    </Head>
    <div class="whole-page" style="view-transition-name: page">
      <section class={tw`${globalStyles} flex justify-center header-wrapper`}>
        <Header active={data.route} />
      </section>
      {children}
      <section class={`flex justify-center`}>
        <Footer hits={data?.state?.hits} />
      </section>
    </div>
    {CURRENT_ENV === "development"
      ? (
        <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white">
          <pre>{JSON.stringify(data, null, 2 )}</pre>
        </section>
      )
      : <></>}
  </>
)

export default Layout
