import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

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
      <Circle cx={40} cy={40} r={40} fill="#fff" />
      <Path
        d="M40 0C17.91 0 0 17.907 0 39.998 0 62.09 17.91 79.996 40 79.996c22.093 0 40-17.907 40-39.998C80 17.908 62.093 0 40 0zm0 11.96c7.31 0 13.232 5.925 13.232 13.23 0 7.308-5.923 13.23-13.232 13.23-7.306 0-13.229-5.922-13.229-13.23 0-7.305 5.923-13.23 13.229-13.23zm-.009 57.579a29.356 29.356 0 01-19.116-7.05 5.638 5.638 0 01-1.978-4.285c0-7.409 5.996-13.339 13.407-13.339H47.7c7.413 0 13.387 5.93 13.387 13.34 0 1.647-.72 3.213-1.977 4.283a29.346 29.346 0 01-19.118 7.05z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={40}
          y1={0}
          x2={40}
          y2={79.996}
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
