import { useRef } from "preact/hooks"

const StrapiMedia = (props) => {
  const { data, index } = props
  const dialogRef = useRef(null)

  const onDialogClick = (e) => {
    dialogRef.current.close()
    // if (e.target.tagName === "DIALOG") {}
  }

  if (!data) {
    return <></>
  }
  return (
    <>
      <img
        src={data.attributes.formats.thumbnail.url}
        alt={data.attributes.alternativeText}
        index={index}
        class={props.class}
        onClick={() => {
          return dialogRef.current.showModal()
        }}
      />
      <dialog ref={dialogRef} class="overflow-hidden" onClick={onDialogClick}>
        <img
          src={data.attributes.url}
        />
      </dialog>
    </>
  )
}

export default StrapiMedia
