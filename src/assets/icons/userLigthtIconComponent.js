import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={13}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.513 9.982c2.225-.325 3.756-.297 5.984.011a.675.675 0 0 1 .578.673.674.674 0 0 1-.15.425c-.17.207-.342.41-.52.609h.86l.162-.197c.193-.236.298-.532.298-.837 0-.658-.48-1.225-1.14-1.316-2.28-.316-3.873-.346-6.166-.01a1.344 1.344 0 0 0-1.144 1.335c0 .294.096.585.278.82.053.07.106.138.159.205h.837a18.78 18.78 0 0 1-.481-.601.697.697 0 0 1-.143-.425c0-.35.252-.643.588-.692ZM6.5 6.825a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9Zm0 .65a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"
      fill="#5F6062"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 12.35a5.85 5.85 0 1 0 0-11.7 5.85 5.85 0 0 0 0 11.7Zm0 .65a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
      fill="#5F6062"
    />
  </Svg>
)

export default SvgComponent
