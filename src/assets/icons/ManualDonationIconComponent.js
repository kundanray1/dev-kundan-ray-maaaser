import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.602 5.518h5.47c.194 0 .352.157.352.351v1.703c0 .274.3.443.535.3l5.874-3.611a.351.351 0 000-.598L23.958.053a.351.351 0 00-.535.3v1.701a.352.352 0 01-.352.352h-5.47a.422.422 0 00-.422.422v2.269c.001.232.19.421.423.421zM18.721 19.442a3.915 3.915 0 00-.569-.803 4.511 4.511 0 00-.785-.677c-.536-.367-1.33-.728-2.43-1.102-1.11-.377-1.561-.696-1.73-.852-.119-.11-.277-.315-.277-.81 0-.404.107-.692.338-.908.246-.232.622-.344 1.149-.344.487 0 .832.135 1.087.422.286.325.424.787.424 1.413v.372c0 .387.316.702.703.702h1.755a.703.703 0 00.703-.702v-.372c0-1.382-.36-2.514-1.07-3.364a4.094 4.094 0 00-2.069-1.323V9.898a.704.704 0 00-.703-.703h-1.61a.704.704 0 00-.703.703v1.183c-.794.208-1.468.59-2.005 1.135-.77.781-1.16 1.791-1.16 3.004 0 1.156.358 2.125 1.064 2.88.652.699 1.68 1.26 3.13 1.716 1.15.398 1.597.727 1.761.888.197.193.29.44.29.776 0 .38-.115.639-.384.867-.309.263-.726.39-1.273.39-.64 0-1.101-.147-1.412-.448-.302-.295-.449-.723-.449-1.31v-.372a.704.704 0 00-.702-.703H10.03a.704.704 0 00-.702.703v.371c0 1.401.417 2.541 1.239 3.39.606.626 1.394 1.05 2.342 1.26v1.047c0 .387.316.702.703.702h1.601a.703.703 0 00.703-.702v-1.073c.824-.203 1.521-.58 2.073-1.122.792-.777 1.194-1.792 1.194-3.017 0-.764-.155-1.444-.462-2.02zm-1.328 4.43c-.462.454-1.059.765-1.775.926a.702.702 0 00-.553.685v1.044H13.76v-1.021a.707.707 0 00-.569-.689c-.827-.166-1.504-.517-2.013-1.041-.663-.685-1-1.626-1-2.798v-.223h1.468v.223c0 .83.23 1.458.706 1.921.477.464 1.133.69 2.005.69.759 0 1.355-.195 1.825-.594.46-.39.683-.886.683-1.515 0-.564-.183-1.03-.545-1.383-.383-.376-1.082-.74-2.09-1.09-1.319-.413-2.226-.9-2.775-1.487-.553-.593-.834-1.367-.834-2.3 0-.981.308-1.79.915-2.407.448-.454 1.021-.767 1.705-.932a.703.703 0 00.544-.682v-1.153H15.1v1.164c0 .319.22.599.532.68.71.184 1.294.545 1.734 1.073.58.693.873 1.64.873 2.819v.223H16.78v-.223c0-.842-.208-1.489-.638-1.976-.415-.472-.996-.711-1.725-.711-.754 0-1.32.188-1.731.574-.403.377-.607.891-.607 1.529 0 .614.185 1.096.55 1.435.39.359 1.074.707 2.034 1.034 1.025.348 1.752.674 2.224.997.478.329.843.724 1.083 1.177.24.453.362 1 .362 1.623 0 .987-.316 1.799-.939 2.409zm10.692 5.108H18.59c4.178-1.713 7.128-5.824 7.128-10.612 0-6.32-5.142-11.463-11.463-11.463H.425a.425.425 0 100 .851h9.496C5.742 9.47 2.792 13.58 2.792 18.368c0 6.32 5.142 11.463 11.463 11.463h13.83a.425.425 0 100-.851zM3.643 18.368c0-5.852 4.76-10.612 10.612-10.612s10.612 4.76 10.612 10.612-4.76 10.612-10.612 10.612S3.643 24.22 3.643 18.368zm14.51.27a4.511 4.511 0 00-.786-.676c-.536-.367-1.33-.728-2.43-1.102-1.11-.377-1.561-.696-1.73-.852-.119-.11-.277-.315-.277-.81 0-.404.107-.692.338-.908.246-.232.622-.344 1.149-.344.487 0 .832.135 1.087.422.286.325.424.787.424 1.413v.372c0 .387.316.702.703.702h1.755a.703.703 0 00.703-.702v-.372c0-1.382-.36-2.514-1.07-3.364a4.094 4.094 0 00-2.069-1.323V9.898a.704.704 0 00-.703-.703h-1.61a.704.704 0 00-.703.703v1.183c-.794.208-1.468.59-2.005 1.135-.77.781-1.16 1.791-1.16 3.004 0 1.156.358 2.125 1.064 2.88.652.699 1.68 1.26 3.13 1.716 1.15.398 1.597.727 1.761.888.197.193.29.44.29.776 0 .38-.115.639-.384.867-.309.263-.726.39-1.273.39-.64 0-1.101-.147-1.412-.448-.302-.295-.449-.723-.449-1.31v-.372a.704.704 0 00-.702-.703H10.03a.704.704 0 00-.702.703v.371c0 1.401.417 2.541 1.239 3.39.606.626 1.394 1.05 2.342 1.26v1.047c0 .387.316.702.703.702h1.601a.703.703 0 00.703-.702v-1.073c.824-.203 1.521-.58 2.073-1.122.792-.777 1.194-1.792 1.194-3.017 0-.764-.155-1.444-.462-2.02a3.915 3.915 0 00-.569-.804zm-.76 5.235c-.462.453-1.059.764-1.775.925a.702.702 0 00-.553.685v1.044H13.76v-1.021a.707.707 0 00-.569-.689c-.827-.166-1.504-.517-2.013-1.041-.663-.685-1-1.626-1-2.798v-.223h1.468v.223c0 .83.23 1.458.706 1.921.477.464 1.133.69 2.005.69.759 0 1.355-.195 1.825-.594.46-.39.683-.886.683-1.515 0-.564-.183-1.03-.545-1.383-.383-.376-1.082-.74-2.09-1.09-1.319-.413-2.226-.9-2.775-1.487-.553-.593-.834-1.367-.834-2.3 0-.981.308-1.79.915-2.407.448-.454 1.021-.767 1.705-.932a.703.703 0 00.544-.682v-1.153H15.1v1.164c0 .319.22.599.532.68.71.184 1.294.545 1.734 1.073.58.693.873 1.64.873 2.819v.223H16.78v-.223c0-.842-.208-1.489-.638-1.976-.415-.472-.996-.711-1.725-.711-.754 0-1.32.188-1.731.574-.403.377-.607.891-.607 1.529 0 .614.185 1.096.55 1.435.39.359 1.074.707 2.034 1.034 1.025.348 1.752.674 2.224.997.478.329.843.724 1.083 1.177.24.453.362 1 .362 1.623 0 .987-.316 1.799-.939 2.409zm1.328-4.43a3.915 3.915 0 00-.569-.804 4.511 4.511 0 00-.785-.677c-.536-.367-1.33-.728-2.43-1.102-1.11-.377-1.561-.696-1.73-.852-.119-.11-.277-.315-.277-.81 0-.404.107-.692.338-.908.246-.232.622-.344 1.149-.344.487 0 .832.135 1.087.422.286.325.424.787.424 1.413v.372c0 .387.316.702.703.702h1.755a.703.703 0 00.703-.702v-.372c0-1.382-.36-2.514-1.07-3.364a4.094 4.094 0 00-2.069-1.323V9.898a.704.704 0 00-.703-.703h-1.61a.704.704 0 00-.703.703v1.183c-.794.208-1.468.59-2.005 1.135-.77.781-1.16 1.791-1.16 3.004 0 1.156.358 2.125 1.064 2.88.652.699 1.68 1.26 3.13 1.716 1.15.398 1.597.727 1.761.888.197.193.29.44.29.776 0 .38-.115.639-.384.867-.309.263-.726.39-1.273.39-.64 0-1.101-.147-1.412-.448-.302-.295-.449-.723-.449-1.31v-.372a.704.704 0 00-.702-.703H10.03a.704.704 0 00-.702.703v.371c0 1.401.417 2.541 1.239 3.39.606.626 1.394 1.05 2.342 1.26v1.047c0 .387.316.702.703.702h1.601a.703.703 0 00.703-.702v-1.073c.824-.203 1.521-.58 2.073-1.122.792-.777 1.194-1.792 1.194-3.017 0-.764-.155-1.444-.462-2.02zm-1.328 4.43c-.462.453-1.059.764-1.775.925a.702.702 0 00-.553.685v1.044H13.76v-1.021a.707.707 0 00-.569-.689c-.827-.166-1.504-.517-2.013-1.041-.663-.685-1-1.626-1-2.798v-.223h1.468v.223c0 .83.23 1.458.706 1.921.477.464 1.133.69 2.005.69.759 0 1.355-.195 1.825-.594.46-.39.683-.886.683-1.515 0-.564-.183-1.03-.545-1.383-.383-.376-1.082-.74-2.09-1.09-1.319-.413-2.226-.9-2.775-1.487-.553-.593-.834-1.367-.834-2.3 0-.981.308-1.79.915-2.407.448-.454 1.021-.767 1.705-.932a.703.703 0 00.544-.682v-1.153H15.1v1.164c0 .319.22.599.532.68.71.184 1.294.545 1.734 1.073.58.693.873 1.64.873 2.819v.223H16.78v-.223c0-.842-.208-1.489-.638-1.976-.415-.472-.996-.711-1.725-.711-.754 0-1.32.188-1.731.574-.403.377-.607.891-.607 1.529 0 .614.185 1.096.55 1.435.39.359 1.074.707 2.034 1.034 1.025.348 1.752.674 2.224.997.478.329.843.724 1.083 1.177.24.453.362 1 .362 1.623 0 .987-.316 1.799-.939 2.409z"
        fill="#0BB3F3"
      />
      <Path
        d="M14.255 7.755c-5.852 0-10.612 4.76-10.612 10.612S8.403 28.98 14.255 28.98s10.612-4.76 10.612-10.612-4.76-10.612-10.612-10.612zM17.99 24.48c-.552.542-1.249.919-2.073 1.122v1.073a.703.703 0 01-.703.702h-1.601a.704.704 0 01-.703-.702v-1.047c-.948-.21-1.736-.634-2.342-1.26-.822-.848-1.24-1.989-1.24-3.39v-.37c0-.388.316-.704.704-.704h1.763c.387 0 .702.316.702.703v.371c0 .588.147 1.017.45 1.31.31.302.771.45 1.411.45.547 0 .964-.128 1.273-.391.27-.228.383-.488.383-.867 0-.336-.092-.582-.289-.776-.164-.16-.612-.49-1.76-.888-1.452-.456-2.48-1.017-3.131-1.715-.706-.756-1.064-1.725-1.064-2.88 0-1.214.39-2.224 1.16-3.005.537-.546 1.211-.927 2.005-1.135V9.897c0-.388.315-.703.703-.703h1.61c.388 0 .703.315.703.703v1.196a4.094 4.094 0 012.068 1.323c.711.85 1.071 1.982 1.071 3.364v.372a.703.703 0 01-.703.702h-1.755a.704.704 0 01-.703-.702v-.372c0-.626-.139-1.088-.424-1.413-.255-.288-.6-.422-1.087-.422-.527 0-.903.112-1.15.344-.23.216-.337.505-.337.908 0 .495.158.7.277.81.169.156.62.475 1.73.852 1.1.374 1.894.734 2.43 1.102.297.204.56.43.785.677.226.247.416.515.57.803.306.577.46 1.257.46 2.021 0 1.225-.401 2.24-1.193 3.017zM.766 2.393h14.372a.34.34 0 01.34.34v2.445a.34.34 0 01-.34.34H.766a.34.34 0 01-.34-.34V2.733a.34.34 0 01.34-.34z"
        fill="#0BB3F3"
      />
    </Svg>
  )
}

export default SvgComponent