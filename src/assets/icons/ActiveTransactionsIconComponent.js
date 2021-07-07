import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

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
      <Circle cx={10} cy={10} r={10} fill="url(#prefix__paint0_linear)" />
      <Path
        d="M14.817 6.59l-3.122-2.485c-.322-.25-.806-.025-.806.387v.83c0 .267-.178.5-.444.5H5.484A.467.467 0 005 6.292v1.307a.49.49 0 00.484.484h4.961c.266 0 .444.21.444.475v.831c0 .404.484.63.798.38l3.114-2.42a.473.473 0 00.016-.759zM5.183 12.998l3.122 2.484c.322.25.806.025.806-.387v-.83c0-.267.178-.5.444-.5h4.961a.467.467 0 00.484-.469V11.99a.49.49 0 00-.484-.484H9.555c-.266 0-.444-.21-.444-.476v-.83c0-.404-.484-.63-.798-.38l-3.114 2.42a.473.473 0 00-.016.759z"
        fill="#fff"
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
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
