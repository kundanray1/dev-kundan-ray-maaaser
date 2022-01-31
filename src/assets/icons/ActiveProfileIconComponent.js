import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

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
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M10 .001c-5.522 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zm0 2.99a3.308 3.308 0 110 6.615 3.308 3.308 0 010-6.615zm-.002 14.395a7.339 7.339 0 01-4.78-1.763 1.41 1.41 0 01-.494-1.07c0-1.853 1.5-3.336 3.352-3.336h3.849a3.33 3.33 0 013.346 3.335c0 .412-.18.803-.494 1.071a7.336 7.336 0 01-4.78 1.763z"
          fill="#037CC4"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
