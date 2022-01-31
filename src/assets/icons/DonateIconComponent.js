import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function DonateIconComponent(props) {
  return (
    <Svg
      width={58}
      height={58}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Path
          d="M29 2C15.214 2 4 13.214 4 27s11.214 25 25 25 25-11.214 25-25S42.786 2 29 2z"
          fill="url(#prefix__paint0_linear)"
        />
        <G clipPath="url(#prefix__clip0)" fill="#fff">
          <Path d="M15.111 29.257v9.74c0 .431.35.781.782.781h25.104c.431 0 .781-.35.781-.781v-9.74H15.111zm23.542 6.615c0 .431-.35.781-.781.781H19.018a.781.781 0 01-.782-.781v-4.27c0-.432.35-.782.782-.782h18.854c.431 0 .781.35.781.781v4.27z" />
          <Path d="M19.799 32.382H37.09v2.709H19.8v-2.709zM29.445 20.253c.034-.204.048-.689-.515-.926V21c.293-.168.468-.465.515-.747zM27.888 16.648a.777.777 0 00-.277.466c-.041.221.011.426.134.523.044.034.092.067.143.1v-1.09z" />
          <Path d="M28.445 24.57a5.73 5.73 0 100-11.459 5.73 5.73 0 000 11.459zm-1.971-3.6a.52.52 0 01.72-.152c.282.184.458.264.694.297v-2.2a3.84 3.84 0 01-.786-.459c-.432-.338-.63-.927-.515-1.534.125-.663.586-1.19 1.204-1.376a3.42 3.42 0 01.097-.027v-.324a.52.52 0 011.041 0v.267c.506.087.864.336 1.037.535a.52.52 0 01-.783.688.714.714 0 00-.254-.15v1.682l.276.1c.915.323 1.425 1.17 1.267 2.109-.123.729-.677 1.468-1.543 1.687v.373a.52.52 0 01-1.041 0v-.323c-.42-.036-.77-.15-1.264-.473a.52.52 0 01-.15-.72z" />
          <Path d="M39.655 21.979a.781.781 0 00-.742-.534h-3.658a7.328 7.328 0 01-2.305 3.125h2.266a.781.781 0 010 1.562H21.674a.781.781 0 010-1.562h2.265a7.327 7.327 0 01-2.305-3.125h-3.658a.781.781 0 00-.741.534l-1.905 5.716h26.23l-1.905-5.716z" />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={29}
          y1={2}
          x2={29}
          y2={52}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <ClipPath id="prefix__clip0">
          <Path
            fill="#fff"
            transform="translate(15.111 13.111)"
            d="M0 0h26.667v26.667H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DonateIconComponent
