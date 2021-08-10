import React, { useState } from "react";
import {
  Image,
  Dimensions,
  Share,
} from "react-native";
import {
  Button,
  OutlinedButton,
  Block,
  Text,
} from "./../../../components/Index.js";
import TopLeftBorderIconComponent from "./../../../assets/icons/TopLeftBorderIconComponent";
import TopRightBorderIconComponent from "./../../../assets/icons/TopRightBorderIconComponent";
import BottomLeftBorderIconComponent from "./../../../assets/icons/BottomLeftBorderIconComponent";
import BottomRightBorderIconComponent from "./../../../assets/icons/BottomRightBorderIconComponent";
import * as theme from "./../../../constants/theme.js";
import SvgQRCode from "react-native-qrcode-svg";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { showMessage } from "react-native-flash-message";

const HEIGHT = Dimensions.get("window").height;
export default SubCampaignQRCode = ({  route }) => {
  const { title, subcampaignstarter, subcampaignid } = route.params;
  const [svg, setSvg] = useState();
  function getDataURL() {
    svg.toDataURL(callback);
  }

  async function callback(dataURL) {
    const data = `data:image/png;base64,${dataURL}`;
    const base64Code = data.split("data:image/png;base64,")[1];

    const filename = FileSystem.documentDirectory + "QRcode.png";
    await FileSystem.writeAsStringAsync(filename, base64Code, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      await MediaLibrary.saveToLibraryAsync(filename);
      showMessage({
      message: "Downloaded successfully",
      type: "success",
    });

    }
  }
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `https://maaser-api.brilltech.com/sub/campaign/${subcampaignid}`,
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
            source={require("../../../assets/icons/logo.png")}
            style={{ height: 70, width: 70 }}
          />
        </Block>
        <Block row style={{ paddingHorizontal: 100, marginTop: HEIGHT * 0.08 }}>
          <Block style={{ alignItems: "flex-start" }}>
            <TopLeftBorderIconComponent />
          </Block>
          <Block style={{ alignItems: "flex-end" }}>
            <TopRightBorderIconComponent />
          </Block>
        </Block>
        <Block
          style={{
            flex: 1,
            justifyContent: "center",
            paddingVertical: HEIGHT / 16,
            marginBottom:8
            
          }}
        >
          <SvgQRCode
            size={HEIGHT / 6}
            value={`https://maaser-api.brilltech.com/sub/campaign/${route.params.subcampaignid}`}
            getRef={(c) => setSvg(c)}
          />
        </Block>
        <Block row style={{ paddingHorizontal: 100 }}>
          <Block style={{ alignItems: "flex-start" }}>
            <BottomLeftBorderIconComponent />
          </Block>
          <Block style={{ alignItems: "flex-end" }}>
            <BottomRightBorderIconComponent />
          </Block>
        </Block>
      </Block>
      <Block center>
        <Block center style={{ flex: 0 }}>
          <Text
            style={{
              color: theme.colors.primary2,
              fontSize: 16,
              textTransform: "capitalize",
              marginTop: 10,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: theme.colors.solidGray,
              fontWeight: "700",
              fontSize: 16,
              marginTop: 6,
              textTransform: "capitalize",
            }}
          >
            {subcampaignstarter}
          </Text>
          <Text
            style={{
              color: "#333333",
              fontWeight: "500",
              fontSize: 16,
              marginTop: 18,
            }}
          >
            Scan QR code for sub campaign details
          </Text>
        </Block>
        <Block middle>
          <Button full onPress={() => getDataURL()}>
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

          <OutlinedButton full onPress={onShare}>
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

