import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Dimensions,
  ImageBackground,
  Text,
  View
} from "react-native";
import * as theme from "../constants/theme.js";
import {
  Block,
  Empty,
  CampaignCard,
  FloatingButton,
} from "../components/Index.js";
import AddIconComponent from "../assets/icons/addIconComponent";
import BellIconComponent from "../assets/icons/bellIconComponent";
import UserIconComponent from "../assets/icons/userIconComponent";

const HEIGHT = Dimensions.get("window").height
const BwScreen = ({ navigation,header,body,floating }) => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {false ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} style={{ marginTop: 30 }} />
      ) : (
        <Block style={{ flex: 1, marginTop: HEIGHT / 20 }}>

          <ImageBackground
            style={{
              height: "100%",
              width: "100%",
              flex: 0.15,
              backgroundColor: "#FBFBFB",
              justifyContent:'space-around',
            }}
            imageStyle={{
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
            source={require("../assets/images/backgroundColor.png")}
          >
     
         {header}

           
          </ImageBackground>
          <Block>
        {body}
              </Block>
        </Block>
      )}
   {floating}
    </SafeAreaView>
  );
};

export default BwScreen;

















