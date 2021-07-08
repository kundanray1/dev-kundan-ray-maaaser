import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  View,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  Button,
  CustomActivityIndicator,
} from "../../../../components/Index.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import PaymentProto from "./../../../../protos/payment_pb";
import TickIconComponent from "./../../../../assets/icons/tickIconComponent.js";
import NumberFormat from "react-number-format";
import { Formik } from "formik";
import { WithdrawFundValidationSchema } from "./../../../../utility/ValidationSchema.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RaisingMoneyType from "./RaisingMoneyType";
import BeneficiaryType from "./BeneficiaryType";
import CategoryType from "./CategoryType";
import Country from "./Country";
import StartACampaignOneIconComponent from "./../../../../assets/icons/startACampaignOneIconComponent";

const WIDTH = Dimensions.get("window").width;

const StartACampaign = ({
  data,
  startACampaignStart,
  startACampaignClear,
  navigation,
}) => {
  const [titleFocus, setTitleFocus] = useState();
  const [raisingMoneyType, setRaisingMoneyType] = useState("");
  const [beneficiaryType, setBeneficiaryType] = useState("");
  const [categoryType, setCategoryType] = useState("");
  const [country, setCountry] = useState("");
  const [checked, setChecked] = useState(false);

  const onSubmitStartACampaignLoadFund = () => {};

  useEffect(() => {
    if (data.startACampaign !== null) {
      if (data.startACampaign.success) {
        startACampaignClear();
      }
    }
  }, [data.startACampaign]);

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
            onSubmitStartACampaignLoadFund(values);
          }}
          validationSchema={WithdrawFundValidationSchema}
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
                    placeholder="1000"
                    placeholderTextColor="#0DB952"
                    keyboardType="numeric"
                  />
                </Block>
              </Block>

              <Country country={country} setCountry={setCountry} />
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
              <BeneficiaryType
                beneficiaryType={beneficiaryType}
                setBeneficiaryType={setBeneficiaryType}
                navigation={navigation}
              />
              <CategoryType
                categoryType={categoryType}
                setCategoryType={setCategoryType}
              />
               <Block style={{ flex: 0 }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setChecked(!checked)}
                  style={{ flexDirection: "row" }}
                >
                  {checked ? (
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
                  <Text bold style={{ fontSize:16, paddingHorizontal: 8, marginTop: 2 }} color={theme.colors.solidGray}>
                   Allow sub-campaigns
                  </Text>
                </TouchableOpacity>
              </Block>
              {!errors.title ||
              raisingMoneyType == "" ||
              beneficiaryType == "" ||
              categoryType == "" ||
              country == "" ? (
               <Button
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                  }}
                  onPress={() => navigation.navigate("Start a campaign second")}
                >
                    <Text button style={{ fontSize: 18 }}>
                      Proceed
                    </Text>
                </Button>
              ) : (
                
                <Button
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                  }}
                  onPress={() => navigation.navigate("Start a campaign second")}
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
    fontSize: 20,
    fontWeight: "700",
    backgroundColor: "#E9F9FF",
    color: "#0DB952",
    paddingHorizontal: 4,
  },
  amountSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#E9F9FF",
  },
});
