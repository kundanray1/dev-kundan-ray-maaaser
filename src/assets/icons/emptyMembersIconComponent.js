import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={60}
      height={51}
      viewBox="0 0 60 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M36.207 8.666c2.775 1.74 4.72 4.683 5.074 8.1a8.753 8.753 0 003.719.833c4.86 0 8.8-3.94 8.8-8.8A8.8 8.8 0 0045 0c-4.814.001-8.72 3.87-8.793 8.666zm-5.765 18.018a8.8 8.8 0 100-17.599 8.801 8.801 0 00-8.8 8.8c0 4.86 3.94 8.799 8.8 8.799zm3.733.6h-7.467c-6.212 0-11.267 5.055-11.267 11.267v9.131l.024.143.629.197c5.928 1.853 11.08 2.47 15.319 2.47 8.28 0 13.08-2.36 13.376-2.51l.588-.298h.063v-9.133c.002-6.212-5.052-11.268-11.265-11.268zm14.559-9.085h-7.41a10.845 10.845 0 01-3.346 7.554c5.522 1.642 9.562 6.763 9.562 12.812v2.814c7.316-.268 11.532-2.342 11.81-2.481l.587-.298H60v-9.135C60 23.253 54.946 18.2 48.734 18.2zM15.002 17.6a8.742 8.742 0 004.68-1.358 10.89 10.89 0 014.093-6.946c.01-.165.025-.328.025-.494a8.8 8.8 0 10-8.798 8.798zm7.902 8.153a10.851 10.851 0 01-3.344-7.512c-.275-.02-.547-.042-.827-.042h-7.466C5.054 18.2 0 23.253 0 29.465v9.133l.023.141.63.199c4.755 1.484 9 2.169 12.687 2.384v-2.757c.002-6.05 4.04-11.168 9.564-12.812z"
        fill="#0BB3F3"
      />
    </Svg>
  )
}

export default SvgComponent
