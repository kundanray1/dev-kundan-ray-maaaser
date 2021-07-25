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

const ReceiverViewProfile = ({ navigation,receiverProfileData }) => {
    return (
    <>
      <SafeAreaView style={{ flex: 1, top: StatusBar.currentHeight }}>
        <Block
          style={{
            flex: 0.8,
            alignItems: "center",
            backgroundColor: "#FBFBFB"
          }}
        >
          <ImageBackground
            style={{
              height: "29%",
              width: "100%",
              flex: 1,
            backgroundColor: "#FBFBFB"

            }}
            imageStyle={{
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
            source={require("../../../../assets/images/backgroundColor.png")}
          >
            <Block
              style={{
                paddingHorizontal: 16,
                paddingBottom:4,
              }}
            >
              <Block
                style={{
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
                                       {receiverProfileData.receiverProfile.clienttype == 1 ? "Full Name" : "Company Name"}

                  </Text>
                  <Block row style={{ flex: 0 }}>
                    <Text
                      color={theme.colors.solidGray}
                      style={{ fontSize: 15, marginRight: 8 }}
                    >
                      {receiverProfileData.receiverProfile.account.fullname}
                    </Text>
                    {receiverProfileData.receiverProfile.account.accountstatus == 2 ? (
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
                    Bio
                  </Text>
                  <Text color={theme.colors.solidGray} style={{ fontSize: 15 }} numberOfLines={3}>
                    {
                      receiverProfileData.receiverProfile.bio==""?
                    "Not available":receiverProfileData.receiverProfile.bio
                    }
                  </Text>
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
                    {receiverProfileData.receiverProfile.account.email}
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
                    {receiverProfileData.receiverProfile.clienttype == 1 ? "Individual" : "Organization"}
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
                    receiverProfileData.receiverProfile.addressesList.length==0?
                  <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                    Not available
                    </Text>:
                    <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                    {receiverProfileData.receiverProfile.addressesList[0].street1} {receiverProfileData.receiverProfile.addressesList[0].street2}, {receiverProfileData.receiverProfile.addressesList[0].city} {receiverProfileData.receiverProfile.addressesList[0].state}
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
                    receiverProfileData.receiverProfile.addressesList.length==0?
                  <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                    Not available
                    </Text>:
                    <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                    {receiverProfileData.receiverProfile.addressesList[0].zip}
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
          {receiverProfileData.receiverProfile.profilepic !== "" ? (
            <Image
              source={{ uri: receiverProfileData.receiverProfile.profilepic }}
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
        <Block style={{flex:0.35,backgroundColor: "#FBFBFB"}}>
        </Block>
      </SafeAreaView>
      <FloatingButton
        iconComponent={<EditIconComponent/>}
        onPress={() => navigation.navigate("Receiver Edit Profile")}
      />
    </>
  );
};

export default ReceiverViewProfile;
