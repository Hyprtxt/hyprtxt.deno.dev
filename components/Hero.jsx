// import IconChevronRight from "$icons/chevron-right.tsx"
import { asset } from "$fresh/runtime.ts"

export default function Hero(props) {
  console.log(props)
  const { data } = props
  const { title, description } = data

  return (
    <div
      class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
      style={`background-image:linear-gradient(rgba(11,7,13, 0.3),rgba(11,7,13, 0.6)), url(${
        asset("/deno_city.jpg")
      });`}
    >
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">{title}</h1>
        <p class="text-xl max-w-lg text-blue-100">
          {description}
        </p>
      </div>
    </div>
  )
}
