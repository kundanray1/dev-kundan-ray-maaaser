import React from "react";
import {  SafeAreaView } from "react-native";
import {
  Block,
  Text,
} from "../../../components/Index.js";

const UploadQR = ({navigation}) => {

  return (
    <SafeAreaView >
      <Block style={{flex:0,marginTop:10,paddingHorizontal:16}}>
        <Text style={{ fontSize: 22, fontWeight: "700",paddingVertical:2 }}>Upload View  </Text>
      </Block>
    </SafeAreaView>
  );
};

export default UploadQR;
