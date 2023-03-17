import StrapiMedia from "@/components/StrapiMedia.jsx"
import { useSignal } from "@preact/signals"
import { useRef } from "preact/hooks"
import IconChevronRight from "$icons/chevron-right.tsx"
import IconChevronLeft from "$icons/chevron-left.tsx"
import { tw } from "twind"

const Slideshow = (props) => {
  const currentSlide = useSignal(0)
  const slideshow = useRef(null)
  const { media } = props
  const transitionClasses =
    tw`transition-all ease-in-out duration-700 transform`
  const slideClasses = (idx) =>
    `slide absolute top-0 left-0 ${transitionClasses} ${
      currentSlide.value === idx ? "translate-x-0" : "translate-x-full"
    }`
  const clickLeft = (e) => {
    e.preventDefault()
    const numberSlides = slideshow.current.querySelectorAll(".slide")
    if (currentSlide.value === 0) {
      currentSlide.value = numberSlides.length - 1
    } else {
      currentSlide.value--
    }
    // console.log(currentSlide.value)
  }
  const clickRight = (e) => {
    e.preventDefault()
    const numberSlides = slideshow.current.querySelectorAll(".slide")
    if (numberSlides.length === currentSlide.value + 1) {
      currentSlide.value = 0
    } else {
      currentSlide.value++
    }
    // console.log(currentSlide.value)
  }
  return (
    <>
      <div
        ref={slideshow}
        class="slideshow relative flex-1 flex-end p-0 h-full w-full overflow-hidden "
      >
        <IconChevronLeft
          class="absolute top-1/2 left-0 z-10 w-10 h-10 text-white cursor-pointer"
          onClick={clickLeft}
        />
        <IconChevronRight
          class="absolute top-1/2 right-0 z-10 w-10 h-10 text-white cursor-pointer"
          onClick={clickRight}
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
      </div>
    </>
  )
}

export default Slideshow
