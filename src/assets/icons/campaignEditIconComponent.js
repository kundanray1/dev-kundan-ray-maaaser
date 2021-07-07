import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={26} height={26} rx={2} fill="#000" fillOpacity={0.44} />
      <Path
        d="M19.163 5.644a2.203 2.203 0 00-3.114 0l-.779.784-8.296 8.291-.018.018c-.004.004-.004.009-.008.009-.01.013-.022.026-.031.04 0 .004-.005.004-.005.008l-.022.035-.008.014c-.005.013-.01.022-.014.035 0 .004-.004.004-.004.009l-1.84 5.535a.433.433 0 00.105.449.443.443 0 00.454.105l5.53-1.845c.005 0 .005 0 .01-.004a.16.16 0 00.039-.018.016.016 0 00.009-.004l.044-.027c.013-.008.026-.021.04-.03.004-.005.008-.005.008-.009.005-.004.013-.009.018-.018l9.075-9.075a2.203 2.203 0 000-3.113l-1.193-1.189zm-8.19 12.453l-3.065-3.065 7.67-7.67 3.065 3.064-7.67 7.67zm-3.497-2.25l2.677 2.677-4.02 1.338 1.343-4.015zm12.26-6.517l-.468.47-3.065-3.064.472-.471a1.32 1.32 0 011.867 0l1.197 1.197c.512.518.51 1.352-.004 1.868z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
