import { asset } from "$fresh/runtime.ts"
import { animation, apply, css, keyframes, theme } from "twind/css"

export const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
})
export const fadeInLast = keyframes({
  "0%": {
    opacity: 0,
  },
  "70%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
})

export const globalStyles = css({
  ":global": {
    a: {
      color: theme("colors.indigo"),
      "&:visited": apply`text-violet`,
      "&:hover": apply`text-blue underline`,
      "&:active": apply`text-green`,
    },
    "h1, h2, h3": {
      "&": apply`mb-3`,
      a: {
        "&": apply`text-dark`,
        "&:visited": apply`text-dark`,
      },
    },
    h1: apply`text-4xl`,
    h2: apply`text-2xl`,
    h3: apply`text-xl`,
    ".markdown": {
      "a": apply`underline`,
      "ul, ol": {
        "li": {
          marginLeft: "1rem",
        },
        marginBottom: "1rem",
      },
      "ul li": {
        listStyle: "disc",
      },
      "ol li": {
        listStyle: "number",
      },
    },
    "p": apply`mb-3 ${animation("300ms ease-in-out 1", fadeIn)}`,
    body: {
      "&::before": {
        content: `""`,
        display: "block",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: -10,
        width: "100%",
        height: "100%",
        background: `url(${asset("/nebula.jpg")}) no-repeat center center`,
        backgroundSize: "cover",
      },
      backgroundColor: theme("colors.purple"),
    },
    ".header-wrapper": {
      marginTop: "1rem",
    },
  },
})

export const homeStyles = css({
  ":global": {
    ".logo": {
      "&": apply(animation("600ms ease-in 1", fadeIn)),
      background: `url(${asset("/hyprtxt_stack.png")}) no-repeat center center`,
      width: "300px",
      height: "304px",
      margin: "0 auto",
      backgroundSize: "cover",
    },
    ".tagline": apply`my-8 ${animation("1200ms ease-in 1", fadeInLast)}`,
    ".landing-page": {
      background: "transparent",
      width: "100%",
      minHeight: "100vh",
      color: "white",
      textAlign: "center",
      position: "fixed",
      zIndex: -1,
      top: 0,
    },
    "section.header-wrapper": {
      marginTop: "94vh",
    },
  },
})
