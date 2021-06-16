import React from "react";
import { Image } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block.js";
import Text from "./Text.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default Empty = ({iconName, title }) => {
  return (
    <Block center middle style={{marginTop:10}}>
        <MaterialCommunityIcons
                      name={iconName}
                      size={100}
                      color={theme.colors.primary2}
                    />
      <Text color={theme.colors.gray} style={{fontSize:16,fontWeight:"700"}}>
        {title}
      </Text>
    </Block>
  );
};
