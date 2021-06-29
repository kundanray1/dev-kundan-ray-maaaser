import React from "react";
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Text } from "../../../components/Index.js";
import Dummy from "./Dummy.js";

const More = ({navigation}) => {
  const RenderOptions = ({ image, label }) => (
    <TouchableOpacity activeOpacity={0.8} style={{ marginVertical: 10 }} onPress={()=>navigation.navigate("Members")}>
    <Block row style={{
            flex: 1,
            alignItems: "center",

          }}>
       {/* <ImageBackground
          style={{
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          imageStyle={{
            borderRadius: 4,
          }}
          source={require("../../../assets/icons/moreScreenIconBackground.png")}
        >
          <Image source={image} style={{ height: 18, width: 18 }} />
        </ImageBackground>*/}
        {image}
          <Text
            style={{ fontSize: 18, fontWeight: "700",paddingHorizontal:14 }}
            color={theme.colors.solidGray}
          >
            {label}{" "}
          </Text>
    </Block>

    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <Block style={{ flex: 0, marginTop: 10, paddingHorizontal: 16 }}>
        <FlatList
          data={Dummy}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
          renderItem={(post) => (
            <RenderOptions image={post.item.image} label={post.item.label} />
          )}
        />
      </Block>
    </SafeAreaView>
  );
};

export default More;
