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
      <Path stroke="#D3D3D3" d="M148 11.5h100" />
      <Path
        d="M5 12.697L9.794 17.5 19 8.303 17.678 7l-7.884 7.875-3.49-3.49L5 12.696z"
        fill="#fff"
      />
      <Circle cx={136} cy={12} r={12} fill="url(#prefix__paint1_linear)" />
      <Circle cx={260} cy={12} r={12} fill="url(#prefix__paint2_linear)" />
      <Path
        d="M263.368 9.812c0 .683-.193 1.242-.578 1.677-.381.434-.923.725-1.626.871v.059c.859.107 1.496.38 1.911.82.415.44.623 1.016.623 1.729 0 1.02-.354 1.806-1.062 2.358-.708.547-1.714.82-3.018.82a8.573 8.573 0 01-1.56-.131 5.238 5.238 0 01-1.37-.447V16.41a6.843 6.843 0 002.974.703c1.851 0 2.776-.725 2.776-2.176 0-1.298-1.021-1.948-3.062-1.948h-1.054v-1.047h1.069c.835 0 1.497-.183 1.985-.55.488-.37.732-.883.732-1.538 0-.522-.18-.932-.542-1.23-.356-.298-.842-.447-1.457-.447a4.51 4.51 0 00-1.326.19c-.415.128-.888.362-1.421.704l-.615-.82c.44-.347.945-.618 1.516-.814.576-.2 1.182-.3 1.817-.3 1.04 0 1.848.24 2.424.718.576.474.864 1.125.864 1.956zM129 12.697l4.794 4.803L143 8.303 141.678 7l-7.884 7.875-3.491-3.49L129 12.696z"
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
