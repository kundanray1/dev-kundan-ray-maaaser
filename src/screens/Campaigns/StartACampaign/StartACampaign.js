import React, { useState } from "react";
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
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

const WIDTH = Dimensions.get("window").width;

const StartACampaign = ({
  data,
  navigation,
  receiversData
}) => {
  const [beneficierId, setBeneficierId] = useState("");
  const [beneficierName, setBeneficierName] = useState("");
  const [titleFocus, setTitleFocus] = useState();
  const [raisingMoneyType, setRaisingMoneyType] = useState("");
  const [beneficiaryType, setBeneficiaryType] = useState("");
  const [categoryType, setCategoryType] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [allowSubCampaigns, setAllowSubCampaigns] = useState(true);
  const [targetAmount, setTargetAmount] = useState("");
  // const [beneficiaryAccountId, setBeneficiaryAccountId] = useState();

  const onSubmitStartACampaign = (values) => {
    navigation.navigate("Start a campaign second", {
      title:values.title,
      raisingMoneyType: raisingMoneyType,
      beneficiaryType: beneficiaryType,
      categoryType: categoryType,
      countryCode: countryCode,
      allowSubCampaigns: allowSubCampaigns,
      targetAmount: targetAmount,
      beneficiaryAccountId:beneficierId
    });
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
          <StartACampaignOneIconComponent />
        </Block>

        <Formik
          initialValues={{
            title: "",
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

              <Country country={country} setCountry={setCountry} setCountryCode={setCountryCode} />
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
              <RaisingMoneyType
                raisingMoneyType={raisingMoneyType}
                setRaisingMoneyType={setRaisingMoneyType}
              />
              <BeneficiersList
                beneficierName={beneficierName}
                setBeneficierId={setBeneficierId}
                setBeneficierName={setBeneficierName}
                receiversData={receiversData}
                navigation={navigation}
              />
             {/* <BeneficiaryType
                beneficierId={beneficierId}
                setBeneficierId={setBeneficierId}
                setBeneficierName={setBeneficierName}
                receiversData={receiversData}
              />*/}
              <CategoryType
                categoryType={categoryType}
                setCategoryType={setCategoryType}
              />
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
              {!errors.title &&
              raisingMoneyType != "" &&
              beneficierId != "" &&
              categoryType != "" &&
              countryCode != "" &&
              targetAmount!="" ? (
                <Button
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                  }}
                  onPress={handleSubmit}
                >
                 {data.isLoading ? (
                    <>
                      <CustomActivityIndicator
                        label="Requesting..."
                        isLoading={data.isLoading}
                      />
                      <Text button style={{ fontSize: 18 }}>
                        Proceed
                      </Text>
                    </>
                  ) : (
                    <Text button style={{ fontSize: 18 }}>
                      Proceed
                    </Text>
                  )}
                </Button>
              ) : (
                <Button
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                  }}
                >
                    <Text button style={{ fontSize: 18 }}>
                      Proceed
                    </Text>
                </Button>
              )}
            </Block>
          )}
        </Formik>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default StartACampaign;

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
  }
});
