import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={18}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.222 15.573H2.778A1.778 1.778 0 0 1 1 13.795v-8a1.778 1.778 0 0 1 1.778-1.778h12.444A1.778 1.778 0 0 1 17 5.795v8a1.778 1.778 0 0 1-1.778 1.778Z"
      stroke="#0BB3F3"
      strokeWidth={1.5}
    />
    <Path
      d="M13 10.24a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Z"
      fill="#0BB3F3"
      stroke="#0BB3F3"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.333 4.02V2.776a1.776 1.776 0 0 0-2.235-1.717L2.32 3.667A1.778 1.778 0 0 0 1 5.385v.412"
      stroke="#0BB3F3"
      strokeWidth={1.5}
    />
  </Svg>
)

export default SvgComponent
