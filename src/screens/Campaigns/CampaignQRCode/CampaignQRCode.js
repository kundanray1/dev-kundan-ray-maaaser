import React, { useState } from "react";
import {
  StyleSheet,
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
} from "./../../../components/Index.js";
import ProfileQRcodeIcon from "./../../../assets/icons/profileQRCodeIconComponent";
import TopLeftBorderIconComponent from "./../../../assets/icons/TopLeftBorderIconComponent";
import TopRightBorderIconComponent from "./../../../assets/icons/TopRightBorderIconComponent";
import BottomLeftBorderIconComponent from "./../../../assets/icons/BottomLeftBorderIconComponent";
import BottomRightBorderIconComponent from "./../../../assets/icons/BottomRightBorderIconComponent";
import * as theme from "./../../../constants/theme.js";
import { shareIcon } from "./Dummy";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
export default CampaignQRCode = ({ navigation, campaignDetailsdata }) => {
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const RenderSocialMediaIcon = ({ image, label }) => {
    return (
      <Block
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: 30,
          paddingVertical: 8,
        }}
      >
        <Block style={{ flex: 0, paddingVertical: 6 }}>{image}</Block>
        <Block style={{ flex: 0 }}>
          <Text style={{ fontSize: 12 }}>{label}</Text>
        </Block>
      </Block>
    );
  };
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
  const ConfirmationMessage = () => (
    <SafeAreaView>
      <Modal
        visible={confirmationMessageVisible}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}
        onRequestClose={() => setConfirmationSuccessfulVisible(false)}
      >
        <View style={styles.container}>
          <View
            style={[styles.modal, { width: "100%", paddingHorizontal: 18 }]}
          >
            <Block style={{ flex: 0, alignItems: "center" }}>
              <Block
                style={{
                  flex: 0,
                  alignItems: "center",
                  backgroundColor: "#E2E2E2",
                  width: WIDTH - 280,
                  borderRadius: 10,
                  paddingVertical: 2,
                }}
              />
            </Block>
            <Block style={{ paddingTop: 6, paddingBottom: 14, flex: 0 }}>
              <Text center style={{ fontWeight: "700" }}>
                Share to
              </Text>
            </Block>
            <FlatList
              horizontal
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              data={shareIcon}
              renderItem={(post) => (
                <RenderSocialMediaIcon
                  image={post.item.image}
                  label={post.item.label}
                />
              )}
              keyExtractor={(item) => {
                return item.id.toString();
              }}
            />
          </View>
          <View style={{ width: "100%", backgroundColor: theme.colors.white }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setConfirmationSuccessfulVisible(false)}
              style={{
                flex: 0,
                backgroundColor: theme.colors.white,
                paddingVertical: 14,
                borderTopWidth: 0.5,
              }}
            >
              <Text
                center
                color={theme.colors.primary2}
                style={{ fontSize: 14, fontWeight: "700" }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );

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
        <Block row style={{paddingHorizontal:100,marginTop:HEIGHT * 0.08}}>
          <Block style={{alignItems:"flex-start"}}>
            <TopLeftBorderIconComponent
            />
          </Block>
          <Block style={{alignItems:"flex-end"}}>
            <TopRightBorderIconComponent
            />
          </Block>
        </Block>
        <Block style={{flex:1,justifyContent:"center",paddingVertical:HEIGHT/16}}>
          <ProfileQRcodeIcon height={HEIGHT * 0.4} width={WIDTH * 0.4} />

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
            {campaignDetailsdata.campaignDetails.campaign.title}
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
            {
              campaignDetailsdata.campaignDetails.campaign.campaignstarter
                .account.fullname
            }
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
      {ConfirmationMessage()}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modal: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    paddingVertical: 10,
  },
  customPicker: {
    height: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#E7E7E7",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 6,
  },
});
