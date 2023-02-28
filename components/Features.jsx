import IconAlarm from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/alarm.tsx"
import IconAirBalloon from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/air-balloon.tsx"
import IconArmchair from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/armchair.tsx"
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx"

export default function Features() {
  const featureItems = [
    {
      icon: IconAlarm,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam",
      // link: "#",
    },
    {
      icon: IconAirBalloon,
      description: "Things",
    },
    {
      icon: IconArmchair,
      description: "Eget aliquam nisl nisl sit amet lorem.",
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
