import HyprtxtIcon from "@/components/HyprtxtIcon.jsx"
import BrandGithub from "$icons/brand-github.tsx"

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
      ],
    },
  ]

  return (
    <div class="bg-white flex flex-col md:flex-row w-full max-w-screen-md gap-8 md:gap-16 px-8 py-8 text-sm mb-5">
      <div class="flex-1">
        <div
          class="flex items-center gap-1"
          vocab="https://schema.org/"
          typeof="Organization"
        >
          <span property="logo">
            <HyprtxtIcon clazz="h-5 w-5" />
          </span>
          <div
            class="font-bold text-2xl"
            property="name"
          >
            Hyprtxt
          </div>
        </div>
        <div>
          Webmaster for Hire
        </div>
        <div>
          <a href="mailto:taylor@hyprtxt.dev">taylor@hyprtxt.dev</a>
        </div>
        <div>
          <a href="tel:+12147993897">+1 214 799-3897</a>{" "}
          (<a href="sms:+12147993897">sms</a>)
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="space-y-2">
        <div class="text-xs">
          Copyright © Hyprtxt<br />
          Coded in Arizona.
        </div>
        <a
          href="https://github.com/hyprtxt/hyprtxt.deno.dev"
          class="inline-block hover:text-black"
          aria-label="Github Icon"
        >
          <BrandGithub />
        </a>
      </div>
      {children}
    </div>
  )
}
