import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.59 2.502a2.502 2.502 0 1 1 .531 1.541L5.505 6.351c.114.425.114.872 0 1.297l4.618 2.31a2.5 2.5 0 1 1-.448.894l-4.618-2.31a2.5 2.5 0 1 1 0-3.086L9.674 3.15a2.505 2.505 0 0 1-.084-.647ZM12.092 1a1.501 1.501 0 1 0 0 3.003 1.501 1.501 0 0 0 0-3.003Zm-.002 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM1.59 7a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
      fill="#5F6062"
    />
  </Svg>
)

export default SvgComponent
