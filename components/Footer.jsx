import HyprtxtIcon from "@/components/HyprtxtIcon.jsx"
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx"

export default function Footer({ children }) {
  const menus = [
    {
      title: "Pages",
      children: [
        { name: "Home", href: "/" },
        { name: "Showcase", href: "/showcase" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Facebook", href: "https://www.facebook.com/hyprtxt" },
        // { name: "Discord", href: "#" },
      ],
    },
  ]

  return (
    <div class="bg-white flex flex-col md:flex-row w-full max-w-screen-md gap-8 md:gap-16 px-8 py-8 text-sm mb-5">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <HyprtxtIcon />
          <div class="font-bold text-2xl">
            Hyprtxt
          </div>
        </div>
        <div class="text-gray-500">
          Webmaster for Hire
        </div>
        <div class="text-gray-500">
          <a href="tel:+12147993897">+1 214 799-3897</a>
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
        <div class="text-xs">
          Copyright © Hyprtxt<br />
          Coded in Arizona.
        </div>
        <a
          href="https://github.com/hyprtxt/hyprtxt.deno.dev"
          class="inline-block hover:text-black"
        >
          <BrandGithub />
        </a>
      </div>
    </div>
  )
}
