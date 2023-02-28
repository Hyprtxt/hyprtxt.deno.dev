import { Head } from "$fresh/runtime.ts"
import Counter from "@/islands/Counter.tsx"
import Header from "@/components/Header.jsx"
import { tw } from "twind"

export default function Home() {
  return (
    <>
      <Head>
        <title>Hyprtxt | Good Websites</title>
      </Head>
      <div class={tw`flex justify-center`}>
        <Header />
      </div>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  )
}
