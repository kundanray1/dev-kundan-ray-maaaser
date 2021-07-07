import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={80}
      height={55}
      viewBox="0 0 80 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M80 12.969V8.75A8.75 8.75 0 0071.25 0H8.75A8.75 8.75 0 000 8.75v4.219c0 .431.35.781.781.781H79.22c.431 0 .781-.35.781-.781zM0 19.531V46.25A8.75 8.75 0 008.75 55h62.5A8.75 8.75 0 0080 46.25V19.531a.781.781 0 00-.781-.781H.78a.781.781 0 00-.781.781zM20 40a2.5 2.5 0 01-2.5 2.5H15a2.5 2.5 0 01-2.5-2.5v-2.5A2.5 2.5 0 0115 35h2.5a2.5 2.5 0 012.5 2.5V40z"
        fill="#0BB3F3"
      />
    </Svg>
  )
}

export default SvgComponent
