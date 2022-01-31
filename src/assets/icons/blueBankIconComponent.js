import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M76.33 72.691H3.636a3.635 3.635 0 100 7.272h72.693a3.635 3.635 0 003.635-3.634 3.637 3.637 0 00-3.634-3.638zM8.179 63.237a3.636 3.636 0 000 7.273h63.607a3.636 3.636 0 000-7.273h-.907V30.523h.907a1.817 1.817 0 000-3.632H8.179a1.816 1.816 0 100 3.632h.909v32.712h-.91v.002zm55.428-32.714v32.712H52.704V30.523h10.903zm-18.175 0v32.712H34.53V30.523h10.903zm-29.077 0H27.26v32.712H16.355V30.523zM3.636 23.624h72.728a3.637 3.637 0 001.18-7.076L41.477.32a3.643 3.643 0 00-2.982 0L2.145 16.674a3.634 3.634 0 001.49 6.95z"
        fill="#0BB3F3"
      />
    </Svg>
  )
}

export default SvgComponent
