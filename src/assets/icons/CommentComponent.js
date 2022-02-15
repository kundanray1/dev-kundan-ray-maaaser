import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={15}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.19 0H1.99C1.218 0 .59.628.59 1.4V14l3.733-2.8h8.867c.772 0 1.4-.628 1.4-1.4V1.4c0-.772-.628-1.4-1.4-1.4Zm0 9.8H3.857L1.99 11.2V1.4h11.2v8.4Z"
      fill="#5F6062"
    />
  </Svg>
)

export default SvgComponent
