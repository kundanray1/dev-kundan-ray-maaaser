import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.71 20.71h-5.585V22H22v-6.875h-1.29v5.586zM1.29 1.29h5.585V0H0v6.875h1.29V1.289zM15.125 0v1.29h5.586v5.585H22V0h-6.875zM1.29 15.125H0V22h6.875v-1.29H1.289v-5.585z"
        fill="#0BB3F3"
      />
      <Path
        d="M2.621 9.066h6.445V2.621H2.621v6.445zm1.29-5.156h3.866v3.867H3.91V3.91zM2.621 19.357h6.445v-6.402H2.621v6.402zm1.29-5.113h3.866v3.824H3.91v-3.824zM19.379 2.621h-6.445v6.445h6.445V2.621zm-1.29 5.156h-3.866V3.91h3.867v3.867zM19.379 12.934h-6.445v6.445h6.445v-6.445zm-1.29 5.156h-3.866v-3.867h3.867v3.867z"
        fill="#0BB3F3"
      />
      <Path
        d="M5.2 5.2h1.288v1.288H5.2V5.2zM5.2 15.512h1.288V16.8H5.2v-1.29zM15.512 15.512H16.8V16.8h-1.29v-1.29zM15.512 5.2H16.8v1.288h-1.29V5.2zM19.153 11.645v-1.29h-7.508V2.621h-1.29v7.734H2.847v1.29h7.508v7.734h1.29v-7.735h7.508z"
        fill="#0BB3F3"
      />
    </Svg>
  )
}

export default SvgComponent
