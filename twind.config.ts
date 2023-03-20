import { Options } from "$fresh/plugins/twind.ts"
import * as colors from "twind/colors"

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      transitionDuration: {
        "0": "0ms",
        "1600": "1600ms",
        "2000": "2000ms",
      },
    },
    colors: {
      purple: "#271f3f",
      green: "#59a188",
      // red: "rgb(210,81,153)",
      // orange: "rgb(249,108,98)",
      // yellow: "rgb(254,245,121)",
      blue: "rgb(0,190,211)",
      indigo: "rgb(0,153,212)",
      violet: "rgb(108, 73, 136)",
      dark: "rgb(15,15,15)",
      backdrop: "rgba(15,15,15,0.6)",
      white: colors.white,
      black: colors.black,
    },
  },
} as Options
