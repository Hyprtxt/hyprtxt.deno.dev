import StrapiMedia from "@/components/StrapiMedia.jsx"
import { useSignal } from "@preact/signals"
import { useRef } from "preact/hooks"
import IconChevronRight from "$icons/chevron-right.tsx"
import IconChevronLeft from "$icons/chevron-left.tsx"
import IconX from "$icons/x.tsx"
import { tw } from "twind"
import { css } from "twind/css"

const backdrop = css({
  "&::backdrop": {
    background: "rgba(0, 0, 0, 0.5)",
  },
})

const ThumnailGallery = (props) => {
  const NAVIGATION_COLOR = `text-white`
  const { media } = props
  const dialogRef = useRef(null)
  const doTransition = useSignal(true)
  const currentSlide = useSignal(
    parseInt(props.currentSlide) ? props.currentSlide : 0,
  )

  const goToSlide = (slide_index = 0) => {
    doTransition.value = false
    currentSlide.value = slide_index
    setTimeout(() => {
      doTransition.value = true
    }, 100)
  }

  const onDialogClick = (e) => {
    if (e.target.tagName === "DIALOG") {
      dialogRef.current.close()
    }
  }

  const Slideshow = (props) => {
    const CHEVRON_STYLE =
      `absolute z-10 w-10 h-10 ${NAVIGATION_COLOR} cursor-pointer`
    const SHOW_NAVIGATION = props.showNavigation === false ? false : true

    const slideshow = useRef(null)
    const { media } = props

    const slideClasses = (idx = 0) =>
      tw`slide absolute top-0 left-0 ease-in-out ${
        doTransition.value ? "transition-all duration-1000" : ""
      } transform ${currentSlide.value === idx ? "opacity-1" : "opacity-0"}`

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
          class={`slideshow relative flex-1 flex-end p-0 overflow-hidden ${
            props.class !== undefined ? props.class : ""
          }`}
        >
          <IconChevronLeft
            class={`top-1/2 left-0 ${CHEVRON_STYLE}`}
            onClick={() => previousSlide()}
          />
          <IconChevronRight
            class={`top-1/2 right-0 ${CHEVRON_STYLE}`}
            onClick={() => nextSlide()}
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
          <StrapiMedia
            data={media.data[0]}
            class="opacity-0 pointer-events-none max-h-[84vh]"
          />
        </div>
      </>
    )
  }

  const Image = ({ data, index }) => (
    <img
      src={data.attributes.formats.thumbnail.url}
      alt={data.attributes.alternativeText}
      index={index}
      class={`cursor-pointer p-1 max-h-[90vh] ${
        props.class !== undefined ? props.class : ""
      }`}
      onClick={() => {
        goToSlide(index)
        return dialogRef.current.showModal()
      }}
    />
  )

  return (
    <div class="flex flex-wrap">
      {media.data.map((item, idx) => {
        return <Image data={item} index={idx} />
      })}
      <dialog
        ref={dialogRef}
        class={tw`max-h-[90vh] max-w-[90vw] overflow-visible ${backdrop}`}
        onClick={onDialogClick}
      >
        <IconX
          class={`cursor-pointer absolute -top-10 right-0 w-10 h-10 ${NAVIGATION_COLOR}`}
          onClick={() => dialogRef.current.close()}
        />
        <Slideshow media={media} />
      </dialog>
    </div>
  )
}

export default ThumnailGallery
