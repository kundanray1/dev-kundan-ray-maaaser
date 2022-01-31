import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm3.09 10.59l-4.168 4.166a.831.831 0 01-1.178 0 .832.832 0 010-1.178L11.322 10 7.744 6.423a.832.832 0 111.178-1.179l4.167 4.167a.832.832 0 010 1.178z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={10}
          y1={0}
          x2={10}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#037CC4" />
          <Stop offset={1} stopColor="#0BB3F3" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
