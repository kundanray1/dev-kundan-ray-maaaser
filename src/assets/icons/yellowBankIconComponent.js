import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

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
      <G clipPath="url(#prefix__clip0)" fill="#FBC766">
        <Path d="M38.165 36.355H1.818a1.818 1.818 0 100 3.636h36.346a1.817 1.817 0 10.001-3.636zM4.09 31.629a1.818 1.818 0 100 3.637h31.803a1.818 1.818 0 000-3.637h-.454V15.272h.454a.907.907 0 100-1.816H4.089a.908.908 0 100 1.816h.455v16.356h-.455v.001zm27.714-16.357v16.356h-5.452V15.272h5.452zm-9.088 0v16.356h-5.452V15.272h5.452zm-14.538 0h5.451v16.356H8.178V15.272zM1.818 11.822h36.364a1.817 1.817 0 00.59-3.538L20.738.17a1.821 1.821 0 00-1.49 0L1.071 8.347a1.817 1.817 0 00.746 3.475z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
