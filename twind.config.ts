import { Options } from "$fresh/plugins/twind.ts"
import * as colors from "twind/colors"

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      purple: "#271f3f",
      green: "#59a188",
      // red: "rgb(210,81,153)",
      // orange: "rgb(249,108,98)",
      // yellow: "rgb(254,245,121)",
      // green: "rgb(160,235,177)",
      blue: "rgb(0,190,211)",
      indigo: "rgb(0,153,212)",
      violet: "rgb(108, 73, 136)",
      // violet: "rgb(75,52,96)",
      // violet: "rgb(150,117,180)",
      dark: "rgb(15,15,15)",
      white: colors.white,
      black: colors.black,
    },
  },
} as Options
