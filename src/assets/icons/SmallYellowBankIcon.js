import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22.899 21.818H1.09a1.09 1.09 0 0 0 0 2.183h21.807a1.09 1.09 0 0 0 0-2.183ZM2.454 18.979a1.09 1.09 0 0 0 0 2.183h19.081a1.091 1.091 0 0 0 0-2.183h-.272V9.16h.272a.544.544 0 1 0 0-1.09H2.454a.545.545 0 1 0 0 1.09h.272v9.818h-.272ZM19.082 9.16v9.818H15.81V9.16h3.27Zm-5.453 0v9.818h-3.27V9.16h3.27Zm-8.722 0h3.27v9.818h-3.27V9.16ZM1.09 7.09h21.818a1.09 1.09 0 0 0 .355-2.123L12.443.096a1.092 1.092 0 0 0-.895 0L.643 5.005a1.09 1.09 0 0 0 .448 2.085Z"
      fill="#FBC766"
    />
  </Svg>
)

export default SvgComponent
