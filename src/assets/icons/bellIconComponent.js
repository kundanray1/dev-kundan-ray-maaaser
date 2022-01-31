import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={24}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.94 17.847a5.581 5.581 0 01-.901-4.621l.557-2.256c.703-2.847-.83-5.726-3.473-6.797l.216-.873a.833.833 0 10-1.618-.4l-.216.874c-2.837-.281-5.533 1.553-6.236 4.4l-.557 2.256a5.588 5.588 0 01-2.957 3.676 1.46 1.46 0 00.306 2.718l13.35 3.296a1.46 1.46 0 001.53-2.273zM8.937 21.708a3.13 3.13 0 003.571-1.694l-5.945-1.467a3.13 3.13 0 002.374 3.16z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
