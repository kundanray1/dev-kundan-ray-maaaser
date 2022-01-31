import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={40}
      height={46}
      viewBox="0 0 40 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4 0C.306 0 0 5.66 0 9.338c0 .73.604 1.329 1.333 1.329h9.334C10.855 2.766 6.738 0 4 0z"
        fill="#E1E6F0"
      />
      <Path
        d="M34.667 0H4c2.738 0 4.189 2.766 4 10.667v33.51c0 .738.596 1.334 1.333 1.334h29.334c.737 0 1.333-.596 1.333-1.333V9.333C40 2.452 37.245 0 34.667 0z"
        fill="#F3F5F9"
      />
      <Path
        d="M40 44.178V9.333C40 2.452 37.245 0 34.667 0H24v45.511h14.667c.737 0 1.333-.596 1.333-1.333z"
        fill="#E1E6F0"
      />
      <Path
        d="M20 40.089h-5.333a1.333 1.333 0 110-2.667H20a1.333 1.333 0 110 2.667z"
        fill="#FB9"
      />
      <Path
        d="M33.333 40.089H28a1.333 1.333 0 110-2.667h5.333a1.333 1.333 0 110 2.667z"
        fill="#FF9680"
      />
      <Path
        d="M20 21.333h8a1.333 1.333 0 100-2.666h-8a1.333 1.333 0 100 2.666zM14.667 26.667h18.666a1.333 1.333 0 100-2.667H14.667a1.333 1.333 0 100 2.667zM33.333 29.333H14.667a1.332 1.332 0 100 2.667h18.666a1.333 1.333 0 100-2.667z"
        fill="#FB9"
      />
      <Path
        d="M29.333 20c0-.737-.596-1.333-1.333-1.333h-4v2.666h4c.737 0 1.333-.596 1.333-1.333zM34.667 25.333c0-.737-.597-1.333-1.334-1.333H24v2.667h9.333c.737 0 1.334-.597 1.334-1.334zM34.667 30.667c0-.737-.597-1.334-1.334-1.334H24V32h9.333c.737 0 1.334-.596 1.334-1.333z"
        fill="#FF9680"
      />
    </Svg>
  )
}

export default SvgComponent
