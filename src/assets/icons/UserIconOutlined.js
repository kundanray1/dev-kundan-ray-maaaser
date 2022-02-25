import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1Z"
      stroke="#4577FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.817 14.076S4.6 11.799 9 11.799s6.184 2.277 6.184 2.277H2.817ZM9 8.999a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8v0Z"
      stroke="#4577FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgComponent
