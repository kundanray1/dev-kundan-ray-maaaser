import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={28}
      viewBox="0 0 20 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.52 8.485H4.946a.792.792 0 00-.791.792v.987H8.31v-.987a.792.792 0 00-.791-.792zM6.233 6.895c.492 0 .893-.4.893-.893v-.954a.894.894 0 00-1.786 0v.954c0 .493.4.893.893.893z"
        fill="#0BB3F3"
      />
      <Path
        d="M0 0v27.016h20V0H0zm11.625 6.901h4.1v1.583h-4.1V6.901zM2.572 9.277c0-.977.594-1.819 1.44-2.182a2.46 2.46 0 01-.255-1.093v-.954A2.479 2.479 0 016.233 2.57a2.479 2.479 0 012.476 2.477v.954c0 .392-.092.763-.255 1.093a2.378 2.378 0 011.44 2.182v2.57H2.572v-2.57zm-.178 5.604h12.753v1.583H2.394v-1.583zm12.753 8.31H2.394v-1.584h12.753v1.583zm2.33-3.364H2.395v-1.583h15.084v1.583zm0-7.98h-5.852v-1.583h5.853v1.583z"
        fill="#0BB3F3"
      />
    </Svg>
  )
}

export default SvgComponent
