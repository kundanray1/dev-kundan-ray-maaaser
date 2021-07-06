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
import moment from "moment";
import PaymentProto from "./../../../../protos/payment_pb";
import { Formik } from "formik";
import { WithdrawFundValidationSchema } from "./../../../../utility/ValidationSchema.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StartACampaignOneIconComponent from "./../../../../assets/icons/startACampaignOneIconComponent";
import AddImageIconComponent from "./../../../../assets/icons/addImageIconComponent";

const WIDTH = Dimensions.get("window").width;

const StartACampaignSecond = ({
  data,
  startACampaignStart,
  startACampaignClear,
  navigation,
}) => {
  const onSubmitStartACampaignSecondLoadFund = () => {};

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
            alignItems:"center",
            borderStyle: "dashed",
            borderWidth: 1,
            paddingVertical: 40,
          }}
        >
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
        </TouchableOpacity>

        <Button
          style={{
            marginTop: 12,
            marginBottom: 12,
          }}
          onPress={() => navigation.navigate("Start a campaign third")}
        >
          <Text button style={{ fontSize: 18 }}>
            Proceed
          </Text>
        </Button>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default StartACampaignSecond;

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
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#E9F9FF",
  },
});
