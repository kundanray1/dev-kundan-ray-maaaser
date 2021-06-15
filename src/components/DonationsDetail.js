import React from "react";
import {
  Image,
} from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";

export default DonationsDetail= ({ profilePic,name,amount,date,textColor }) => {
    return (
    
        <Block
          row
          style={{
            paddingVertical: 5,
            borderRadius: 5,
            backgroundColor: theme.colors.white,
          }}
        >
          <Block
            row
            style={{
              flex:1,
              alignItems: "flex-start",
            }}
          >
            <Image
              source={profilePic}
              style={{ height: 40, width: 40, marginRight: 10 }}
            />
           
          </Block>
           <Block style={{
              flex:4,
            }}>
            <Text style={{fontSize:18,fontWeight:"700"}}>{name}</Text>
            <Text style={{fontSize:14,fontWeight:"700"}} color={theme.colors.solidGray}>{date}</Text>
            </Block>
          <Block
            middle
            style={{
              flex:1,
              alignItems: "flex-end",
            }}
          >
            <Text color={textColor} style={{fontSize:16,fontWeight:"700"}}>{"\u0024"}{amount}</Text>
          </Block>
      </Block>
    );
  };

