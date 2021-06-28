import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 0C8.955 0 0 8.954 0 20c0 11.044 8.955 19.998 20 19.998 11.046 0 20-8.953 20-19.999C40 8.954 31.046 0 20 0zm0 5.98a6.616 6.616 0 11.001 13.231A6.616 6.616 0 0120 5.98zm-.004 28.79a14.678 14.678 0 01-9.558-3.525 2.819 2.819 0 01-.99-2.143c0-3.704 2.999-6.67 6.704-6.67h7.698a6.662 6.662 0 016.693 6.67c0 .824-.36 1.607-.988 2.142a14.673 14.673 0 01-9.56 3.525z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={20}
          y1={0}
          x2={20}
          y2={39.998}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
