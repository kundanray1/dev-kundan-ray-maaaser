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
        d="M17.35 23.324h-1.045c-.736 0-1.335.564-1.335 1.258v1.36c0 .694.599 1.258 1.335 1.258h1.045c.737 0 1.335-.564 1.335-1.258v-1.36c0-.696-.598-1.258-1.335-1.258zM9.98 12.791l1.928.227c.611.071 1.192-.26 1.412-.803.278-.686.665-1.227 1.16-1.62.704-.558 1.578-.84 2.623-.84 1.083 0 1.946.27 2.587.804.64.536.959 1.178.959 1.93 0 .541-.18 1.036-.54 1.485-.234.285-.953.884-2.152 1.8-1.2.917-2 1.743-2.4 2.476-.409.75-.551 1.583-.587 2.418-.03.714.574 1.31 1.335 1.31h1.09c.694 0 1.268-.501 1.33-1.151.044-.468.127-.822.251-1.063.21-.413.75-.958 1.617-1.637 1.68-1.31 2.774-2.346 3.288-3.11.511-.76.77-1.567.77-2.42 0-1.541-.697-2.894-2.092-4.055C21.167 7.38 19.29 6.8 16.932 6.8c-2.242 0-4.05.572-5.43 1.719-1.174.977-1.888 2.134-2.139 3.47-.078.39.205.754.616.802z"
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
