import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.123 0c.265.103.458.266.472.573a.575.575 0 0 1-.515.619c-.34.038-.686.04-1.026.086a6.531 6.531 0 0 0-3.368 1.48c-1.12.931-1.904 2.096-2.251 3.515-.572 2.338-.077 4.437 1.517 6.251 1.055 1.201 2.39 1.937 3.968 2.177 2.076.315 3.933-.21 5.53-1.586 1.054-.908 1.772-2.04 2.11-3.391.12-.486.152-.995.222-1.493.012-.088.004-.178.014-.265.043-.362.295-.583.64-.564.324.018.561.28.56.631a7.18 7.18 0 0 1-.287 2.08c-.896 2.944-2.82 4.88-5.801 5.64-3.962 1.009-7.97-1.15-9.41-4.979a7.598 7.598 0 0 1-.47-2.156c-.004-.05-.019-.1-.028-.15V7.53l.038-.337c.192-1.721.85-3.24 2.01-4.527C3.277 1.3 4.804.446 6.62.124c.301-.053.606-.083.91-.124h.593Z"
      fill="#018064"
    />
    <Path
      d="M7.486 9.433c.038-.063.063-.125.106-.168 2.336-2.333 4.674-4.663 7.01-6.996.175-.175.363-.294.623-.245.438.084.636.591.368.948-.04.054-.09.101-.138.15-2.502 2.497-5.006 4.994-7.51 7.49-.356.356-.691.349-1.03-.02-.971-1.052-1.941-2.105-2.91-3.16-.26-.281-.27-.64-.032-.88.247-.25.629-.24.888.034.354.375.7.758 1.05 1.137l1.575 1.71Z"
      fill="#018064"
    />
  </Svg>
)

export default SvgComponent
