import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={13}
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.222 12.564h3.556V10.47H6.222v2.094zM0 0v2.094h16V0H0zm2.667 7.329h10.666V5.235H2.667v2.094z"
        fill="#5F6062"
      />
    </Svg>
  )
}

export default SvgComponent
