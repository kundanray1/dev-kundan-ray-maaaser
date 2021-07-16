import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  View,
  Dimensions,
  TextInput,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Text,
  Button,
  CustomActivityIndicator,
} from "../../../components/Index.js";
import CampaignProto from "./../../../protos/campaign_pb";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StartACampaignSecondIconComponent from "./../../../assets/icons/StartACampaignSecondIconComponent";
import TickIconComponent from "./../../../assets/icons/tickIconComponent.js";

const WIDTH = Dimensions.get("window").width;

const StartACampaignThirdUpdate = ({
  data,
  startACampaignThirdUpdateStart,
  startACampaignThirdUpdateClear,
  navigation,
  letsGetStartedDonorData,
  route,
  loginData
}) => {
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const [description, setDescription] = useState(route.params.campaignDetails.campaign.description);
  const onSubmitStartACampaignThird = () => {
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
    campaignData.setDescription(description);
    campaignData.setThumbnailurl(route.params.campaignDetails.campaign.thumbnailurl);
    campaignData.setAllowsubcampaign(route.params.campaignDetails.campaign.allowSubCampaigns);
    campaignData.setCampaignstatus(route.params.campaignDetails.campaign.campaignstatus);
    startACampaignThirdUpdateStart(campaignData);
  };

  useEffect(() => {
    if (data.startACampaignThirdUpdate !== null) {
      if (data.startACampaignThirdUpdate.success) {
        setConfirmationSuccessfulVisible(!confirmationMessageVisible);
        startACampaignThirdUpdateClear();
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
              <Button onPress={() => navigation.navigate("Campaigns")}>
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
          Describe why are you are fundraising
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(value)=>setDescription(value)}
          value={description}
          placeholder="Explain about the campaignDetails.campaign."
          keyboardType="default"
          multiline
          numberOfLines={10}
        />

        <Block
          style={{
            paddingVertical: 30,
           }}
        >
          <Button onPress={() => onSubmitStartACampaignThird()}>
            <Text button style={{ fontSize: 18 }}>
              Update
            </Text>
          </Button>
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
    </KeyboardAwareScrollView>
  );
};

export default StartACampaignThirdUpdate;

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
