import StrapiMedia from "@/components/StrapiMedia.jsx"
import { useSignal } from "@preact/signals"
import { useEffect, useRef } from "preact/hooks"
import IconChevronRight from "$icons/chevron-right.tsx"
import IconChevronLeft from "$icons/chevron-left.tsx"
import { tw } from "twind"

const Slideshow = (props) => {
  const SLIDE_INTERVAL = parseInt(props.interval) ? props.interval : 1000
  const currentSlide = useSignal(0)
  const automatic = useSignal(props.automatic ? true : false)
  const slideshow = useRef(null)
  const { media } = props
  const slideClasses = (idx) =>
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
  const goToSlide = (slide_index) => {
    if (automatic.value) automatic.value = false
    currentSlide.value = slide_index
  }
  const chevronClick = (doCallback) => {
    if (automatic.value) automatic.value = false
    return doCallback()
  }
  useEffect(() => {
    setInterval(() => {
      if (automatic.value) nextSlide()
    }, SLIDE_INTERVAL)
  }, [currentSlide])

  return (
    <>
      <div
        ref={slideshow}
        class="slideshow relative flex-1 flex-end p-0 h-full w-full overflow-hidden "
      >
        <IconChevronLeft
          class="absolute top-1/2 left-0 z-10 w-10 h-10 text-white cursor-pointer"
          onClick={() => chevronClick(previousSlide)}
        />
        <IconChevronRight
          class="absolute top-1/2 right-0 z-10 w-10 h-10 text-white cursor-pointer"
          onClick={() => chevronClick(nextSlide)}
        />
        {media.data.map((item, idx) => {
          if (idx === 0) {
            return (
              <>
                <StrapiMedia data={item} index={idx} class="opacity-0" />
                <StrapiMedia
                  data={item}
                  index={idx}
                  class={slideClasses(idx)}
                />
              </>
            )
          }
          return (
            <StrapiMedia
              data={item}
              index={idx}
              class={slideClasses(idx)}
            />
          )
        })}
        <div class="slide_nav w-full text-white absolute bottom-0 flex justify-center cursor-pointer">
          {media.data.map((_item, idx) => {
            if (idx === currentSlide.value) {
              return (
                <div
                  class="px-1"
                  onClick={() => {
                    goToSlide(idx)
                  }}
                >
                  ●
                </div>
              )
            } else {
              return (
                <div
                  class="px-1"
                  onClick={() => {
                    goToSlide(idx)
                  }}
                >
                  ○
                </div>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}

export default Slideshow
