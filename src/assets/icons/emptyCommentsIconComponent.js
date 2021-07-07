import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={126}
      height={75}
      viewBox="0 0 126 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M81.126 0H44.874A6.882 6.882 0 0038 6.874V29.06c0 3.783 3.07 6.861 6.85 6.875V46l14.468-10.067h21.808A6.882 6.882 0 0088 29.059V6.874A6.882 6.882 0 0081.126 0zm3.944 29.06a3.949 3.949 0 01-3.944 3.944H58.399l-10.62 7.39v-7.39h-2.905a3.949 3.949 0 01-3.944-3.945V6.874a3.949 3.949 0 013.944-3.944h36.252a3.949 3.949 0 013.944 3.944V29.06z"
        fill="#0BB3F3"
      />
      <Path
        d="M51.382 10.352h23.236v2.93H51.382v-2.93zM51.382 16.602h23.236v2.93H51.382v-2.93zM51.382 22.852h23.236v2.93H51.382v-2.93z"
        fill="#0BB3F3"
      />
      <Path
        d="M9.646 70H7.643l-4.915-7.964h-.055l.034.444c.064.848.096 1.623.096 2.325V70H1.319v-9.994h1.983l4.901 7.923h.041c-.009-.105-.027-.486-.055-1.142a39.826 39.826 0 01-.04-1.545v-5.236h1.497V70zm9.313-3.794c0 1.235-.316 2.199-.95 2.892-.633.692-1.515 1.039-2.645 1.039-.707 0-1.331-.16-1.873-.479a3.16 3.16 0 01-1.251-1.374c-.292-.597-.438-1.29-.438-2.078 0-1.226.315-2.183.944-2.871.628-.688 1.515-1.032 2.659-1.032 1.093 0 1.96.353 2.597 1.06.638.701.957 1.649.957 2.843zm-5.503 0c0 1.745.645 2.618 1.935 2.618 1.276 0 1.914-.873 1.914-2.618 0-1.727-.642-2.59-1.928-2.59-.674 0-1.164.223-1.47.67-.3.446-.45 1.086-.45 1.92zm14.321 3.93c-1.143 0-2.014-.332-2.61-.997-.593-.67-.89-1.63-.89-2.878 0-1.272.31-2.25.93-2.933.624-.684 1.524-1.025 2.7-1.025.798 0 1.516.148 2.154.444l-.486 1.292c-.679-.264-1.24-.396-1.681-.396-1.308 0-1.962.868-1.962 2.604 0 .848.162 1.486.485 1.914.328.424.807.636 1.436.636a4.11 4.11 0 002.03-.533v1.401c-.287.169-.595.29-.923.362-.323.073-.718.11-1.183.11zm10.73-3.93c0 1.235-.317 2.199-.95 2.892-.634.692-1.516 1.039-2.646 1.039-.707 0-1.331-.16-1.873-.479a3.159 3.159 0 01-1.251-1.374c-.292-.597-.438-1.29-.438-2.078 0-1.226.314-2.183.943-2.871.63-.688 1.516-1.032 2.66-1.032 1.093 0 1.96.353 2.597 1.06.638.701.957 1.649.957 2.843zm-5.504 0c0 1.745.645 2.618 1.935 2.618 1.276 0 1.914-.873 1.914-2.618 0-1.727-.643-2.59-1.928-2.59-.674 0-1.164.223-1.47.67-.3.446-.45 1.086-.45 1.92zM46.87 70h-1.613v-4.662c0-.579-.11-1.01-.328-1.292-.22-.287-.561-.43-1.026-.43-.62 0-1.075.202-1.367.608-.287.4-.43 1.07-.43 2.01V70h-1.607v-7.56h1.258l.225.99h.082c.21-.36.513-.637.91-.833.4-.196.84-.294 1.319-.294 1.162 0 1.932.396 2.31 1.19h.11c.223-.375.538-.666.943-.876.406-.21.87-.314 1.395-.314.902 0 1.558.228 1.968.683.415.456.622 1.151.622 2.085V70h-1.606v-4.662c0-.579-.112-1.01-.335-1.292-.219-.287-.56-.43-1.025-.43-.625 0-1.083.195-1.374.587-.288.388-.431.984-.431 1.791V70zm13.525 0H58.78v-4.662c0-.579-.109-1.01-.328-1.292-.219-.287-.56-.43-1.025-.43-.62 0-1.076.202-1.367.608-.287.4-.431 1.07-.431 2.01V70h-1.606v-7.56h1.257l.226.99h.082c.21-.36.513-.637.91-.833.4-.196.84-.294 1.319-.294 1.162 0 1.932.396 2.31 1.19h.11c.223-.375.537-.666.943-.876.405-.21.87-.314 1.394-.314.903 0 1.559.228 1.97.683.414.456.621 1.151.621 2.085V70H63.56v-4.662c0-.579-.112-1.01-.335-1.292-.219-.287-.56-.43-1.026-.43-.624 0-1.082.195-1.374.587-.287.388-.43.984-.43 1.791V70zm10.455.137c-1.176 0-2.096-.342-2.762-1.026-.66-.688-.99-1.633-.99-2.837 0-1.235.307-2.205.922-2.912.615-.706 1.46-1.06 2.536-1.06.998 0 1.787.304 2.365.91.58.606.869 1.44.869 2.502v.868H68.75c.023.734.221 1.299.595 1.695.374.392.9.588 1.58.588a5.94 5.94 0 001.243-.123 6.711 6.711 0 001.245-.424v1.306a4.93 4.93 0 01-1.19.397 7.29 7.29 0 01-1.374.116zm-.294-6.617c-.51 0-.92.161-1.23.485-.306.324-.488.795-.547 1.415h3.431c-.009-.624-.159-1.096-.45-1.415-.292-.324-.693-.485-1.204-.485zM82.406 70h-1.613v-4.648c0-.584-.119-1.019-.356-1.306-.232-.287-.603-.43-1.114-.43-.679 0-1.176.2-1.49.6-.315.402-.472 1.074-.472 2.017V70h-1.606v-7.56h1.258l.225.99h.082c.228-.36.552-.637.97-.833.42-.196.885-.294 1.395-.294 1.814 0 2.721.923 2.721 2.768V70zm5.192-1.162c.392 0 .784-.062 1.176-.185v1.21a3.126 3.126 0 01-.69.192 4.487 4.487 0 01-.869.082c-1.522 0-2.283-.802-2.283-2.406v-4.075H83.9v-.71l1.107-.589.547-1.6h.991v1.683h2.153v1.216h-2.153v4.047c0 .388.096.675.287.861.196.183.451.274.766.274zm7.912-.991c0 .738-.269 1.305-.806 1.702-.538.392-1.308.588-2.31.588-1.008 0-1.817-.153-2.428-.458V68.29c.89.41 1.716.615 2.482.615.989 0 1.483-.298 1.483-.895a.71.71 0 00-.164-.479c-.11-.127-.29-.26-.54-.396-.25-.137-.6-.292-1.046-.465-.87-.337-1.46-.675-1.77-1.012-.306-.337-.458-.775-.458-1.312 0-.647.26-1.149.779-1.504.524-.36 1.235-.54 2.133-.54.889 0 1.73.18 2.522.54l-.52 1.21c-.815-.337-1.5-.506-2.057-.506-.847 0-1.271.241-1.271.725 0 .236.109.437.328.601.223.164.706.39 1.449.677.624.241 1.078.462 1.36.663.283.2.493.433.63.697.136.26.204.572.204.937zm4.512-5.407h1.75l1.538 4.286c.232.61.387 1.184.465 1.722h.054a7.13 7.13 0 01.226-.909c.109-.36.688-2.06 1.736-5.1h1.737l-3.234 8.566c-.588 1.572-1.567 2.358-2.939 2.358-.356 0-.702-.038-1.039-.116v-1.271c.241.054.517.082.827.082.775 0 1.319-.45 1.634-1.347l.28-.711-3.035-7.56zm12.096 7.697c-1.176 0-2.097-.342-2.762-1.026-.661-.688-.991-1.633-.991-2.837 0-1.235.308-2.205.923-2.912.615-.706 1.46-1.06 2.536-1.06.998 0 1.786.304 2.365.91.579.606.868 1.44.868 2.502v.868h-5.038c.023.734.221 1.299.595 1.695.374.392.9.588 1.579.588.447 0 .861-.04 1.244-.123a6.69 6.69 0 001.244-.424v1.306a4.93 4.93 0 01-1.189.397 7.29 7.29 0 01-1.374.116zm-.294-6.617c-.511 0-.921.161-1.231.485-.305.324-.487.795-.546 1.415h3.431c-.009-.624-.159-1.096-.451-1.415-.292-.324-.693-.485-1.203-.485zm8.015 5.318c.392 0 .784-.062 1.176-.185v1.21a3.128 3.128 0 01-.691.192 4.485 4.485 0 01-.868.082c-1.522 0-2.283-.802-2.283-2.406v-4.075h-1.032v-.71l1.107-.589.547-1.6h.991v1.683h2.153v1.216h-2.153v4.047c0 .388.096.675.287.861.196.183.451.274.766.274zm2.594.308c0-.333.087-.588.26-.766.173-.178.424-.267.752-.267.332 0 .585.094.759.28.173.183.259.433.259.752 0 .324-.089.582-.266.773-.173.187-.424.28-.752.28s-.579-.093-.752-.28c-.173-.187-.26-.444-.26-.773z"
        fill="#5F6062"
      />
    </Svg>
  )
}

export default SvgComponent
