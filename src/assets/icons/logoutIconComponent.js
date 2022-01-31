import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={34} height={34} rx={4} fill="url(#prefix__paint0_linear)" />
      <Path
        d="M25.446 16.021a.716.716 0 00-.153-.23l-2.125-2.125a.709.709 0 00-1.001 1.002l.916.916h-3.957a.708.708 0 100 1.416h3.957l-.916.916a.708.708 0 101.001 1.002l2.125-2.124a.71.71 0 00.154-.772z"
        fill="#fff"
      />
      <Path
        d="M20.542 18.417a.708.708 0 00-.708.709v3.541H17V11.333a.71.71 0 00-.505-.678l-2.46-.738h5.799v3.542a.708.708 0 101.417 0v-4.25a.708.708 0 00-.709-.709H9.208c-.025 0-.048.01-.073.013a.71.71 0 00-.3.105c-.016.01-.035.01-.05.022-.005.005-.007.012-.013.017a.702.702 0 00-.188.223c-.01.02-.012.04-.02.06-.023.054-.048.106-.056.166-.004.02.003.04.002.061 0 .014-.01.027-.01.041v14.168c0 .338.239.628.57.694l7.083 1.417a.707.707 0 00.847-.694v-.709h3.542a.708.708 0 00.709-.708v-4.25a.708.708 0 00-.709-.709z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={17}
          y1={0}
          x2={17}
          y2={34}
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
