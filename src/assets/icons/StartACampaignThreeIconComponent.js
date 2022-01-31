import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={272}
      height={24}
      viewBox="0 0 272 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12} r={12} fill="url(#prefix__paint0_linear)" />
      <Path stroke="#0BB3F3" d="M148 11.5h100" />
      <Path
        d="M5 12.697L9.794 17.5 19 8.303 17.678 7l-7.884 7.875-3.49-3.49L5 12.696z"
        fill="#fff"
      />
      <Path stroke="#0BB3F3" d="M24 11.5h100" />
      <Circle cx={136} cy={12} r={12} fill="url(#prefix__paint1_linear)" />
      <Circle cx={260} cy={12} r={12} fill="url(#prefix__paint2_linear)" />
      <Path
        d="M129 12.697l4.794 4.803L143 8.303 141.678 7l-7.884 7.875-3.491-3.49L129 12.696z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={12}
          y1={0}
          x2={12}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={136}
          y1={0}
          x2={136}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={260}
          y1={0}
          x2={260}
          y2={24}
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
