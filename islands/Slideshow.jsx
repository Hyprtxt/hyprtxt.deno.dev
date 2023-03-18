import StrapiMedia from "@/components/StrapiMedia.jsx"
import { useSignal } from "@preact/signals"
import { useEffect, useRef } from "preact/hooks"
import IconChevronRight from "$icons/chevron-right.tsx"
import IconChevronLeft from "$icons/chevron-left.tsx"
import { tw } from "twind"

const Slideshow = (props) => {
  const NAVIGATION_COLOR = `text-white`
  const CHEVRON_STYLE =
    `absolute z-10 w-10 h-10 ${NAVIGATION_COLOR} cursor-pointer`
  const SHOW_NAVIGATION = props.showNavigation === false ? false : true
  const SLIDE_INTERVAL = parseInt(props.interval) ? props.interval : 3500
  const currentSlide = useSignal(0)
  const automatic = useSignal(props.automatic ? true : false)
  const slideshow = useRef(null)
  const { media } = props

  const slideClasses = (idx = 0) =>
    tw`slide absolute top-0 left-0 transition-all ease-in-out duration-700 transform ${
      currentSlide.value === idx ? "translate-x-0" : "translate-x-full"
    }`

  const nextSlide = () => {
    const numberSlides = slideshow.current.querySelectorAll(".slide")
    if (numberSlides.length === currentSlide.value + 1) {
      currentSlide.value = 0
    } else {
      currentSlide.value++
    }
  }

  const previousSlide = () => {
    const numberSlides = slideshow.current.querySelectorAll(".slide")
    if (currentSlide.value === 0) {
      currentSlide.value = numberSlides.length - 1
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

  const goToSlide = (slide_index = 0) => {
    if (automatic.value) automatic.value = false
    currentSlide.value = slide_index
  }

  const DotsNavigation = () => {
    return (
      <div
        class={`slide_nav w-full ${NAVIGATION_COLOR} absolute bottom-0 flex justify-center cursor-pointer`}
      >
        {media.data.map((_item, idx) => {
          return (
            <div
              class="px-1"
              onClick={() => {
                goToSlide(idx)
              }}
            >
              {idx === currentSlide.value ? <>●</> : <>○</>}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div
        ref={slideshow}
        class="slideshow relative flex-1 flex-end p-0 h-full w-full overflow-hidden"
      >
        <IconChevronLeft
          class={`top-1/2 left-0 ${CHEVRON_STYLE}`}
          onClick={() => chevronClick(previousSlide)}
        />
        <IconChevronRight
          class={`top-1/2 right-0 ${CHEVRON_STYLE}`}
          onClick={() => chevronClick(nextSlide)}
        />
        {media.data.map((item, idx) => (
          <StrapiMedia
            data={item}
            index={idx}
            class={slideClasses(idx)}
          />
        ))}
        {SHOW_NAVIGATION &&
          <DotsNavigation />}
        <StrapiMedia data={media.data[0]} class="opacity-0" />
      </div>
    </>
  )
}

export default Slideshow
