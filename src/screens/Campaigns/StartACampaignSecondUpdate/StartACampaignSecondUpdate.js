import React, { useState,useEffect } from "react";
import {
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Modal,
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Text,
  Button,
  CustomActivityIndicator
} from "../../../components/Index.js";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StartACampaignSecondIconComponent from "./../../../assets/icons/StartACampaignSecondIconComponent";
import AddImageIconComponent from "./../../../assets/icons/addImageIconComponent";
import CampaignProto from "./../../../protos/campaign_pb";
import TickIconComponent from "./../../../assets/icons/tickIconComponent.js";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const StartACampaignSecondUpdate = ({
  navigation,
  imageUpload,
  imageUploadClear,
  letsGetStartedDonorData,
  startACampaignThirdUpdateStart,
  startACampaignThirdUpdateClear,
  data,
  route,
  loginData
}) => {
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const [image, setImage] = useState(route.params.campaignDetails.campaign.thumbnailurl);

  //select image function
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      imageUpload(result.uri);
    }
  };
  const onSubmitStartACampaignSecond = () => {
     const campaignData = new CampaignProto.Campaign();
    campaignData.setCampaignid(route.params.campaignDetails.campaign.campaignid);
    campaignData.setAccountid(loginData.user.account.accountid);
    campaignData.setTargetamount(route.params.campaignDetails.campaign.targetamount);
    campaignData.setCountrycode(route.params.campaignDetails.campaign.countrycode);
    campaignData.setTitle(route.params.campaignDetails.campaign.title);
    campaignData.setBeneficiarytype(
      route.params.campaignDetails.campaign.beneficiarytype
    );
    campaignData.setBeneficiaryaccountid(route.params.campaignDetails.campaign.beneficiaryaccountid);
    campaignData.setCategory(route.params.campaignDetails.campaign.category);
    campaignData.setDescription(route.params.campaignDetails.campaign.description);
    campaignData.setThumbnailurl(letsGetStartedDonorData.image);
    campaignData.setAllowsubcampaign(route.params.campaignDetails.campaign.allowSubCampaigns);
    campaignData.setCampaignstatus(route.params.campaignDetails.campaign.campaignstatus);
    startACampaignThirdUpdateStart(campaignData);
     }
   useEffect(() => {
    if (data.startACampaignThirdUpdate !== null) {
      if (data.startACampaignThirdUpdate.success) {
        setConfirmationSuccessfulVisible(!confirmationMessageVisible);
        startACampaignThirdUpdateClear();
        imageUploadClear();
      }
    }
  }, [data.startACampaignThirdUpdate]);
const ConfirmationMessage = () => (
    <SafeAreaView>
      <Modal
        visible={confirmationMessageVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => setConfirmationSuccessfulVisible(false)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 45 }]}>
            <Text center style={{ fontSize: 18, fontWeight: "700" }}>
              Campaign Updated Successfully!
            </Text>
            <View style={{ paddingVertical: 25, alignItems: "center" }}>
              <TickIconComponent />
            </View>
            <View style={{ paddingHorizontal: 30 }}>
              <Button onPress={() => navigation.goBack()}>
                <Text button style={{ fontSize: 18 }}>
                  View Campaign
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );


  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
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
        <Block style={{ paddingVertical: 30 }}>
          {image == "" ? (
            <Button disabled={true}>
              <Text button style={{ fontSize: 18 }}>
                Update
              </Text>
            </Button>
          ) : (
            <Button
            onPress={()=>onSubmitStartACampaignSecond()}
            >
              <Text button style={{ fontSize: 18 }}>
                Update
              </Text>
            </Button>
          )}
        </Block>
      </Block>
       {data.isLoading?
       <CustomActivityIndicator
                      isLoading={data.isLoading}
                      label="Requesting..."
                    />
                    :
                    <Block/>
      }
       {ConfirmationMessage()}
       {
        letsGetStartedDonorData.isLoading &&
        <CustomActivityIndicator
                      isLoading={data.isLoading}
                      label="Requesting..."
        />
       }
    </KeyboardAwareScrollView>
  );
};

export default StartACampaignSecondUpdate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modal: {
    borderRadius: 10,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    paddingVertical: 30,
  },

  input: {
    fontSize: 18,
    fontWeight: "400",
    color: theme.colors.solidGray,
    paddingHorizontal: 8,
    paddingVertical:4,
    borderWidth:1,
    textAlignVertical:"top",
  },
});
