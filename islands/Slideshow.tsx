import StrapiMedia from "@/components/StrapiMedia.jsx"
import { useSignal } from "@preact/signals"
import { useEffect } from "preact/hooks"
import IconCircleChevronsRight from "$icons/circle-chevrons-right.tsx"
import IconCircleChevronsLeft from "$icons/circle-chevrons-left.tsx"
import { tw } from "twind"

type SlideshowProps = {
  showNavigation?: boolean
  interval?: number
  currentSlide?: number
  automatic?: boolean
  class?: string
  media: {
    data: []
  }
}

const Slideshow = (props: SlideshowProps) => {
  const NAVIGATION_COLOR = `hover:text-grey-300 text-white`
  const CHEVRON_STYLE =
    `absolute z-10 w-10 h-10 ${NAVIGATION_COLOR} cursor-pointer`
  const SHOW_NAVIGATION = props.showNavigation === false ? false : true
  const SLIDE_INTERVAL = props.interval ? props.interval : 3500
  const { media } = props
  const SLIDES = media.data
  if (props.class === undefined) props.class = ""

  const currentSlide = useSignal(
    props.currentSlide ? props.currentSlide : 0,
  )
  const automatic = useSignal(props.automatic ? true : false)

  const slideClasses = (idx = 0) =>
    tw`slide absolute top-0 left-0 transition-all ease-in-out duration-700 transform ${
      currentSlide.value === idx ? "translate-x-0" : "translate-x-full"
    }`

  const nextSlide = () => {
    if (SLIDES.length === currentSlide.value + 1) {
      currentSlide.value = 0
    } else {
      currentSlide.value++
    }
  }

  const previousSlide = () => {
    if (currentSlide.value === 0) {
      currentSlide.value = SLIDES.length - 1
    } else {
      currentSlide.value--
    }
  }

  const chevronClick = (doCallback = () => {}) => {
    if (automatic.value) automatic.value = false
    return doCallback()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (automatic.value) nextSlide()
    }, SLIDE_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  const ArrowKeyNavigation = () => {
    const keydownHandler = (event: KeyboardEvent) => {
      if (automatic.value) automatic.value = false
      switch (event.code) {
        case "ArrowLeft":
          event.preventDefault()
          previousSlide()
          break
        case "ArrowRight":
          event.preventDefault()
          nextSlide()
          break
        default:
          break
      }
    }
    document.addEventListener("keydown", keydownHandler)
    return () => document.removeEventListener("keydown", keydownHandler)
  }
  useEffect(ArrowKeyNavigation, [])

  const goToSlide = (slide_index = 0) => {
    if (automatic.value) automatic.value = false
    currentSlide.value = slide_index
  }

  const DotsNavigation = () => (
    <div
      class={`slide_nav w-full absolute bottom-0 flex justify-center cursor-pointer`}
    >
      {SLIDES.map((_item, idx) => {
        return (
          <div
            class={`px-1 ${NAVIGATION_COLOR}`}
            onClick={() => {
              goToSlide(idx)
            }}
            key={idx}
          >
            {idx === currentSlide.value ? <>●</> : <>○</>}
          </div>
        )
      })}
    </div>
  )

  return (
    <div
      class={`slideshow relative flex-1 flex-end p-0 overflow-hidden ${props.class}`}
    >
      <IconCircleChevronsLeft
        class={`left-0 ${CHEVRON_STYLE}`}
        style="top: calc(50% - 20px)"
        onClick={() => chevronClick(previousSlide)}
      />
      <IconCircleChevronsRight
        class={`right-0 ${CHEVRON_STYLE}`}
        style="top: calc(50% - 20px)"
        onClick={() => chevronClick(nextSlide)}
      />
      {SLIDES.map((item, idx) => (
        <StrapiMedia
          data={item}
          key={idx}
          class={slideClasses(idx)}
        />
      ))}
      {SHOW_NAVIGATION &&
        <DotsNavigation />}
      <StrapiMedia
        data={SLIDES[0]}
        class="opacity-0 pointer-events-none"
      />
    </div>
  )
}

export default Slideshow
