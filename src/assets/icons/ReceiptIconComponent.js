import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)" fill="#5F6062">
        <Path d="M11.375 3.5v1.75h.875v7H1.75v-7h.875V3.5H0V14h14V3.5h-2.625z" />
        <Path d="M6.125 3.35v4.525h1.75V3.35l1.131 1.13 1.238-1.236L7 0 3.756 3.244 4.994 4.48 6.125 3.35z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h14v14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
