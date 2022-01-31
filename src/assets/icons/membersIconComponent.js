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
        d="M19.272 12.778a3.243 3.243 0 011.51 2.41c.336.157.71.248 1.105.248a2.618 2.618 0 10-2.615-2.658zm-1.715 5.36a2.618 2.618 0 100-5.235 2.618 2.618 0 000 5.236zm1.11.179h-2.221a3.356 3.356 0 00-3.352 3.352v2.717l.007.042.187.059c1.764.551 3.296.735 4.557.735 2.464 0 3.892-.703 3.98-.747l.175-.089h.018V21.67a3.355 3.355 0 00-3.35-3.352zm4.331-2.703h-2.204a3.226 3.226 0 01-.996 2.248 3.983 3.983 0 012.845 3.811v.837c2.177-.08 3.43-.696 3.513-.738l.175-.088h.019v-2.718a3.356 3.356 0 00-3.352-3.352zm-10.035-.178a2.6 2.6 0 001.392-.404 3.24 3.24 0 011.218-2.066c.003-.05.008-.098.008-.147a2.618 2.618 0 10-2.618 2.617zm2.351 2.426a3.228 3.228 0 01-.995-2.235c-.082-.006-.163-.013-.246-.013h-2.221A3.356 3.356 0 008.5 18.966v2.717l.007.042.187.06a15.72 15.72 0 003.775.709v-.82c0-1.8 1.202-3.323 2.845-3.812z"
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
