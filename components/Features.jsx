import IconChevronRight from "$icons/chevron-right.tsx"

export default function Features(props) {
  const theItems = props.items ? props.items : []

  return (
    <div class="flex flex-col md:flex-row gap-8 bg-white p-8">
      {theItems.map((item) => {
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
                <a class="block" href={item.link} target="_blank">
                  <p class="text-blue-500 cursor-pointer hover:underline inline-flex items-center group">
                    {item.linkText + " "}
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
