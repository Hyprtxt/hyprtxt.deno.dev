// Load dotenv over Deno.env
import { load } from "$std/dotenv/mod.ts"
import { cleanEnv, port, str, url } from "envalid"

// Loads stuff for deno.dev
const RAW_ENV = Object.assign(Deno.env.toObject(), await load())

const ENV = cleanEnv(RAW_ENV, {
  BASE_URL: url(),
  DENO_ENV: str({ choices: ["development", "testing", "production"] }),
  API_URL: url(),
  TOKEN: str(),
  GOOGLE_MAPS_API_KEY: str(),
  PORT: port(),
})

export const {
  BASE_URL,
  DENO_ENV,
  API_URL,
  TOKEN,
  GOOGLE_MAPS_API_KEY,
  PORT,
} = ENV

export default ENV
