import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={30} height={30} rx={3} fill="url(#prefix__paint0_linear)" />
      <Path
        d="M22.257 5.877h-.954v-1.59h-1.59v1.59H9.215v-1.59h-1.59v1.59H6.67a2.388 2.388 0 00-2.385 2.385v13.996a2.388 2.388 0 002.385 2.385h15.586a2.388 2.388 0 002.386-2.385V8.262a2.388 2.388 0 00-2.386-2.385zm.795 16.38a.796.796 0 01-.795.796H6.671a.796.796 0 01-.795-.795V11.76h17.176v10.497zm0-12.086H5.876V8.262c0-.438.357-.795.795-.795h.954v1.59h1.59v-1.59h10.497v1.59h1.59v-1.59h.955c.439 0 .795.357.795.795v1.909z"
        fill="#fff"
      />
      <Path
        d="M8.898 13.432h-1.59v1.59h1.59v-1.59zM12.079 13.432h-1.59v1.59h1.59v-1.59zM15.26 13.432h-1.591v1.59h1.59v-1.59zM18.44 13.432h-1.59v1.59h1.59v-1.59zM21.62 13.432h-1.59v1.59h1.59v-1.59zM8.898 16.618h-1.59v1.59h1.59v-1.59zM12.079 16.618h-1.59v1.59h1.59v-1.59zM15.26 16.618h-1.591v1.59h1.59v-1.59zM18.44 16.618h-1.59v1.59h1.59v-1.59zM8.898 19.793h-1.59v1.59h1.59v-1.59zM12.079 19.793h-1.59v1.59h1.59v-1.59zM15.26 19.793h-1.591v1.59h1.59v-1.59zM18.44 19.793h-1.59v1.59h1.59v-1.59zM21.62 16.618h-1.59v1.59h1.59v-1.59z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={15}
          y1={0}
          x2={15}
          y2={30}
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
