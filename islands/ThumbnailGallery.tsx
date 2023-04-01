import StrapiMedia from "@/components/StrapiMedia.jsx"
import { useSignal } from "@preact/signals"
import { useEffect, useRef } from "preact/hooks"
import IconCircleChevronsRight from "$icons/circle-chevrons-right.tsx"
import IconCircleChevronsLeft from "$icons/circle-chevrons-left.tsx"
import IconX from "$icons/x.tsx"
import { tw } from "twind"
import { css, theme } from "twind/css"

const backdrop = css({
  "&::backdrop": {
    background: theme("colors.backdrop"),
  },
})

type ThumnailGalleryProps = {
  currentSlide?: number
  media: {
    data: []
  }
}

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

const ThumnailGallery = (props: ThumnailGalleryProps) => {
  const NAVIGATION_COLOR = `text-white`
  const { media } = props
  const SLIDES: { id: number; attributes: any }[] = media.data
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const doTransition = useSignal(true)
  const currentSlide = useSignal(
    props.currentSlide ? props.currentSlide : 0,
  )

  const goToSlide = (slide_index = 0) => {
    doTransition.value = false
    currentSlide.value = slide_index
    setTimeout(() => {
      doTransition.value = true
    }, 100)
  }

  const onDialogClick = (e: MouseEvent) => {
    if ((e.target as HTMLDialogElement).tagName === "DIALOG") {
      dialogRef.current!.close()
    }
  }

  const Slideshow = (props: SlideshowProps) => {
    const SHOW_NAVIGATION = props.showNavigation === false ? false : true

    // const { media } = props

    console.log(SLIDES, "SDKFJ")
    const slideClasses = (idx = 0) =>
      tw`slide absolute top-0 left-0 ease-in-out ${
        doTransition.value ? "transition-all duration-1000" : ""
      } transform ${currentSlide.value === idx ? "opacity-1" : "opacity-0"}`

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

    const ArrowKeyNavigation = () => {
      const keydownHandler = (event: KeyboardEvent) => {
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

    const DotsNavigation = () => (
      <div
        class={`slide_nav w-full ${NAVIGATION_COLOR} absolute bottom-0 flex justify-center cursor-pointer`}
      >
        {SLIDES.map((_item, idx) => {
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

    const CHEVRON_STYLE =
      `absolute z-10 w-10 h-10 ${NAVIGATION_COLOR} cursor-pointer`
    return (
      <div
        class={`slideshow relative flex-1 flex-end p-0 overflow-hidden ${
          props.class !== undefined ? props.class : ""
        }`}
      >
        <IconCircleChevronsLeft
          class={`left-0 ${CHEVRON_STYLE}`}
          style="top: calc(50% - 20px)"
          onClick={() => previousSlide()}
        />
        <IconCircleChevronsRight
          class={`right-0 ${CHEVRON_STYLE}`}
          style="top: calc(50% - 20px)"
          onClick={() => nextSlide()}
        />
        {SLIDES.map((item, idx) => (
          <StrapiMedia
            data={item}
            index={idx}
            class={slideClasses(idx)}
          />
        ))}
        {SHOW_NAVIGATION &&
          <DotsNavigation />}
        {SLIDES &&
          (
            <StrapiMedia
              data={SLIDES[0]}
              class="opacity-0 pointer-events-none max-h-[84vh]"
            />
          )}
      </div>
    )
  }

  const Image = (props: ImageProps) => {
    const { data, index } = props
    return (
      <img
        src={data.attributes.formats.thumbnail.url}
        alt={data.attributes.alternativeText}
        key={index}
        class={`cursor-pointer p-1 max-h-[90vh] ${
          props.class !== undefined ? props.class : ""
        }`}
        onClick={() => {
          goToSlide(index)
          return dialogRef.current!.showModal()
        }}
      />
    )
  }

  return (
    <div class="flex flex-wrap">
      {SLIDES.map((item, idx) => {
        return <Image data={item} index={idx} />
      })}
      <dialog
        ref={dialogRef}
        class={tw`max-h-[90vh] max-w-[90vw] overflow-visible ${backdrop}`}
        onClick={onDialogClick}
      >
        <IconX
          class={`cursor-pointer absolute -top-10 right-0 w-10 h-10 ${NAVIGATION_COLOR}`}
          onClick={() => dialogRef.current!.close()}
        />
        <Slideshow media={media} />
      </dialog>
    </div>
  )
}

type ImageProps = {
  data: {
    attributes: any
  }
  index?: number
  class?: string
}

export default ThumnailGallery
