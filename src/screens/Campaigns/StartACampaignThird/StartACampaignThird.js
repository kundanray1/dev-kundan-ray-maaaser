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

const StartACampaignThird = ({
  data,
  startACampaignThirdStart,
  startACampaignThirdClear,
  navigation,
  letsGetStartedDonorData,
  route,
}) => {
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const [description, setDescription] = useState();
  const onSubmitStartACampaignThird = () => {
    const campaignData = new CampaignProto.Campaign();
    campaignData.setTargetamount(route.params.targetAmount * 100);
    campaignData.setCountrycode(route.params.countryCode);
    campaignData.setTitle(route.params.title);
    campaignData.setBeneficiarytype(
      route.params.raisingMoneyType == "Myself" ? 1 : 2
    );
    campaignData.setBeneficiaryaccountid(route.params.beneficiaryAccountId);
    campaignData.setCategory(route.params.categoryType);
    campaignData.setDescription(description);
    campaignData.setThumbnailurl(letsGetStartedDonorData.image);
    campaignData.setAllowsubcampaign(route.params.allowSubCampaigns);
    campaignData.setCampaignstatus(1);
    startACampaignThirdStart(campaignData);
  };

  useEffect(() => {
    if (data.startACampaignThird !== null) {
      if (data.startACampaignThird.success) {
        setConfirmationSuccessfulVisible(!confirmationMessageVisible);
        startACampaignThirdClear();
      }
    }
  }, [data.startACampaignThird]);

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
              Campaign Started Successfully!
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
          Describe why are you are fundraising
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(value)=>setDescription(value)}
          value={description}
          placeholder="Explain about the campaign."
          keyboardType="default"
          multiline
          numberOfLines={10}
        />

        <Block
          style={{
            paddingVertical: 30,
            borderBottomWidth: 1,
            borderColor: theme.colors.gray2,
          }}
        >
          <Button onPress={() => onSubmitStartACampaignThird()}>
            <Text button style={{ fontSize: 18 }}>
              Proceed
            </Text>
          </Button>
        </Block>
      </Block>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{ paddingVertical: 24 }}
        onPress={() => navigation.navigate("Start a campaign second")}
      >
        <Text
          center
          color={theme.colors.primary2}
          style={{ fontSize: 16, fontWeight: "700" }}
        >
          Go Back
        </Text>
      </TouchableOpacity>
      {data.isLoading?
       <CustomActivityIndicator
                      isLoading={data.isLoading}
                      label="Creating..."
                    />
                    :
                    <Block/>
      }
      {ConfirmationMessage()}
    </KeyboardAwareScrollView>
  );
};

export default StartACampaignThird;

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
