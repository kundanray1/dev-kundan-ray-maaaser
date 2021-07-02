import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={45}
      height={45}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M42.516 0H2.482A2.483 2.483 0 000 2.484v40.034A2.483 2.483 0 002.484 45h40.032A2.483 2.483 0 0045 42.517V2.481A2.483 2.483 0 0042.516 0z"
        fill="#4267B2"
      />
      <Path
        d="M31.07 45V27.598h5.866l.879-6.812h-6.746v-4.338c0-1.968.547-3.309 3.368-3.309h3.576V7.064c-.622-.083-2.757-.268-5.24-.268-5.186 0-8.735 3.164-8.735 8.977v5.013h-5.845v6.811h5.845V45h7.031z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
