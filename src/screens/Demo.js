import React, { useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, Image } from "react-native";
import * as theme from "../../constants/theme.js";
import { Block, Text, Button } from "../../components/Index.js";
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
        center
        style={{
          flex: 0.4,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: theme.colors.primary2,
        }}
      ></Block>

      

      <Block
        style={{
          paddingHorizontal: 16,
          position: "absolute",
          marginTop: 100,
          width: "100%",
        }}
      >
        <Block
          center
          style={{
            paddingTop: 40,
            borderRadius: 4,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 4,
            backgroundColor: theme.colors.white,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            ABC Organization
          </Text>

          <Text center style={{ fontSize: 24, fontWeight: "700" }}>
            {"\u0024"}1234
          </Text>
          <Text
            center
            color={theme.colors.solidGray}
            style={{ fontSize: 16, fontWeight: "700" }}
          >
            Balance
          </Text>
        </Block>
      </Block>

      <TouchableOpacity
        onPress={pickImage}
        style={{
          zIndex: 1,
          alignItems: "center",
          position: "absolute",
          marginTop: 60,
          width: "100%",
        }}
      >
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ width: 60, height: 60, borderRadius: 100 }}
          />
        ) : (
          <Image
            source={require("../../assets/icons/Vector.png")}
            style={{ height: 60, width: 60 }}
          />
        )}

        <Block
          style={{
            backgroundColor: theme.colors.white,
            padding: 2,
            borderRadius: 10,
            position: "absolute",
            marginTop: 40,
          }}
        >
          <Block
            style={{
              backgroundColor: theme.colors.primary2,
              padding: 4,
              borderRadius: 10,
            }}
          >
            <MaterialCommunityIcons name="camera" size={10} color="white" />
          </Block>
        </Block>
      </TouchableOpacity>

      <Block
        style={{
          paddingHorizontal: 26,
          marginTop: 80,
        }}
      >
        <Block style={{}}>
          <Block row style={{ flex: 0, paddingVertical: 5 }}>
            <Block>
              <Text bold style={{ fontSize: 16, fontWeight: "500" }}>
                Email Address
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                abc@gmail.com
              </Text>
            </Block>
          </Block>
          <Block row style={{ flex: 0, paddingVertical: 5 }}>
            <Block>
              <Text bold style={{ fontSize: 16, fontWeight: "500" }}>
                Address
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                San Fransisco
              </Text>
            </Block>
          </Block>
          <Block row style={{ flex: 0, paddingVertical: 5 }}>
            <Block>
              <Text bold style={{ fontSize: 16, fontWeight: "500" }}>
                Country
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                USA
              </Text>
            </Block>
          </Block>
          <Block row style={{ flex: 0, paddingVertical: 5 }}>
            <Block>
              <Text bold style={{ fontSize: 16, fontWeight: "500" }}>
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
