import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={45}
      height={45}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.5 0C10.093 0 0 10.093 0 22.5S10.093 45 22.5 45 45 34.907 45 22.5 34.907 0 22.5 0z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M25.68 15.654l4.475 4.475-11.328 11.328-4.473-4.475L25.68 15.654zm7.871-1.08l-1.996-1.995a1.98 1.98 0 00-2.797 0l-1.912 1.911 4.475 4.476 2.23-2.23a1.526 1.526 0 000-2.162zM12.012 33.272a.51.51 0 00.617.606l4.987-1.21-4.473-4.474-1.13 5.078z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={22.5}
          y1={0}
          x2={22.5}
          y2={45}
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
