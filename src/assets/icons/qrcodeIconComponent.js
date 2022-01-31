import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M37.656 37.656H27.5V40H40V27.5h-2.344v10.156zM2.344 2.344H12.5V0H0v12.5h2.344V2.344zM27.5 0v2.344h10.156V12.5H40V0H27.5zM2.344 27.5H0V40h12.5v-2.344H2.344V27.5z"
        fill="#333"
      />
      <Path
        d="M4.766 16.484h11.718V4.766H4.766v11.718zM7.109 7.11h7.032v7.032H7.109V7.109zM4.766 35.195h11.718v-11.64H4.766v11.64zm2.343-9.297h7.032v6.954H7.109v-6.954zM35.234 4.766H23.516v11.718h11.718V4.766zm-2.343 9.375h-7.032V7.109h7.032v7.032zM35.234 23.516H23.516v11.718h11.718V23.516zm-2.343 9.375h-7.032v-7.032h7.032v7.032z"
        fill="#333"
      />
      <Path
        d="M9.453 9.453h2.344v2.344H9.453V9.453zM9.453 28.203h2.344v2.344H9.453v-2.344zM28.203 28.203h2.344v2.344h-2.344v-2.344zM28.203 9.453h2.344v2.344h-2.344V9.453zM34.824 21.172v-2.344H21.172V4.766h-2.344v14.062H5.176v2.344h13.652v14.062h2.344V21.172h13.652z"
        fill="#333"
      />
    </Svg>
  )
}

export default SvgComponent
