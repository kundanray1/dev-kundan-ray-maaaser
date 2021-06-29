import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={14}
        cy={14}
        r={13}
        fill="url(#prefix__paint0_linear)"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M14 15.867a1.867 1.867 0 100-3.733 1.867 1.867 0 000 3.733z"
        fill="#F1F2F7"
      />
      <Path
        d="M12.25 8.167l-1.067 1.167h-1.85A1.17 1.17 0 008.168 10.5v7a1.17 1.17 0 001.167 1.167h9.333a1.17 1.17 0 001.167-1.167v-7a1.17 1.17 0 00-1.167-1.166h-1.85L15.75 8.167h-3.5zm1.75 8.75a2.918 2.918 0 010-5.833 2.918 2.918 0 010 5.833z"
        fill="#F1F2F7"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={14}
          y1={0}
          x2={14}
          y2={28}
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
