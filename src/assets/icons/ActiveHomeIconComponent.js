import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

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
      <Path
        d="M19.75 9.447a.954.954 0 00-.079-1.365L10.733.262A1.114 1.114 0 009.28.277L.31 8.499a.948.948 0 00-.043 1.363l.225.234c.373.388.976.435 1.346.103l.67-.6v8.788c0 .539.437.975.976.975H6.98a.975.975 0 00.975-.975v-6.148h4.46v6.148c-.008.538.377.975.916.975h3.705a.975.975 0 00.975-.976V9.723l.414.363c.228.2.707.04 1.07-.36l.253-.28z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={10}
          y1={0}
          x2={10}
          y2={19.362}
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
