import IconAlarm from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/alarm.tsx"
import IconAirBalloon from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/air-balloon.tsx"
import IconArmchair from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/armchair.tsx"
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx"

export default function Features() {
  const featureItems = [
    {
      icon: IconAlarm,
      description:
        "Fast websites. We keep the Hyper in our HyperText Markup. Lean effective sites get to the message quickly.",
      // link: "#",
    },
    {
      icon: IconAirBalloon,
      description:
        "Creative Solutions. I have a track record of getting things done, even when other developers say it can't be done.",
    },
    {
      icon: IconArmchair,
      description:
        "A Decade of Experience. I build businesses by integrating API services into a huge variety of things.",
      // link: "#",
    },
  ]

  return (
    <div class="flex flex-col md:flex-row gap-8 bg-white p-8">
      {featureItems.map((item) => {
        return (
          <div class="flex-1 space-y-2">
            <div class="bg-purple inline-block p-3 rounded-xl text-green">
              <item.icon class="w-10 h-10" />
            </div>
            <p class="text-dark">
              {item.description}
            </p>
            {item.link &&
              (
                <a class="block" href={item.link}>
                  <p class="text-blue-500 cursor-pointer hover:underline inline-flex items-center group">
                    Read More{" "}
                    <IconChevronRight class="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />
                  </p>
                </a>
              )}
          </div>
        )
      })}
    </div>
  )
}
