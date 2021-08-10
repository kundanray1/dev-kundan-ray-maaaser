import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
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
import TickIconComponent from "./../../../assets/icons/tickIconComponent.js";
import { StartACampaignThirdValidationSchema } from "./../../../utility/ValidationSchema.js";
import { Formik } from "formik";

const WIDTH = Dimensions.get("window").width;

const StartACampaignThirdUpdate = ({
  data,
  startACampaignThirdUpdateStart,
  startACampaignThirdUpdateClear,
  navigation,
  route,
  imageUploadClear,
  loginData,
}) => {
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const onSubmitStartACampaignThird = (values) => {
    const campaignData = new CampaignProto.Campaign();
    campaignData.setCampaignid(
      route.params.campaignDetails.campaign.campaignid
    );
    campaignData.setAccountid(loginData.user.account.accountid);
    campaignData.setTargetamount(
      route.params.campaignDetails.campaign.targetamount
    );
    campaignData.setCountrycode(
      route.params.campaignDetails.campaign.countrycode
    );
    campaignData.setTitle(route.params.campaignDetails.campaign.title);
    campaignData.setBeneficiarytype(
      route.params.campaignDetails.campaign.beneficiarytype
    );
    campaignData.setBeneficiaryaccountid(
      route.params.campaignDetails.campaign.beneficiaryaccountid
    );
    campaignData.setCategory(route.params.campaignDetails.campaign.category);
    campaignData.setDescription(values.description);
    campaignData.setThumbnailurl(
      route.params.campaignDetails.campaign.thumbnailurl
    );
    campaignData.setAllowsubcampaign(
      route.params.campaignDetails.campaign.allowSubCampaigns
    );
    campaignData.setCampaignstatus(
      route.params.campaignDetails.campaign.campaignstatus
    );
    startACampaignThirdUpdateStart(campaignData);
  };

  useEffect(() => {
    if (data.startACampaignThirdUpdate !== null) {
      if (data.startACampaignThirdUpdate.success) {
        setConfirmationSuccessfulVisible(!confirmationMessageVisible);
        startACampaignThirdUpdateClear();
        imageUploadClear()
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
        onRequestClose={() => {
          setConfirmationSuccessfulVisible(false);
          navigation.goBack();
        }}
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
              <Button
                onPress={() => {
                  setConfirmationSuccessfulVisible(false);
                  navigation.goBack();
                }}
              >
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
        <Formik
          initialValues={{
            description: route.params.campaignDetails.campaign.description,
          }}
          onSubmit={(values) => {
            onSubmitStartACampaignThird(values);
          }}
          validationSchema={StartACampaignThirdValidationSchema}
        >
          {({
            handleChange,
            touched,
            setFieldTouched,
            handleSubmit,
            values,
            errors,
          }) => (
            <Block>
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
                placeholder="Explain about the campaign."
                keyboardType="default"
                multiline
                numberOfLines={10}
                style={styles.input}
                onChangeText={handleChange("description")}
                onBlur={() => {
                  setFieldTouched("description");
                }}
                value={values.description}
              />
              <ErrorMessage
                error={errors.description}
                visible={touched.description}
              />
              <Block style={{ paddingVertical: 30 }}>
                {!errors.description ? (
                  <Button onPress={handleSubmit}>
                    {data.isLoading ? (
                      <>
                        <CustomActivityIndicator
                          label="Requesting..."
                          isLoading={data.isLoading}
                        />
                        <Text button style={{ fontSize: 18 }}>
                          Update
                        </Text>
                      </>
                    ) : (
                      <Text button style={{ fontSize: 18 }}>
                        Update
                      </Text>
                    )}
                  </Button>
                ) : (
                  <Button>
                    <Text button style={{ fontSize: 18 }}>
                      Update
                    </Text>
                  </Button>
                )}
              </Block>
            </Block>
          )}
        </Formik>
      </Block>
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
    paddingVertical: 4,
    borderWidth: 1,
    textAlignVertical: "top",
  },
});
