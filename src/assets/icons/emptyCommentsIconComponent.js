import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={50}
      height={46}
      viewBox="0 0 50 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M43.126 0H6.874A6.882 6.882 0 000 6.874V29.06c0 3.783 3.07 6.861 6.85 6.875V46l14.468-10.067h21.808A6.882 6.882 0 0050 29.059V6.874A6.882 6.882 0 0043.126 0zm3.944 29.06a3.949 3.949 0 01-3.944 3.944H20.399l-10.62 7.39v-7.39H6.874a3.949 3.949 0 01-3.944-3.945V6.874A3.949 3.949 0 016.874 2.93h36.252a3.949 3.949 0 013.944 3.944V29.06z"
        fill="#0BB3F3"
      />
      <Path
        d="M13.382 10.352h23.236v2.93H13.382v-2.93zM13.382 16.602h23.236v2.93H13.382v-2.93zM13.382 22.852h23.236v2.93H13.382v-2.93z"
        fill="#0BB3F3"
      />
    </Svg>
  )
}

export default SvgComponent
