import IconAlarm from "$icons/alarm.tsx"
import IconAirBalloon from "$icons/air-balloon.tsx"
import IconArmchair from "$icons/armchair.tsx"
import IconChevronRight from "$icons/chevron-right.tsx"

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
        "Creative Solutions. A track record of getting things done, even when other developers say it can't be.",
    },
    {
      icon: IconArmchair,
      description:
        "Tons of Experience. We build businesses by integrating computer services together.",
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
