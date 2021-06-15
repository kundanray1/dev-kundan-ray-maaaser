import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import * as theme from "../constants/theme";
import { LinearGradient } from 'expo-linear-gradient';
const { width } = Dimensions.get("window");

export default OutlinedButton = ({ style, full, opacity, children, ...props }) => {
  const buttonStyles = [styles.button, full && styles.full, style];

  return (

    <LinearGradient colors={[theme.colors.primary1, theme.colors.primary2]} start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }} style={buttonStyles}>
       <TouchableOpacity
      activeOpacity={opacity || 0.8}
      style={styles.outlinedStyles}
      {...props}
    >
       {children}
       </TouchableOpacity>
  </LinearGradient>
    
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 2,
    height: 46,
    padding:1.2,
  },
  outlinedStyles: {
    backgroundColor: theme.colors.white,
    height: '100%',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  full: {
    width: width - 50,
  },
});
