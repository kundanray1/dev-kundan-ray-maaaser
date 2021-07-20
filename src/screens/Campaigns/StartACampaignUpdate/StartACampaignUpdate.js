import React, { useState,useEffect } from "react";
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  Modal,
  SafeAreaView,
  View,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Text,
  Button,
  CustomActivityIndicator,
} from "../../../components/Index.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { StartACampaignValidationSchema } from "./../../../utility/ValidationSchema.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RaisingMoneyType from "./RaisingMoneyType";
import CategoryType from "./CategoryType";
import Country from "./Country";
import StartACampaignOneIconComponent from "./../../../assets/icons/startACampaignOneIconComponent";
import BeneficiersList from "./BeneficiersList";
import CampaignProto from "./../../../protos/campaign_pb";
import TickIconComponent from "./../../../assets/icons/tickIconComponent.js";

const WIDTH = Dimensions.get("window").width;

const StartACampaignUpdate = ({
  data,
  navigation,
  receiversData,
  startACampaignThirdUpdateStart,
  startACampaignThirdUpdateClear,
  route,
  loginData
}) => {
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const [beneficierId, setBeneficierId] = useState("");
  const [beneficierName, setBeneficierName] = useState("");
  const [titleFocus, setTitleFocus] = useState();
  const [raisingMoneyType, setRaisingMoneyType] = useState(route.params.campaignDetails.campaign.beneficiarytype==1?"Myself":"Myself", "Someone else");
  const [beneficiaryType, setBeneficiaryType] = useState(route.params.campaignDetails.campaign.beneficiarytype);
  const [categoryType, setCategoryType] = useState(route.params.campaignDetails.campaign.category);
  const [country, setCountry] = useState(route.params.campaignDetails.campaign.countrycode);
  const [countryCode, setCountryCode] = useState(route.params.campaignDetails.campaign.countrycode);
  const [allowSubCampaigns, setAllowSubCampaigns] = useState(route.params.campaignDetails.campaign.allowsubcampaign);
  const [targetAmount, setTargetAmount] = useState((route.params.campaignDetails.campaign.targetamount/100).toString());

  const onSubmitStartACampaign = (values) => {
    const campaignData = new CampaignProto.Campaign();
    campaignData.setCampaignid(route.params.campaignDetails.campaign.campaignid);
    campaignData.setAccountid(loginData.user.account.accountid);
    campaignData.setTargetamount(targetAmount*100);
    campaignData.setCountrycode(countryCode);
    campaignData.setTitle(values.title);
    campaignData.setBeneficiarytype(
      raisingMoneyType=="Myself"?1:2
    );
    campaignData.setBeneficiaryaccountid(beneficierId);
    campaignData.setCategory(categoryType);
    campaignData.setDescription(route.params.campaignDetails.campaign.description);
    campaignData.setThumbnailurl(route.params.campaignDetails.campaign.thumbnailurl);
    campaignData.setAllowsubcampaign(allowSubCampaigns);
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
        <Formik
          initialValues={{
            title: route.params.campaignDetails.campaign.title!==undefined?route.params.campaignDetails.campaign.title:"",
          }}
          onSubmit={(values) => {
            onSubmitStartACampaign(values);
          }}
          validationSchema={StartACampaignValidationSchema}
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
            {
              route.params.targetamount=="targetamount"?
            <>
              <Text
                center
                style={{
                  fontSize: 20,
                  paddingVertical: 20,
                  fontWeight: "700",
                  color: "#5F6062",
                }}
              >
                Enter your goal
              </Text>

              <Block style={{ flex: 0, paddingBottom: 10 }}>
                <Block style={styles.amountSection}>
                  <Text
                    center
                    style={{
                      fontSize: 20,
                      fontWeight: "700",
                      color: "#0DB952",
                    }}
                  >
                    $
                  </Text>
                  <TextInput
                    style={styles.input}
                    textAlign={"center"}
                    value={targetAmount}
                    onChangeText={(value) => setTargetAmount(value)}
                    placeholder="0"
                    placeholderTextColor="#0DB952"
                    keyboardType="numeric"
                  />
                </Block>
              </Block>
              </>
              :route.params.country=="country" ?
              <Country country={country} setCountry={setCountry} setCountryCode={setCountryCode} />
               :route.params.title=="title" ?
               <>
              <Input
                label="Campaign Title"
                focus={titleFocus}
                onChangeText={handleChange("title")}
                onBlur={() => {
                  setFieldTouched("title");
                  setTitleFocus(false);
                }}
                onFocus={() => setTitleFocus(true)}
                value={values.title}
                style={{
                  borderBottomColor: titleFocus
                    ? theme.colors.primary2
                    : touched.title && errors.title
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage error={errors.title} visible={touched.title} />
              </>
                :route.params.category=="category" ?
              <CategoryType
                categoryType={categoryType}
                setCategoryType={setCategoryType}
              />
               :route.params.beneficierslist=="beneficierslist" ?
              <BeneficiersList
                beneficierName={beneficierName}
                setBeneficierId={setBeneficierId}
                setBeneficierName={setBeneficierName}
                receiversData={receiversData}
                navigation={navigation}
              />
              :route.params.category=="category" ?
              <CategoryType
                categoryType={categoryType}
                setCategoryType={setCategoryType}
              />
              :
              <Block style={{ flex: 0 }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setAllowSubCampaigns(!allowSubCampaigns)}
                  style={{ flexDirection: "row" }}
                >
                  {allowSubCampaigns ? (
                    <MaterialCommunityIcons
                      name="checkbox-marked"
                      size={22}
                      color={theme.colors.primary2}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="checkbox-blank-outline"
                      size={22}
                      color={theme.colors.solidGray}
                    />
                  )}
                  <Text
                    bold
                    style={{ fontSize: 16, paddingHorizontal: 8, marginTop: 2 }}
                    color={theme.colors.solidGray}
                  >
                    Allow sub-campaigns
                  </Text>
                </TouchableOpacity>
                </Block>
            }
                <Button
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                  }}
                  onPress={handleSubmit}
                >
                      <Text button style={{ fontSize: 18 }}>
                        Update
                      </Text>
                </Button>
            </Block>
          )}
        </Formik>
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

export default StartACampaignUpdate;

const styles = StyleSheet.create({
   amountSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9F9FF",
    paddingHorizontal: 4,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    fontWeight: "700",
    fontSize: 22,
    color: "#0DB952",
    backgroundColor: "#E9F9FF",
  },
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
});
