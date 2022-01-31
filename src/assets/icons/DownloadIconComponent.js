import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={15}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9 10.5a.562.562 0 01-.406-.174L4.656 6.201a.563.563 0 01.407-.951h2.062V.938c0-.517.42-.938.938-.938h1.875c.516 0 .937.42.937.938V5.25h2.063c.494 0 .747.594.406.951l-3.937 4.125A.562.562 0 019 10.5zM16.688 15H1.313A1.314 1.314 0 010 13.686v-.375c0-.724.589-1.313 1.313-1.313h15.374c.724 0 1.313.59 1.313 1.313v.375c0 .724-.589 1.313-1.313 1.313z"
        fill="#0BB3F3"
      />
    </Svg>
  )
}

export default SvgComponent
