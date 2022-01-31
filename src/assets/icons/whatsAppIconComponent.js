import * as React from "react"
import Svg, { Mask, Circle, G, Path } from "react-native-svg"

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
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={45}
        height={45}
      >
        <Circle cx={22.5} cy={22.5} r={22.5} fill="#C4C4C4" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path d="M46.607-1.607H0V45h46.607V-1.607z" fill="#1BD741" />
        <Path
          d="M7.005 38.013l2.283-8.108a16.227 16.227 0 01-2.241-8.247c0-8.976 7.302-16.278 16.278-16.278 8.975 0 16.277 7.302 16.277 16.278 0 8.975-7.302 16.278-16.277 16.278-2.797 0-5.536-.716-7.958-2.076l-8.362 2.153zm8.79-5.114l.497.304a13.49 13.49 0 007.033 1.971c7.453 0 13.516-6.063 13.516-13.516S30.778 8.14 23.325 8.14 9.808 14.205 9.808 21.658c0 2.597.738 5.118 2.134 7.293l.336.522-1.315 4.67 4.831-1.244z"
          fill="#fff"
        />
        <Path
          d="M18.752 14.082l-1.056-.058a1.277 1.277 0 00-.908.311c-.512.445-1.331 1.304-1.582 2.425-.375 1.67.204 3.715 1.704 5.76 1.5 2.046 4.295 5.319 9.238 6.716 1.593.45 2.846.147 3.813-.471a3.41 3.41 0 001.484-2.165l.168-.788a.547.547 0 00-.306-.611l-3.57-1.646a.548.548 0 00-.662.163l-1.401 1.817a.4.4 0 01-.451.134c-.96-.337-4.174-1.684-5.938-5.081a.405.405 0 01.05-.452l1.34-1.55a.547.547 0 00.09-.573l-1.54-3.6a.547.547 0 00-.473-.331z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent