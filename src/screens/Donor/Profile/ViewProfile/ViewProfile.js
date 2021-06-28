import React, { useState } from "react";
import {
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import { Block, Text, FloatingButton } from "../../../../components/Index.js";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import API from "../../../../api/API.js";
import UserIconComponent from "../../../../assets/icons/userIconComponent.js";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const ViewProfile = ({ navigation,loginData }) => {
  const [image, setImage] = useState(null);
  //select image function
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1, top: StatusBar.currentHeight }}>
        <Block
          style={{
            flex: 0.65,
            alignItems: "center",
            backgroundColor:"#E5E5E5"

          }}
        >
          <ImageBackground
            style={{
              height: "29%",
              width: "100%",
              flex: 1,
          backgroundColor:"#E5E5E5"

            }}
            imageStyle={{
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
            source={require("../../../../assets/images/backgroundColor.png")}
          >
            <Block
              style={{
                flex: 0.9,
                paddingHorizontal: 16,
              }}
            >
              <Block
                style={{
                  flex: 0,
                  borderRadius: 4,
                  elevation: 4,
                  paddingTop: HEIGHT / 14,
                  paddingBottom: 8,
                  marginTop: HEIGHT / 10,
                  backgroundColor: theme.colors.white,
                  paddingHorizontal: 24,
                }}
              >
                <Block style={{ flex: 0, paddingVertical: 10 }}>
                  <Text
                    bold
                    style={{ fontSize: 16, fontWeight: "700" }}
                    color={theme.colors.solidGray}
                  >
                                       {loginData.user.clienttype == 1 ? "Full Name" : "Company Name"}

                  </Text>
                  <Block row style={{ flex: 0 }}>
                    <Text
                      color={theme.colors.solidGray}
                      style={{ fontSize: 15, marginRight: 8 }}
                    >
                      {loginData.user.account.fullname}
                    </Text>
                    {loginData.user.account.accountstatus == 2 ? (
                      <MaterialIcons
                        name="verified"
                        size={20}
                        color={theme.colors.primary2}
                      />
                    ) : (
                      ""
                    )}
                  </Block>
                </Block>

                <Block style={{ flex: 0, paddingVertical: 10 }}>
                  <Text
                    bold
                    style={{ fontSize: 16, fontWeight: "700" }}
                    color={theme.colors.solidGray}
                  >
                    Email Address
                  </Text>
                  <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                    {loginData.user.account.email}
                  </Text>
                </Block>

                <Block style={{ flex: 0, paddingVertical: 10 }}>
                  <Text
                    bold
                    style={{ fontSize: 16, fontWeight: "700" }}
                    color={theme.colors.solidGray}
                  >
                    Account Type
                  </Text>
                  <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                    {loginData.user.clienttype == 1 ? "Individual" : "Organization"}
                  </Text>
                </Block>

                <Block style={{ flex: 0, paddingVertical: 10 }}>
                  <Text
                    bold
                    style={{ fontSize: 16, fontWeight: "700" }}
                    color={theme.colors.solidGray}
                  >
                    Address
                  </Text>
                  <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                    3764 Wilshire, Los Angeles California
                  </Text>
                </Block>

                <Block style={{ flex: 0, paddingVertical: 10 }}>
                  <Text
                    bold
                    style={{ fontSize: 16, fontWeight: "700" }}
                    color={theme.colors.solidGray}
                  >
                    Zip Code
                  </Text>
                  <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                    {loginData.user.account.email}
                  </Text>
                </Block>
              </Block>
            </Block>
          </ImageBackground>

          <TouchableOpacity
            onPress={pickImage}
            style={{ zIndex: 1, position: "absolute", marginTop: HEIGHT / 20 }}
          >
            {loginData.user.profilepic!=="" ? (
              <Image
                source={{ uri: loginData.user.profilepic }}
                style={{
                  height: HEIGHT * 0.105,
                  width: WIDTH * 0.2,
                  borderRadius: 100,
                }}
              />
            ) : (
            <UserIconComponent  height={ HEIGHT * 0.105} width= {WIDTH * 0.2} style={{backgroundColor: theme.colors.white,borderRadius: 100,paddingTop:20}}/>
            )}
          </TouchableOpacity>
        </Block>
        <Block style={{flex:0.35, backgroundColor:"#E5E5E5"}}>
        </Block>
      </SafeAreaView>
      {/*<FloatingButton
        image={require("../../../../assets/icons/add-m.png")}
        onPress={() => navigation.navigate("Edit Profile")}
      />*/}
    </>
  );
};

export default ViewProfile;
