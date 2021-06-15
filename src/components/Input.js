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
import { Ionicons } from "@expo/vector-icons";
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
          <Ionicons
            color={theme.colors.solidGray}
            size={24}
            style={{
              paddingVertical: 8,
              marginTop:4,
            }}
            name={toggleSecure ? "md-eye" : "md-eye-off"}
          />
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ paddingVertical: 8 }}>
      {label ? (
        <View style={styles.labelContainer}>
          <Text
            bold
            style={{ fontSize: 16 }}
            color={focus ? theme.colors.primary2 : theme.colors.black}
          >
            {label}
          </Text>
        </View>
      ) : (
        <View />
      )}
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
    paddingTop: 2,
  },

  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  toggle: {
    position: "absolute",
    alignItems: "flex-end",
    top: theme.sizes.base * 1.2,
    right: 0,
    paddingHorizontal: 2,
  },
  full: {
    width: width - 50,
  },
});
