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
        d="M12.552 9.372a2.552 2.552 0 11-5.104 0 2.552 2.552 0 015.104 0z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M19.277.723A2.453 2.453 0 0017.53 0H2.47c-.66 0-1.28.257-1.746.723A2.454 2.454 0 000 2.47v2.51c0 .66.257 1.28.723 1.746a2.454 2.454 0 001.746.723h.125v-4.31c0-.324.262-.586.586-.586h13.64c.324 0 .586.262.586.586v4.31h.125c.66 0 1.28-.257 1.746-.723A2.454 2.454 0 0020 4.979V2.47c0-.66-.257-1.28-.723-1.746z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M3.766 18.159c0 .492.191.954.539 1.301.347.348.81.54 1.302.54h8.786c.492 0 .955-.192 1.302-.54.348-.347.54-.81.54-1.301V3.724H3.764v14.435zM10 5.649a3.728 3.728 0 013.724 3.723A3.728 3.728 0 0110 13.096a3.728 3.728 0 01-3.724-3.724A3.728 3.728 0 0110 5.648zm-3.138 10.04h6.276a.586.586 0 110 1.173H6.862a.586.586 0 010-1.172z"
        fill="url(#prefix__paint2_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={10}
          y1={6.82}
          x2={10}
          y2={11.924}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={10}
          y1={0}
          x2={10}
          y2={7.448}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={10}
          y1={3.724}
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
