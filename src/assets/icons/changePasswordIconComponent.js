import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={27}
      viewBox="0 0 20 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.444 10h-1.666V7.778C17.778 3.489 14.288 0 10 0 5.711 0 2.222 3.49 2.222 7.778V10H.556a.555.555 0 00-.556.556v13.889c0 1.225.997 2.222 2.222 2.222h15.556A2.224 2.224 0 0020 24.444V10.556a.555.555 0 00-.556-.556zm-7.78 11.605a.556.556 0 01-.553.617H8.89a.556.556 0 01-.552-.617l.35-3.151a2.198 2.198 0 01-.91-1.787c0-1.226.997-2.223 2.223-2.223s2.222.997 2.222 2.223c0 .718-.34 1.373-.909 1.787l.35 3.151zM14.443 10H5.556V7.778A4.45 4.45 0 0110 3.333a4.45 4.45 0 014.444 4.445V10z"
        fill="#0BB3F3"
      />
    </Svg>
  )
}

export default SvgComponent
