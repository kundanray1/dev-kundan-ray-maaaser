import React, { useState } from "react";
import { TouchableOpacity, Dimensions, ImageBackground } from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Text,
  Button,
  ErrorMessage,
} from "../../../components/Index.js";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StartACampaignSecondIconComponent from "./../../../assets/icons/StartACampaignSecondIconComponent";
import AddImageIconComponent from "./../../../assets/icons/addImageIconComponent";

const HEIGHT = Dimensions.get("window").height;

const StartACampaignSecond = ({
  navigation,
  imageUpload,
  route,
  letsGetStartedDonorData,
}) => {
  const [image, setImage] = useState(letsGetStartedDonorData.image!=null?letsGetStartedDonorData.image:"");
  const [imageError, setImageError] = useState(false);

  //select image function
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      imageUpload(result.uri);
      setImage(result.uri);
      setImageError(false)
    }
  };
  const onSubmitStartACampaignSecond = () => {
    if (image == "") {
      setImageError(true);
    } else {
      setImageError(false);
      navigation.navigate("Start a campaign third", {
        title: route.params.title,
        raisingMoneyType: route.params.raisingMoneyType,
        beneficiaryType: route.params.beneficiaryType,
        categoryType: route.params.categoryType,
        countryCode: route.params.countryCode,
        allowSubCampaigns: route.params.allowSubCampaigns,
        targetAmount: route.params.targetAmount,
        beneficiaryAccountId: route.params.beneficiaryAccountId,
      });
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Block
          center
          style={{
            borderBottomWidth: 1,
            borderColor: theme.colors.gray2,
            paddingVertical: 10,
          }}
        >
          <StartACampaignSecondIconComponent />
        </Block>
        <Text
          center
          style={{
            fontSize: 20,
            paddingVertical: 20,
            fontWeight: "700",
            color: "#5F6062",
          }}
        >
          Upload a cover photo or video
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flex: 0,
            alignItems: "center",
            borderStyle: "dashed",
            borderWidth: image ? 0 : 1,
            borderRadius: image ? 0 : 1,
            paddingVertical: image ? 0 : 40,
          }}
          onPress={pickImage}
        >
          {image ? (
            <ImageBackground
              style={{
                height: HEIGHT / 3,
                width: "100%",
                justifyContent: "flex-end",
              }}
              source={{ uri: image }}
            >
              <Block
                style={{
                  flex: 0,
                  backgroundColor: "rgba(52, 52, 52, 0.6)",
                  paddingVertical: 4,
                }}
              >
                <Text
                  center
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  Change Picture
                </Text>
              </Block>
            </ImageBackground>
          ) : (
            <>
              <AddImageIconComponent />
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 10,
                  fontWeight: "700",
                  color: "#5F6062",
                }}
              >
                Click to upload
              </Text>
            </>
          )}
        </TouchableOpacity>
        <ErrorMessage error={"Please upload image"} visible={imageError} />
        <Block
          style={{
            paddingVertical: 30,
            borderBottomWidth: 1,
            borderColor: theme.colors.gray2,
          }}
        >
          <Button onPress={() => onSubmitStartACampaignSecond()}>
            <Text button style={{ fontSize: 18 }}>
              Proceed
            </Text>
          </Button>
        </Block>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ paddingVertical: 24 }}
          onPress={() => navigation.navigate("Start a campaign")}
        >
          <Text
            center
            color={theme.colors.primary2}
            style={{ fontSize: 16, fontWeight: "700" }}
          >
            Go Back
          </Text>
        </TouchableOpacity>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default StartACampaignSecond;
