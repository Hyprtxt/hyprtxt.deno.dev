const StrapiMedia = (props) => {
  const { data, key } = props
  const sizes = ["thumbnail", "small", "medium", "large"]
  if (!data) {
    return <></>
  }
  if (props.class === undefined) props.class = ""
  const sources = sizes.reduce(
    (acc, current) => {
      const thing = data.attributes.formats[current]
      if (thing === undefined) {
        return acc
      }
      acc.push(`${thing.url} ${thing.width}w`)
      return acc
    },
    [],
  )
  return (
    <img
      src={data.attributes.formats.thumbnail.url}
      srcset={sources.join(" ,")}
      alt={data.attributes.alternativeText}
      key={key}
      class={props.class}
    />
  )
}

export default StrapiMedia
