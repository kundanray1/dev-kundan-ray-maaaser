import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={10}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.352.352a1.203 1.203 0 0 0 0 1.701l5.954 5.954-5.954 5.954a1.203 1.203 0 0 0 1.701 1.701l6.805-6.804a1.203 1.203 0 0 0 0-1.701L2.053.352a1.203 1.203 0 0 0-1.7 0Z"
      fill="#999"
    />
  </Svg>
)

export default SvgComponent
