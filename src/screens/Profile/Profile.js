import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import * as theme from "../../constants/theme.js";
import { Block, Text } from "../../components/Index.js";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Profile = () => {
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
    <SafeAreaView style={{ flex: 1 }}>
      <Block
        style={{
          flex: 0.35,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageBackground
          style={{
            height: "80%",
            width: "100%",
            flex: 1,
            justifyContent: "flex-end",
          }}
          imageStyle={{
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
          source={require("../../assets/images/backgroundColor.png")}
        >
          <Block
            style={{
              flex: 0.5,
              paddingHorizontal: 16,
            }}
          >
            <Block
              center
              style={{
                borderRadius: 4,
                elevation: 4,
                justifyContent: "flex-end",
                backgroundColor: theme.colors.white,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "700" }} color={theme.colors.solidGray}>
                ABC Organization
              </Text>

              <Text style={{ fontSize: 24, fontWeight: "700" }}  color={theme.colors.solidGray}>
                {"\u0024"}1234
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
          style={{ zIndex: 1, position: "absolute" }}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 80, height: 80, borderRadius: 100 }}
            />
          ) : (
            <Image
              source={require("../../assets/icons/Vector.png")}
              style={{ height: 80, width: 80,backgroundColor:theme.colors.white,borderRadius: 100 }}
            />
          )}

          <Block
            style={{
              backgroundColor: theme.colors.white,
              padding: 2,
              borderRadius: 10,
              position: "absolute",
              marginLeft: 58,
              marginTop: 58,
            }}
          >
            <Block
              style={{
                backgroundColor: theme.colors.primary2,
                padding: 2,
                borderRadius: 10,
              }}
            >
              <MaterialCommunityIcons name="camera" size={14} color="white" />
            </Block>
          </Block>
        </TouchableOpacity>
      </Block>
      <Block
        style={{
          flex: 0.7,
          paddingHorizontal: 30,
        }}
      >
        <Block style={{ paddingVertical: 25 }}>
          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text bold style={{ fontSize: 16, fontWeight: "700" }}  color={theme.colors.solidGray}>
                Email Address
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                abc@gmail.com
              </Text>
            </Block>
          </Block>
          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text bold style={{ fontSize: 16, fontWeight: "700" }}  color={theme.colors.solidGray}>
                Address
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                San Fransisco
              </Text>
            </Block>
          </Block>
          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text bold style={{ fontSize: 16, fontWeight: "700" }}  color={theme.colors.solidGray}>
                Country
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                U.S.A
              </Text>
            </Block>
          </Block>
          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text bold style={{ fontSize: 16, fontWeight: "700" }}  color={theme.colors.solidGray}>
                Account Type
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                Organization
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default Profile;
