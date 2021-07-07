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
        d="M5.892 14.804h0a2.344 2.344 0 000 3.312l.106-.107-.106.107 7.065 7.065c.44.44 1.03.683 1.655.683h0c.627 0 1.215-.243 1.656-.684l9.377-9.377c.14-.14.22-.33.22-.528V7.55a2.344 2.344 0 00-2.342-2.342h-7.726a.746.746 0 00-.528.22l-9.377 9.376zm9.32 9.321h0a.84.84 0 01-.6.247.84.84 0 01-.6-.247L6.948 17.06a.85.85 0 010-1.2s0 0 0 0l9.16-9.159h7.416a.85.85 0 01.849.849v7.416l-9.16 9.159z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.3}
      />
      <Path
        d="M20.457 8.744c-.5 0-.97.195-1.325.55a1.861 1.861 0 00-.549 1.324c0 .5.195.971.55 1.325.353.354.824.55 1.325.55.5 0 .97-.196 1.325-.55.353-.354.548-.824.548-1.325 0-.5-.195-.971-.548-1.325a1.862 1.862 0 00-1.326-.549zm.482 2.356c-.128.129-.3.2-.482.2a.676.676 0 01-.481-.2.676.676 0 01-.2-.482c0-.182.071-.353.2-.482.129-.128.3-.199.482-.199.181 0 .352.07.481.2a.677.677 0 010 .963z"
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
