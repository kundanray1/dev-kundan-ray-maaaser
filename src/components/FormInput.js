import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Text from "./Text";
import * as theme from "../constants/theme";
import * as Icon from "@expo/vector-icons";
const { width } = Dimensions.get("window");

export default Input = ({
  label,
  rightLabel,
  full,
  email,
  phone,
  number,
  style,
  focus,
  ...props
}) => {
  const inputStyles = [styles.input, full && styles.full, style];
  const inputType = email
    ? "email-address"
    : number
    ? "numeric"
    : phone
    ? "phone-pad"
    : "default";

  return (
    <View style={{ marginTop: 10}}>
    {label?
      <View style={styles.labelContainer}>

        <Text
          bold
          style={{ fontSize: 18,fontWeight:"500"}}
          color={focus?theme.colors.primary2:theme.colors.black}
        >
          {label}
        </Text>
      </View>:
      <View/>
    }
      <TextInput
        style={inputStyles}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        returnKeyType="next"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.solidGray,
    fontSize: 18,
    color: theme.colors.solidGray,
    height: 40,
    borderWidth:1,
    paddingHorizontal:8
  },

  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:0
  },
  full: {
    width: width - 50,
  },
});
