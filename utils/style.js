import { asset } from "$fresh/runtime.ts"
import { animation, apply, css, keyframes, theme } from "twind/css"

// ${animation("300ms ease-in-out 1", fadeIn)}

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
      "ul li": apply`list-disc`,
      "ol li": apply`list-decimal`,
    },
    "div > p": apply`mb-3`,
    body: {
      "&::before": {
        "&": apply`d-block fixed w-full h-full -z-20 left-0 top-0`,
        content: `""`,
        background: `url(${asset("/nebula.jpg")}) no-repeat center center`,
        backgroundSize: "cover",
      },
      backgroundColor: theme("colors.purple"),
    },
    ".header-wrapper": apply`mt-5`,
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
    ".landing-page":
      apply`fixed top-0 bg-transparent w-full text-white text-center min-h-screen -z-10`,
    "section.header-wrapper": {
      marginTop: "94vh",
    },
  },
})
