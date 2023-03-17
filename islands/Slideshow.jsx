import StrapiMedia from "@/components/StrapiMedia.jsx"

const Slideshow = (props) => {
  // console.log(props)
  const { media } = props
  return (
    <>
      <div class="slideshow relative flex-1 flex-end p-0 h-full w-full">
        {media.data.map((item, idx) => {
          if (idx === 0) {
            return (
              <>
                <StrapiMedia data={item} index={idx} class="slide opacity-0" />
                <StrapiMedia
                  data={item}
                  index={idx}
                  class="slide absolute top-0 left-0"
                />
              </>
            )
          }
          <StrapiMedia data={item} index={idx} class="slide absolute" />
        })}
      </div>
    </>
  )
}

export default Slideshow
