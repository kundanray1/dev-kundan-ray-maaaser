import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={15} cy={15} r={15} fill="#434343" fillOpacity={0.71} />
      <Path
        d="M20 17.067c-.988 0-1.866.48-2.413 1.219l-4.709-2.407a2.991 2.991 0 00-.097-1.97l4.935-2.966A2.994 2.994 0 0020 12c1.654 0 3-1.346 3-3s-1.346-3-3-3a3.003 3.003 0 00-2.797 4.085l-4.948 2.972A2.994 2.994 0 0010 12.033c-1.654 0-3 1.346-3 3a2.998 2.998 0 005.44 1.744l4.695 2.4A3.003 3.003 0 0020 23.067c1.654 0 3-1.346 3-3s-1.346-3-3-3zM20 7c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM10 17.033c-1.103 0-2-.897-2-2 0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2zm10 5.034c-1.103 0-2-.898-2-2 0-1.103.897-2 2-2s2 .897 2 2c0 1.102-.897 2-2 2z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
