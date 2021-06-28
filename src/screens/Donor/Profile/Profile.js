import React, { useState, useEffect } from "react";
import {
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Text } from "../../../components/Index.js";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import API from "../../../api/API.js";
import ViewProfileIconComponent from "../../../assets/icons/viewProfileIconComponent.js";
import ChangePasswordIconComponent from "../../../assets/icons/changePasswordIconComponent.js";
import ArrowRightIconComponent from "../../../assets/icons/arrowRightIconComponent.js";
import UserIconComponent from "../../../assets/icons/userIconComponent.js";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const Profile = ({ navigation, loginData, balanceData }) => {
  const [image, setImage] = useState(null);
  //select image function
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
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
    <SafeAreaView style={{ flex: 1, top: StatusBar.currentHeight }}>
      <Block
        style={{
          flex: 0.35,
          alignItems: "center",
        }}
      >
        <ImageBackground
          style={{
            height: "55%",
            width: "100%",
            flex: 1,
            backgroundColor:"#E5E5E5"
          }}
          imageStyle={{
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
          source={require("../../../assets/images/backgroundColor.png")}
        >
          <Block
            style={{
              flex: 0.6,
              // marginTop:40,
              paddingHorizontal: 16,
            }}
          >
            <Block
              center
              style={{
                flex: 0,
                borderRadius: 4,
                elevation: 4,
                paddingTop: HEIGHT / 14,
                paddingBottom: 4,
                marginTop: HEIGHT / 10,
                backgroundColor: theme.colors.white,
              }}
            >
              <Block row center style={{ flex: 0 }}>
                <Text
                  style={{ fontSize: 20, fontWeight: "700", marginRight: 8 }}
                  color={theme.colors.solidGray}
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
              <Text
                style={{ fontSize: 24, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                {"\u0024"}
                {balanceData.balance}
              </Text>
              <Text
                color={theme.colors.solidGray}
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                Balance
              </Text>
            </Block>
          </Block>
        </ImageBackground>
        <TouchableOpacity
          onPress={pickImage}
          style={{ zIndex: 1, position: "absolute", marginTop: HEIGHT / 20 }}
        >
          {loginData.user.profilepic !== "" ? (
            <Image
              source={{ uri: loginData.user.profilepic }}
              style={{
                height: HEIGHT * 0.105,
                width: WIDTH * 0.2,
                borderRadius: 100,
              }}
            />
          ) : (
            <UserIconComponent  height={ HEIGHT * 0.105} width= {WIDTH * 0.2} style={{backgroundColor: theme.colors.white,borderRadius: 50}}/>

          )}
        </TouchableOpacity>
      </Block>
      <Block
        style={{
          flex: 0.65,
          paddingHorizontal: 16,
          backgroundColor:"#E5E5E5"

        }}
      >
        <Block
          style={{
            flex: 0,
            paddingVertical: HEIGHT / 80,
            paddingHorizontal: 24,
            borderRadius: 4,
            shadowRadius: 4,
            elevation: 4,
            backgroundColor: theme.colors.white,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("View Profile")}
            style={{
              flex: 0,
              flexDirection: "row",
            }}
          >
            <Block row center style={{ paddingVertical: 10 }}>
              <ViewProfileIconComponent />
              <Text
                color={theme.colors.solidGray}
                style={{ fontSize: 16, fontWeight: "700",marginLeft:14 }}
                color={theme.colors.solidGray}
              >
                View Profile
              </Text>
            </Block>
            <Block
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <ArrowRightIconComponent />
            </Block>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Change Password")}
            style={{
              flex: 0,
              flexDirection: "row",
              borderTopWidth: 1,
              borderColor: theme.colors.gray2,
            }}
          >
            <Block row center style={{ paddingVertical: 10 }}>
              <ChangePasswordIconComponent />
              <Text
                color={theme.colors.solidGray}
                style={{ fontSize: 16, fontWeight: "700",marginLeft:14 }}
                color={theme.colors.solidGray}
              >
                Change Password
              </Text>
            </Block>
            <Block
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <ArrowRightIconComponent />
            </Block>
          </TouchableOpacity>
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default Profile;
