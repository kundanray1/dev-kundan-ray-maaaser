import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={46}
      height={46}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={45.234} height={45.63} rx={22.617} fill="#FFDB56" />
      <G clipPath="url(#prefix__clip0)" fill="#fff">
        <Path d="M26.46 24.369a4.947 4.947 0 00-.015-1.065 4.797 4.797 0 00-1.378-2.816l-.018-.018a4.874 4.874 0 00-.918-.713l-1.515 1.499a.967.967 0 00-.27.49c.332.108.642.29.9.545l.009.008c.43.43.666 1.003.664 1.613a2.255 2.255 0 01-.673 1.608l-5.168 5.113c-.893.884-2.402.884-3.295 0l-.01-.008a2.255 2.255 0 01-.663-1.613c.001-.61.24-1.18.673-1.608l2.955-2.924a6.099 6.099 0 01-.512-3.097l-4.246 4.2a4.798 4.798 0 00-1.433 3.435c0 1.293.502 2.506 1.415 3.418l.018.018c1.903 1.882 4.998 1.882 6.9 0l5.169-5.113a4.791 4.791 0 001.408-2.944l.002-.028z" />
        <Path d="M19.912 25.396c.282.28.591.517.918.713l1.515-1.499a.966.966 0 00.27-.49 2.273 2.273 0 01-.9-.545l-.01-.009a2.255 2.255 0 01-.663-1.612c.002-.61.24-1.18.673-1.608l5.168-5.113c.893-.884 2.402-.884 3.295 0l.007.006c.432.432.668 1.005.666 1.614a2.256 2.256 0 01-.673 1.61l-2.955 2.923a6.102 6.102 0 01.512 3.097l4.246-4.2a4.798 4.798 0 001.432-3.436 4.798 4.798 0 00-1.432-3.435c-1.903-1.883-4.998-1.883-6.9 0l-5.169 5.112a4.798 4.798 0 00-1.432 3.436c0 1.293.501 2.506 1.414 3.418l.018.018z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path
            fill="#fff"
            transform="translate(11.547 12)"
            d="M0 0h21.866v21.866H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
