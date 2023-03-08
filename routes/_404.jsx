import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Hyprtxt | 404 Error Page</title>
      </Head>
      <Layout>
        <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white">
          <h2>
            404 Error
          </h2>
          <p>
            We couldn't find the thing you asked for.
          </p>
        </section>
      </Layout>
    </>
  )
}
