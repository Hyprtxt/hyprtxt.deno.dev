export default function Header({ active }) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Components", href: "/components" },
    { name: "Docs", href: "/docs" },
  ]

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <HyprtxtIcon />
        <div class="text-2xl  ml-1 font-bold">
          Hyprtxt
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const HyprtxtIcon = () => (
  <svg
    class="h-5 w-5 text-gray-500"
    width="240"
    height="240"
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="main_group"></g>
    <circle
      stroke="#000000"
      id="circle1"
      stroke-width="0px"
      cy="120px"
      fill="#271f3f"
      r="120px"
      cx="120px"
      transform=""
      visibility="visible"
    >
    </circle>
    <polygon
      points="38.225418,113.270493 74.350418,94.895477 74.600418,78.395493 20.850418,106.020477 20.225418,119.770493 73.850418,147.270477 74.225418,130.895493 "
      stroke="none"
      id="polygon1"
      stroke-width="3px"
      fill="#59a188"
      transform=""
    >
    </polygon>
    <polygon
      points="144,62.5 158.5,65 93,179.5 78.5,178 "
      stroke="none"
      id="polygon2"
      stroke-width="3px"
      fill="#59a188"
      transform=""
    >
    </polygon>
    <polygon
      points="182.725418,108.770493 218.850418,90.395477 219.100418,73.895493 165.350418,101.520477 164.725418,115.270493 218.350418,142.770477 218.725418,126.395493 "
      stroke="none"
      stroke-width="3px"
      id="polygon3"
      fill="#3ba388"
      transform="rotate(180 192.912918 110.832985)"
    >
    </polygon>
  </svg>
)
