import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import IconBrandGithub from "$icons/brand-github.tsx"

export default function Showcase(props) {
  return (
    <>
      <Head>
        <title>Hyprtxt | Good Websites</title>
        <meta name="author" content="Taylor Young" />
        <meta
          name="description"
          content="Hyprtxt is Taylor's Brand. The showcase page links to examples and sources of my work."
        />
      </Head>
      <Layout data={props}>
        <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white markdown">
          <h1>
            Showcase
          </h1>
          <p>
            Some websites I have created or contributed to. Links open in new
            tabs.
          </p>
          <h3>Open Source Websites</h3>
          <ul class="list-disc">
            <li>
              <a target="_blank" href="https://linceo.club/">Linceo Club</a>
              {" "}
              <a target="_blank" href="https://github.com/Hyprtxt/linceo.club">
                <IconBrandGithub class="w-6 h-6 inline" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://videopoker.academy/">
                Video Poker Academy
              </a>{" "}
              <a
                target="_blank"
                href="https://github.com/Hyprtxt/videopoker.academy"
              >
                <IconBrandGithub class="w-6 h-6 inline" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://fresh-strapi.deno.dev/">
                Fresh Strapi
              </a>{" "}
              <a
                target="_blank"
                href="https://github.com/Hyprtxt/fresh-strapi.deno.dev"
              >
                <IconBrandGithub class="w-6 h-6 inline" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://sushij.express/">
                Sushi J Express
              </a>{" "}
              <a
                target="_blank"
                href="https://github.com/Hyprtxt/sushij.express"
              >
                <IconBrandGithub class="w-6 h-6 inline" />
              </a>
            </li>
          </ul>
          <h3>For Hire</h3>
          <ul class="list-disc">
            <li>
              <a target="_blank" href="https://redstonefoods.com/">
                Redstone Foods
              </a>
            </li>
            <li>
              <a target="_blank" href="https://cactusstone.com/">
                Cactus Stone
              </a>
            </li>
            <li>
              <a target="_blank" href="https://andbounds.com/">
                ANDBOUNDS Inc.
              </a>
            </li>
          </ul>
          <h3>Open Source Projects</h3>
          <ul class="list-disc">
            <li>
              <a
                target="_blank"
                href="https://fresh.deno.dev/components#Carousel"
              >
                My Fresh Component (Carousel)
              </a>
              <a
                target="_blank"
                href="https://github.com/denoland/fresh/blob/main/www/components/gallery/Carousel.tsx"
              >
                <IconBrandGithub class="w-6 h-6 inline" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://deno.land/x/fresh_marionette">
                Fresh Marionette
              </a>{" "}
              <a
                target="_blank"
                href="https://github.com/Hyprtxt/fresh_marionette"
              >
                <IconBrandGithub class="w-6 h-6 inline" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://classic.videopoker.academy/">
                JavaScript Video Poker
              </a>{" "}
              <a
                target="_blank"
                href="https://github.com/digitaldesigndj/javascript-video-poker"
              >
                <IconBrandGithub class="w-6 h-6 inline" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://wordpress.org/themes/bootstrap-four/"
              >
                Bootstrap Four the WordPress Theme
              </a>{" "}
              <a
                target="_blank"
                href="https://github.com/Hyprtxt/bootstrapfour"
              >
                <IconBrandGithub class="w-6 h-6 inline" />
              </a>
            </li>
          </ul>
          <h3>Something</h3>
          <ul class="list-disc">
            <li>
              <a target="_blank" href="https://taylor.wpengine.com/">
                An old WordPress site
              </a>
            </li>
            <li>
              <a target="_blank" href="https://merch.hyprtxt.dev/">
                Custom Shopify
              </a>{" "}
              <a
                target="_blank"
                href="https://github.com/Hyprtxt/merch.hyprtxt.dev"
              >
                <IconBrandGithub class="w-6 h-6 inline" />
              </a>
            </li>
          </ul>
        </section>
      </Layout>
    </>
  )
}
