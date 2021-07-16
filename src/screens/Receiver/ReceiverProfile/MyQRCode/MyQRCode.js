import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Modal,
  View,
  FlatList,
  Share,
} from "react-native";
import {
  Button,
  OutlinedButton,
  Block,
  Text,
} from "./../../../../components/Index.js";
import ProfileQRcodeIcon from "./../../../../assets/icons/profileQRCodeIconComponent";
import TopLeftBorderIconComponent from "./../../../../assets/icons/TopLeftBorderIconComponent";
import TopRightBorderIconComponent from "./../../../../assets/icons/TopRightBorderIconComponent";
import BottomLeftBorderIconComponent from "./../../../../assets/icons/BottomLeftBorderIconComponent";
import BottomRightBorderIconComponent from "./../../../../assets/icons/BottomRightBorderIconComponent";
import * as theme from "./../../../../constants/theme.js";
import { shareIcon } from "./Dummy";
import SvgQRCode from "react-native-qrcode-svg";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
export default MyQRCode = ({ navigation,loginData}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "What the user wants to share to other it could be link or any msg",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Block>
      <Block
        style={{
          alignItems: "center",
        }}
      >
        <Block style={{ marginTop: HEIGHT * 0.025 }}>
          <Image
            source={require("../../../../assets/icons/logo.png")}
            style={{ height: 70, width: 70 }}
          />
        </Block>
        <Block row style={{paddingHorizontal:100,marginTop:HEIGHT * 0.08}}>
          <Block style={{alignItems:"flex-start"}}>
            <TopLeftBorderIconComponent/>
          </Block>
          <Block style={{alignItems:"flex-end"}}>
            <TopRightBorderIconComponent/>
          </Block>
        </Block>
        <Block style={{flex:1,justifyContent:"center",paddingVertical:HEIGHT/16}}>
          <SvgQRCode size={HEIGHT/6} value={`https://maaser-api.brilltech.com/account/profile/${loginData.user.account.accountid}`}/>
        </Block>
        <Block row style={{paddingHorizontal:100}}>
          <Block style={{alignItems:"flex-start"}}>
            <BottomLeftBorderIconComponent
            />
          </Block>
          <Block style={{alignItems:"flex-end"}}>
            <BottomRightBorderIconComponent
            />
          </Block>
        </Block>


      </Block>
      <Block center>
        <Block center style={{ flex: 0 }}>
          <Text
            style={{
              color: theme.colors.primary2,
              fontWeight: "700",
              fontSize: 20,
              textTransform: "capitalize",
              marginTop: 10,
            }}
          >
           {loginData.user.account.fullname}
          </Text>
          <Text
            style={{
              color: theme.colors.solidGray,
              fontWeight: "700",
              fontSize: 20,
              marginTop: 6,
              textTransform: "capitalize",
            }}
          >
                    {loginData.user.account.email}
          </Text>
          <Text
            style={{
              color: "#333333",
              fontWeight: "500",
              fontSize: 18,
              marginTop: 18,
            }}
          >
            Scan QR code for campaign details
          </Text>
        </Block>
        <Block middle>
          <Button full>
            <Text button style={{ fontSize: 18 }}>
              Download QR
            </Text>
          </Button>
          <Block
            row
            center
            style={{
              flex: 0,
              paddingVertical: 16,
            }}
          >
            <Block style={{ height: 1, backgroundColor: theme.colors.black }} />
            <Text
              bold
              center
              style={{
                color: theme.colors.primary1,
                paddingHorizontal: 3,
                textTransform: "uppercase",
              }}
            >
              Or
            </Text>
            <Block style={{ height: 1, backgroundColor: theme.colors.black }} />
          </Block>

          <OutlinedButton
            full
            // onPress={() => setConfirmationSuccessfulVisible(true)}
            onPress={onShare}
          >
            <Text
              outlinedButton
              style={{ color: theme.colors.primary1, fontSize: 18 }}
            >
              Share
            </Text>
          </OutlinedButton>
        </Block>
      </Block>
    </Block>
  );
};
