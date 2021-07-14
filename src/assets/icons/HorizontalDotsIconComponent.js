import * as React from "react"
import Svg, { Rect, Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={26} height={26} rx={2} fill="#000" fillOpacity={0.57} />
      <Circle cx={6} cy={13} r={1.65} stroke="#fff" strokeWidth={0.7} />
      <Circle cx={13} cy={13} r={1.65} stroke="#fff" strokeWidth={0.7} />
      <Circle cx={20} cy={13} r={1.65} stroke="#fff" strokeWidth={0.7} />
    </Svg>
  )
}

export default SvgComponent
