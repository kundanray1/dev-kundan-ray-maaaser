import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.157 6.274c.54 0 .98-.44.98-.98v-.98h-1.96v.98c0 .54.44.98.98.98z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M5.294 6.274c.54 0 .98-.44.98-.98v-.98h-1.96v.98c0 .54.44.98.98.98z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M8.392 14.188c.931.1 1.816.434 2.588.983V11.81a5.447 5.447 0 01-2.588.982v1.396z"
        fill="url(#prefix__paint2_linear)"
      />
      <Path
        d="M5.255 13.49c0 .54.44.98.98.98h.98v-1.96h-.98c-.54 0-.98.44-.98.98z"
        fill="url(#prefix__paint3_linear)"
      />
      <Path
        d="M8.431 6.274c.541 0 .98-.44.98-.98v-.98h-1.96v.98c0 .54.44.98.98.98z"
        fill="url(#prefix__paint4_linear)"
      />
      <Path
        d="M11.569 6.274c.54 0 .98-.44.98-.98v-.98h-1.96v.98c0 .54.439.98.98.98z"
        fill="url(#prefix__paint5_linear)"
      />
      <Path
        d="M7.329 0H1.765C.792 0 0 .792 0 1.765v1.377h11.413L7.33 0z"
        fill="url(#prefix__paint6_linear)"
      />
      <Path
        d="M15.686 5.294v-.98h-1.96v.98a.981.981 0 001.96 0z"
        fill="url(#prefix__paint7_linear)"
      />
      <Path
        d="M18.824 5.294v-.98h-1.961v.98a.981.981 0 001.96 0z"
        fill="url(#prefix__paint8_linear)"
      />
      <Path
        d="M18.235 0H9.26l4.084 3.142H20V1.765C20 .792 19.208 0 18.235 0z"
        fill="url(#prefix__paint9_linear)"
      />
      <Path
        d="M17.843 7.45a2.15 2.15 0 01-1.569-.678 2.152 2.152 0 01-3.137 0 2.152 2.152 0 01-3.137 0 2.152 2.152 0 01-3.137 0 2.152 2.152 0 01-3.138 0 2.15 2.15 0 01-1.568.679A2.16 2.16 0 010 5.294v12.941C0 19.208.792 20 1.765 20h16.47c.973 0 1.765-.792 1.765-1.765V5.294a2.16 2.16 0 01-2.157 2.157zM3.137 10.04c0-.325.264-.588.588-.588h.628a.588.588 0 010 1.176h-.628a.588.588 0 01-.588-.588zm9.02 6.275a.59.59 0 01-.93.478l-.92-.657a4.28 4.28 0 00-2-.773.587.587 0 01-.503.285H6.477l.324 1.132a.589.589 0 01-1.131.324l-.496-1.737a2.158 2.158 0 01-1.096-1.876 2.16 2.16 0 012.157-2.157h1.569c.214 0 .4.114.503.285a4.28 4.28 0 002-.773l.92-.657c.388-.278.93 0 .93.478v5.648zm1.192-5.436l.941-.941a.588.588 0 11.832.832l-.941.94a.588.588 0 11-.832-.831zm1.773 6.165a.588.588 0 01-.832 0l-.941-.941a.588.588 0 01.832-.832l.94.941c.23.23.23.603 0 .832zm.211-2.965h-1.255a.588.588 0 010-1.176h1.255a.588.588 0 110 1.176z"
        fill="url(#prefix__paint10_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={2.157}
          y1={4.313}
          x2={2.157}
          y2={6.274}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={5.294}
          y1={4.313}
          x2={5.294}
          y2={6.274}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={9.686}
          y1={11.81}
          x2={9.686}
          y2={15.171}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint3_linear"
          x1={6.235}
          y1={12.51}
          x2={6.235}
          y2={14.47}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint4_linear"
          x1={8.431}
          y1={4.313}
          x2={8.431}
          y2={6.274}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint5_linear"
          x1={11.569}
          y1={4.313}
          x2={11.569}
          y2={6.274}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint6_linear"
          x1={5.707}
          y1={0}
          x2={5.707}
          y2={3.142}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint7_linear"
          x1={14.706}
          y1={4.313}
          x2={14.706}
          y2={6.274}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint8_linear"
          x1={17.843}
          y1={4.313}
          x2={17.843}
          y2={6.274}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint9_linear"
          x1={14.63}
          y1={0}
          x2={14.63}
          y2={3.142}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint10_linear"
          x1={10}
          y1={5.294}
          x2={10}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0BB3F3" />
          <Stop offset={1} stopColor="#037CC4" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
