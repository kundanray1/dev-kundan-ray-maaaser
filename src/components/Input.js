import React,{useState} from "react";
import { StyleSheet, View, TextInput, Dimensions,TouchableOpacity } from "react-native";
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
  ...props
}) => {
  const[toggleSecure,setToggleSecure]=useState(false)
  const isSecure = toggleSecure ? false : password;
  const inputStyles = [styles.input, full && styles.full,style];

  const inputType = email
    ? "email-address"
    : number
    ? "numeric"
    : phone
    ? "phone-pad"
    : "default";

 const renderToggle=()=>{
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
    }
  return (
    <View style={{marginTop:4}}>
      <View style={styles.labelContainer}>
        <Text bold style={{fontSize:18}}>
          {label}
        </Text>
      </View>
      <TextInput
        style={inputStyles}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        returnKeyType='next'
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
    borderBottomWidth: 1.5,
    fontSize: theme.sizes.inputFont,
    color: theme.colors.solidGray,
    height: 40,
  },
  
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
   toggle: {
        position: "absolute",
        alignItems: "flex-end",
        width: theme.sizes.base * 2,
        height: theme.sizes.base * 1,
        top: theme.sizes.base * 2,
        right:0
    },
  full: {
    width: width - 50,
  },
});