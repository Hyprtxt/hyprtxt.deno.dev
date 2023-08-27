import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import { CURRENT_ENV } from "@/utils/config.js"

export default function Page500(props) {
  const { error } = props
  let message = undefined
  if (error instanceof Error) {
    message = error.stack
  } else {
    message = String(error)
  }
  return (
    <>
      <Head>
        <title>Hyprtxt | Server Error</title>
      </Head>
      <Layout data={props}>
        <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white">
          <h2>
            500 Error
          </h2>
          {CURRENT_ENV === "development" ? <pre>{message}</pre> : <></>}
          <p>
            The server had an error, try again later.
          </p>
        </section>
      </Layout>
    </>
  )
}
