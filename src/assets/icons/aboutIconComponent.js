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
        d="M20.995 24.812l-.268 1.098c-.807.319-1.45.561-1.93.727-.48.168-1.039.25-1.674.25-.977 0-1.736-.238-2.277-.713-.542-.477-.813-1.082-.813-1.815 0-.284.02-.576.06-.873.042-.298.107-.633.197-1.008l1.008-3.567c.09-.341.166-.665.227-.971a4.22 4.22 0 00.091-.836c0-.456-.094-.774-.282-.953-.187-.179-.546-.27-1.078-.27-.26 0-.528.042-.8.123-.275.08-.51.16-.706.232l.27-1.1c.66-.268 1.29-.499 1.894-.69a5.668 5.668 0 011.714-.287c.97 0 1.718.234 2.243.703.525.469.788 1.077.788 1.826 0 .155-.017.428-.055.818-.036.392-.103.75-.201 1.076l-1.004 3.553a9.414 9.414 0 00-.22.978 5.035 5.035 0 00-.098.83c0 .472.105.794.316.965.212.172.578.257 1.097.257.244 0 .522-.043.83-.128.308-.085.532-.16.671-.225zm.255-14.916c0 .62-.233 1.148-.702 1.583a2.39 2.39 0 01-1.69.654 2.417 2.417 0 01-1.7-.654c-.471-.435-.708-.963-.708-1.582 0-.618.237-1.148.709-1.588a2.405 2.405 0 011.699-.66c.659 0 1.222.221 1.69.66.47.44.702.97.702 1.588z"
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
