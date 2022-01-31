import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={104}
      height={81}
      viewBox="0 0 104 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M20.38 80.727h-6.473c-7.284 0-13.18-5.969-13.18-13.27V31.525h6.416c7.284 0 13.18 5.911 13.18 13.213v35.988h.058z"
          fill="url(#prefix__paint0_linear)"
        />
        <Path
          d="M48.532 68.094h-7.284c-6.82 0-12.37-5.564-12.37-12.402V24.977h7.283c6.821 0 12.37 5.564 12.37 12.402v30.715z"
          fill="url(#prefix__paint1_linear)"
        />
        <Path
          d="M83.677 80.727h6.416c7.283 0 13.18-5.91 13.18-13.213v-35.93h-6.417c-7.283 0-13.18 5.911-13.18 13.213v35.93z"
          fill="url(#prefix__paint2_linear)"
        />
        <Path
          d="M56.566 68.152h7.284c6.82 0 12.37-5.564 12.37-12.402V25.035h-7.283c-6.821 0-12.37 5.564-12.37 12.402v30.715z"
          fill="url(#prefix__paint3_linear)"
        />
        <Path
          d="M52.636 25.847c7.119 0 12.89-5.786 12.89-12.924C65.526 5.786 59.755 0 52.636 0c-7.12 0-12.89 5.786-12.89 12.923 0 7.138 5.77 12.924 12.89 12.924z"
          fill="url(#prefix__paint4_linear)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={2.793}
          y1={31.805}
          x2={18.507}
          y2={80.803}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={28.861}
          y1={46.547}
          x2={48.508}
          y2={46.547}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={103.298}
          y1={56.117}
          x2={83.651}
          y2={56.117}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint3_linear"
          x1={76.211}
          y1={46.577}
          x2={56.564}
          y2={46.577}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint4_linear"
          x1={39.745}
          y1={12.901}
          x2={65.48}
          y2={12.901}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <ClipPath id="prefix__clip0">
          <Path
            fill="#fff"
            transform="translate(.727)"
            d="M0 0h102.545v80.727H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
