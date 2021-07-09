import React from "react";
import {
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Text } from "../../../components/Index.js";
import {  MaterialIcons } from "@expo/vector-icons";
import API from "../../../api/API.js";
import ViewProfileIconComponent from "../../../assets/icons/viewProfileIconComponent.js";
import ChangePasswordIconComponent from "../../../assets/icons/changePasswordIconComponent.js";
import ArrowRightIconComponent from "../../../assets/icons/arrowRightIconComponent.js";
import ProfileIconComponent from "../../../assets/icons/profileIconComponent.js";
import ProfileQRIconComponent from "../../../assets/icons/profileQRIconComponent.js";
import NumberFormat from "react-number-format";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const ReceiverProfile = ({ navigation,data,balanceData }) => {
  return (
    <SafeAreaView style={{ flex: 1, top: StatusBar.currentHeight }}>
     {data.isLoading ? (
              <ActivityIndicator size="large" color={theme.colors.primary2} />
            ) : (
            <>
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
            backgroundColor: "#E5E5E5",
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
                  {data.receiverProfile.account.fullname}
                </Text>
                {data.receiverProfile.account.accountstatus == 2 ? (
                  <MaterialIcons
                    name="verified"
                    size={20}
                    color={theme.colors.primary2}
                  />
                ) : (
                  ""
                )}
              </Block>

              <NumberFormat
                value={balanceData.balance/100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                decimalScale={2}
                fixedDecimalScale={true}
                renderText={(formattedValue) => (
                  <Text
                    style={{ fontSize: 20, fontWeight: "700" }}
                    color={theme.colors.solidGray}
                  >
                    {formattedValue}
                  </Text>
                )}
              />
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
         <Block
          style={{
            flex: 0,
            zIndex: 1,
            position: "absolute",
            marginTop: HEIGHT / 20,
          }}
        >
          {data.receiverProfile.profilepic !== "" ? (
            <Image
              source={{ uri: data.receiverProfile.profilepic }}
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
      <Block
        style={{
          flex: 0.65,
          paddingHorizontal: 16,
          backgroundColor: "#E5E5E5",
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
            onPress={() => navigation.navigate("Receiver View Profile")}
            style={{
              flex: 0,
              flexDirection: "row",
              paddingLeft:4,
              paddingVertical:4
            }}
          >
            <Block row center style={{ paddingVertical: 10 }}>
              <ViewProfileIconComponent />
              <Text
                color={theme.colors.solidGray}
                style={{ fontSize: 16, fontWeight: "700", marginLeft: 14 }}
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
            onPress={() => navigation.navigate("My QR Code")}
            style={{
              flex: 0,
              flexDirection: "row",
              borderTopWidth: 1,
              paddingLeft:4,
              borderColor: theme.colors.gray2,
              paddingVertical:8

            }}
          >
            <Block row center style={{ paddingVertical: 10 }}>
              <ProfileQRIconComponent />
              <Text
                color={theme.colors.solidGray}
                style={{ fontSize: 16, fontWeight: "700", marginLeft: 14 }}
                color={theme.colors.solidGray}
              >
               My QR Code
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
            onPress={() => navigation.navigate("Change Password",{clientType:"receiver"})}
            style={{
              flex: 0,
              flexDirection: "row",
              borderTopWidth: 1,
              paddingLeft:4,
              borderColor: theme.colors.gray2,
              paddingVertical:4

            }}
          >
            <Block row center style={{ paddingVertical: 10 }}>
              <ChangePasswordIconComponent />
              <Text
                color={theme.colors.solidGray}
                style={{ fontSize: 16, fontWeight: "700", marginLeft: 14 }}
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
      </>
      )}
    </SafeAreaView>
  );
};

export default ReceiverProfile;
