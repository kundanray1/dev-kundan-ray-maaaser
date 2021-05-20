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
  password,
  style,
  focus,
  ...props
}) => {
  const [toggleSecure, setToggleSecure] = useState(false);
  const isSecure = toggleSecure ? false : password;
  const inputStyles = [styles.input, full && styles.full, style];

  const inputType = email
    ? "email-address"
    : number
    ? "numeric"
    : phone
    ? "phone-pad"
    : "default";

  const renderToggle = () => {
    if (!password) return null;
    return (
      <TouchableOpacity
        style={styles.toggle}
        onPress={() => setToggleSecure(!toggleSecure)}
      >
        {password && (
          <Icon.Ionicons
            color={theme.colors.solidGray}
            size={theme.sizes.font * 1.5}
            name={toggleSecure ? "md-eye" : "md-eye-off"}
          />
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ marginTop: 5}}>
    {label?
      <View style={styles.labelContainer}>

        <Text
          bold
          style={{ fontSize: 16}}
          color={focus?theme.colors.primary2:theme.colors.black}
        >
          {label}
        </Text>
      </View>:
      <View/>
    }
      <TextInput
        style={inputStyles}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        returnKeyType="next"
        {...props}
      />
      {renderToggle()}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.solidGray,
    borderBottomWidth: 1,
    fontSize: theme.sizes.inputFont,
    color: theme.colors.solidGray,
    height: 30,
    paddingTop:10
  },

  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:0
  },
  toggle: {
    position: "absolute",
    alignItems: "flex-end",
    width: theme.sizes.base * 2,
    height: theme.sizes.base * 1,
    top: theme.sizes.base * 1.5,
    right: 0,
  },
  full: {
    width: width - 50,
  },
});
