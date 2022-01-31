import React from "react";
import Text from "./Text";
import * as theme from "../constants/theme.js";

export default ErrorMessage = ({ error, visible,...props }) => {
  if (!visible || !error) return null;
  return (
    <Text
      style={{ marginVertical: 5, paddingRight: 15 }}
      bold
      color={theme.colors.red}
      {...props}
    >
      {error}
    </Text>
  );
};
