import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={86}
      height={86}
      viewBox="0 0 86 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={43} cy={43} r={41.5} stroke="#0BB3F3" strokeWidth={3} />
      <Path
        d="M37.755 59.518c-.428.43-1.01.67-1.617.67-.606 0-1.19-.24-1.617-.67L21.606 46.6a3.43 3.43 0 010-4.851l1.617-1.617a3.43 3.43 0 014.852 0l8.063 8.063 21.788-21.788a3.43 3.43 0 014.852 0l1.617 1.617a3.43 3.43 0 010 4.852l-26.64 26.642z"
        fill="#0BB3F3"
      />
    </Svg>
  )
}

export default SvgComponent
