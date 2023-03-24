import { GOOGLE_MAPS_API_KEY } from "@/utils/config.js"

const PLACE_ID = {
  PV: "ChIJnRiiwg0YLYcR6EPMyHcPELQ",
  PVPL: "ChIJCyw0nwkkLYcR2l2-AOujbCw",
}

const GoogleMap = (props) => (
  <iframe
    class={`w-full h-80 bg-grey ${
      props.class !== undefined ? props.class : ""
    }`}
    style="border:0"
    loading="lazy"
    allowfullscreen
    src={`https://www.google.com/maps/embed/v1/place?q=place_id:${
      PLACE_ID["PVPL"]
    }&key=${GOOGLE_MAPS_API_KEY}`}
  >
  </iframe>
)

export default GoogleMap
