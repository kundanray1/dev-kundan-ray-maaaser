import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={5}
      viewBox="0 0 24 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.6 0a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zM12 0a2.4 2.4 0 100 4.8A2.4 2.4 0 0012 0zM2.4 0a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z"
        fill="#B9C3CD"
      />
    </Svg>
  )
}

export default SvgComponent
