import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import * as theme from "../constants/theme";
import { LinearGradient } from 'expo-linear-gradient';
const { width } = Dimensions.get("window");

export default Button = ({ style, full, opacity, children, ...props }) => {
  const buttonStyles = [styles.button, full && styles.full, style];
  return (
    <TouchableOpacity
      activeOpacity={opacity || 0.8}
      {...props}
    >
     <LinearGradient colors={['#068DD3', '#0BB3F3']} start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={buttonStyles}>
       {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 2,
    height: 46,
    paddingVertical: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  full: {
    width: width - 50,
  },
});
