import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.906 5.594h4.688V.906H.906v4.688Zm.938-3.75h2.812v2.812H1.844V1.844ZM.906 13.078h4.688V8.422H.906v4.656Zm.938-3.719h2.812v2.782H1.844V9.359ZM13.094.906H8.406v4.688h4.688V.906Zm-.938 3.75H9.344V1.844h2.812v2.812ZM13.094 8.406H8.406v4.688h4.688V8.406Zm-.938 3.75H9.344V9.344h2.812v2.812Z"
      fill="#0BB3F3"
    />
    <Path
      d="M2.781 2.781h.938v.938H2.78V2.78ZM2.781 10.281h.938v.938H2.78v-.938ZM10.281 10.281h.938v.938h-.938v-.938ZM10.281 2.781h.938v.938h-.938V2.78ZM12.93 7.469V6.53H7.469V.906H6.53v5.625h-5.46v.938h5.46v5.625h.938V7.469h5.46Z"
      fill="#0BB3F3"
    />
  </Svg>
)

export default SvgComponent
