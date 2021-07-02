import React from "react";
import { Image,Dimensions } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block.js";
import Text from "./Text.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const HEIGHT=Dimensions.get("window").height
export default Empty = ({iconName, title }) => {
  return (
    <Block center style={{marginTop:HEIGHT/5}}>
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
