//defining all the necessary theme properties

import {
  Dimensions
} from "react-native";


const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const colors = {
  primary1: "#068DD3",
  primary2: "#0BB3F3",
  blue: "#2E5BFF",
  solidGray:"#5F6062",
  lightblue: "#488eff",
  maroon: "#8B0000",
  lightmaroon: "#9b111e",
  orange: "#CF5300",
  green: "#28a745",
  red: "#dc3545",
  yellow: "#F7C137",
  teal: "#00C1D4",
  purple: "#8C54FF",
  black: "#2E384D",
  black2: "#69707F",
  black3: "#8798AD",
  white: "#FFFFFF",
  gray: "#676767",
  gray2: "#B9C3CD",
  gray3: "#EEF3F5",
  caption: "#B0BAC9",
  input: "#333333", // '#E0E7FF' 20%
  border: "#D6DDF6",
  card: "rgba(46,91,255,0.08)",
  shadow: "rgba(46,91,255,0.07)",
};

const sizes = {
  font: 15,
  inputFont:16,
  h1: 48,
  h2: 34,
  h3: 28,
  h4: 15,
  paragraph: 15,
  caption: 13,
  captionMedium: 12,
  base: 16,
};

const fonts = {
  h1: {
    fontFamily: "sans-serif",
    fontSize: sizes.h1,
    color: colors.black,
    letterSpacing: -0.6,
    lineHeight: 57,
  },
  h2: {
    fontFamily: "sans-serif",
    fontSize: sizes.h2,
    color: colors.black,
    letterSpacing: 0,
    lineHeight: 32,
  },
  h3: {
    fontFamily: "sans-serif",
    fontSize: sizes.h3,
    color: colors.black,
    letterSpacing: 0,
    lineHeight: 32,
  },
  h4: {
    fontFamily: "sans-serif-medium",
    fontSize: sizes.h4,
    color: colors.black,
    letterSpacing: 0,
    lineHeight: 18,
  },
  paragraph: {
    fontFamily: "sans-serif-light",
    fontSize: sizes.paragraph,
    color: colors.black,
    letterSpacing: 0,
    lineHeight: 22,
  },
  paragraphGray: {
    fontFamily: "sans-serif-light",
    fontSize: sizes.paragraph,
    color: colors.gray,
    letterSpacing: 0,
    lineHeight: 22,
  },
  paragraphGray2: {
    fontFamily: "sans-serif-light",
    fontSize: sizes.paragraph,
    color: colors.gray2,
    letterSpacing: 0,
    lineHeight: 22,
  },
  caption: {
    fontFamily: "sans-serif-light",
    fontSize: sizes.caption,
    color: colors.black3,
    letterSpacing: 1.12,
    lineHeight: 15,
  },
  captionMedium: {
    fontFamily: "sans-serif-medium",
    fontSize: sizes.captionMedium,
    color: colors.black3,
    letterSpacing: 1.12,
    lineHeight: 14,
  },
  button: {
    fontFamily: "sans-serif-medium",
    fontSize: sizes.font,
    color: colors.white,
    letterSpacing: 0,
    lineHeight: 21,
  },
  outlinedButton: {
    fontFamily: "sans-serif-medium",
    fontSize: sizes.font,
    color: colors.maroon,
    letterSpacing: 0,
    lineHeight: 21,
  },
};

export { colors, sizes, fonts };
