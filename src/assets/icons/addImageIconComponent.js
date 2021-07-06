import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M100 57.143H57.143V100H42.857V57.143H0V42.857h42.857V0h14.286v42.857H100v14.286z"
        fill="#D9D9D9"
      />
    </Svg>
  )
}

export default SvgComponent
