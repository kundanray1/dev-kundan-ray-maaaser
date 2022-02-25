import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={16}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.04 10.6v1.92M1 7.4V17h14.08V7.4H1Zm2.56 0c0-3.84 0-6.4 4.48-6.4s4.48 2.56 4.48 6.4H3.56Z"
      stroke="#FFA155"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.04 13.8a.64.64 0 1 0 0-1.28.64.64 0 0 0 0 1.28Z"
      stroke="#FFA155"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgComponent
