import React from "react";
import {
  StatusBar,
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import { Block, Text, FloatingButton } from "../../../../components/Index.js";
import {  MaterialIcons } from "@expo/vector-icons";
import API from "../../../../api/API.js";
import ProfileIconComponent from "../../../../assets/icons/profileIconComponent.js";
import EditIconComponent from "../../../../assets/icons/editIconComponent.js";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const ViewProfile = ({ navigation,data,profileData }) => {
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
                                       {profileData.profile.clienttype == 1 ? "Full Name" : "Company Name"}

                  </Text>
                  <Block row style={{ flex: 0 }}>
                    <Text
                      color={theme.colors.solidGray}
                      style={{ fontSize: 15, marginRight: 8 }}
                    >
                      {profileData.profile.account.fullname}
                    </Text>
                    {profileData.profile.account.accountstatus == 2 ? (
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
                    {profileData.profile.account.email}
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
                    {profileData.profile.clienttype == 1 ? "Individual" : "Organization"}
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
                  {
                    profileData.profile.addressesList.length==0?
                  <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                    Not available
                    </Text>:
                    <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                    {profileData.profile.addressesList[0].street1} {profileData.profile.addressesList[0].street2}, {profileData.profile.addressesList[0].city} {profileData.profile.addressesList[0].state}
                  </Text>
                  }
                  
                </Block>

                <Block style={{ flex: 0, paddingVertical: 10 }}>
                  <Text
                    bold
                    style={{ fontSize: 16, fontWeight: "700" }}
                    color={theme.colors.solidGray}
                  >
                    Zip Code
                  </Text>
                  {
                    profileData.profile.addressesList.length==0?
                  <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                    Not available
                    </Text>:
                    <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                    {profileData.profile.addressesList[0].zip}
                  </Text>
                  }
                </Block>
              </Block>
            </Block>
          </ImageBackground>

         <Block
          style={{
            flex: 0,
            zIndex: 1,
            position: "absolute",
            marginTop: HEIGHT / 20,
          }}
        >
          {profileData.profile.profilepic !== "" ? (
            <Image
              source={{ uri: profileData.profile.profilepic }}
              style={{
                height: HEIGHT * 0.105,
                width: WIDTH * 0.2,
                borderRadius: 100,
              }}
            />
          ) : (
           <ProfileIconComponent height={HEIGHT * 0.105} width= {WIDTH * 0.2}/>
          )}
        </Block>
        </Block>
        <Block style={{flex:0.35, backgroundColor:"#E5E5E5"}}>
        </Block>
      </SafeAreaView>
      <FloatingButton
        iconComponent={<EditIconComponent/>}
        onPress={() => navigation.navigate("Edit Profile")}
      />
    </>
  );
};

export default ViewProfile;
