import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.423 0 16 7.353l-.846.9-1.203-1.16v8.273l-.596.634H9.781l-.596-.634V10.93H6.803v4.437L6.207 16H2.633l-.596-.634V7.102L.846 8.254 0 7.354 7.565 0h.858ZM3.229 5.95v8.782H5.61v-4.437l.596-.634h3.574l.596.634v4.437h2.382v-8.79L7.994 1.344 3.229 5.95Z"
      fill="#5F6062"
    />
  </Svg>
)

export default SvgComponent
