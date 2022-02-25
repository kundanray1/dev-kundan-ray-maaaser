import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.003 8.145a6.995 6.995 0 0 1-7.12 6.854 6.985 6.985 0 0 1-6.881-7.15 6.987 6.987 0 0 1 7.167-6.847c3.83.088 6.903 3.259 6.834 7.143Zm-7.035 6.39c3.613.016 6.554-2.906 6.569-6.526.015-3.567-2.905-6.525-6.461-6.544-3.632-.02-6.595 2.879-6.611 6.467-.017 3.642 2.884 6.588 6.503 6.604Z"
      fill="url(#a)"
      stroke="url(#b)"
      strokeWidth={0.4}
    />
    <Path
      d="M5.102 12.08c-.779-.029-1.345-.777-1.105-1.517.259-.797.556-1.583.838-2.374.179-.502.358-1.005.539-1.507.231-.643.67-1.08 1.314-1.31 1.256-.45 2.513-.898 3.77-1.346.468-.167.897-.097 1.252.255.359.355.436.787.266 1.261l-1.34 3.756c-.235.66-.682 1.104-1.343 1.339-1.247.443-2.494.891-3.742 1.333-.145.052-.3.075-.45.11ZM11.6 5.144c-.011-.08-.014-.14-.027-.195-.104-.422-.517-.638-.946-.486-1.276.452-2.552.906-3.826 1.366-.49.177-.816.527-.991 1.02-.443 1.243-.89 2.485-1.332 3.728-.03.082-.057.167-.064.253-.043.533.445.892.968.708 1.258-.446 2.514-.897 3.772-1.345.514-.183.858-.53 1.041-1.045.443-1.243.89-2.486 1.332-3.73.033-.094.052-.194.073-.274Z"
      fill="url(#c)"
      stroke="url(#d)"
      strokeWidth={0.4}
    />
    <Path
      d="M9.168 8.002A1.169 1.169 0 0 1 8.01 9.167a1.17 1.17 0 0 1-1.176-1.161 1.168 1.168 0 1 1 2.334-.004Zm-1.17.698c.38.003.7-.31.703-.689a.703.703 0 0 0-.697-.71.702.702 0 0 0-.702.689.703.703 0 0 0 .696.71Z"
      fill="url(#e)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={8.002}
        y1={1}
        x2={8.002}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0BB3F3" />
        <Stop offset={1} stopColor="#037CC4" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={8.002}
        y1={1}
        x2={8.002}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0BB3F3" />
        <Stop offset={1} stopColor="#037CC4" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={8.002}
        y1={3.939}
        x2={8.002}
        y2={12.081}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0BB3F3" />
        <Stop offset={1} stopColor="#037CC4" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={8.002}
        y1={3.939}
        x2={8.002}
        y2={12.081}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0BB3F3" />
        <Stop offset={1} stopColor="#037CC4" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={8.001}
        y1={6.833}
        x2={8.001}
        y2={9.167}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0BB3F3" />
        <Stop offset={1} stopColor="#037CC4" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent
