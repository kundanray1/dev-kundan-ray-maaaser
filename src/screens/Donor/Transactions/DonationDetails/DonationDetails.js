import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  CustomActivityIndicator,
  Button,
  OutlinedButton,
} from "../../../../components/Index.js";
import moment from "moment";
import PaymentProto from "./../../../../protos/payment_pb";
import NumberFormat from "react-number-format";
import DownloadIconComponent from "../../../../assets/icons/DownloadIconComponent.js";
import PdfIconComponent from "../../../../assets/icons/PdfIconComponent.js";
import ExcelIconComponent from "../../../../assets/icons/ExcelIconComponent.js";
const WIDTH = Dimensions.get("window").width;

const DonationDetails = ({
  route,
  data,
  navigation,
  donationDetailsStart,
  donationDetailsClear,
}) => {
  const { details } = route.params;
  useEffect(() => {
    donationDetailsStart(details.transactionid);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      {data.isLoading ? (
        <ActivityIndicator
          size="large"
          color={theme.colors.primary2}
          style={{ marginTop: 30 }}
        />
      ) : (
        <>
          <Block style={{ flex: 0, paddingVertical: 10 }}>
            <Text
              bold
              style={{ fontSize: 16, fontWeight: "700" }}
              color={theme.colors.solidGray}
            >
              {moment(data.donationDetails.transaction.createdat).format(
                "DD MMM, YYYY"
              )}{" "}
              at{" "}
              {moment(data.donationDetails.transaction.createdat).format(
                "hh:mm A"
              )}
            </Text>
          </Block>
          <Block style={{ flex: 0, paddingVertical: 8 }}>
            <Text
              bold
              style={{ fontSize: 16, fontWeight: "700" }}
              color={theme.colors.solidGray}
            >
              Receiver’s Name
            </Text>
            <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
              {data.donationDetails.transaction.clientList[1].account.fullname}
            </Text>
          </Block>

          <Block style={{ flex: 0, paddingVertical: 8 }}>
            <Text
              bold
              style={{ fontSize: 16, fontWeight: "700" }}
              color={theme.colors.solidGray}
            >
              Type
            </Text>
            <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
              Donation
            </Text>
          </Block>
          {data.donationDetails.transaction.campaign != undefined ? (
            <Block style={{ flex: 0, paddingVertical: 8 }}>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
              Campaign
              </Text>
              <Text
                color={theme.colors.solidGray}
                style={{ fontSize: 15 }}
              >
              {data.donationDetails.transaction.campaign.title}
              </Text>
            </Block>
          ) : data.donationDetails.transaction.subcampaign != undefined ? (
            <Block style={{ flex: 0, paddingVertical: 8 }}>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
              Sub Campaign
              </Text>
              <Text
                color={theme.colors.solidGray}
                style={{ fontSize: 15 }}
              >
                {data.donationDetails.transaction.subcampaign.campaign.title}
              </Text>
            </Block>
          ) : (
            <Block style={{ flex: 0 }} />
          )}

          <Block style={{ flex: 0, paddingVertical: 8 }}>
            <Text
              bold
              style={{ fontSize: 16, fontWeight: "700" }}
              color={theme.colors.solidGray}
            >
              Amount
            </Text>
            <NumberFormat
              value={data.donationDetails.transaction.amount / 100}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              decimalScale={2}
              fixedDecimalScale={true}
              renderText={(formattedValue) => (
                <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                  {formattedValue}
                </Text>
              )}
            />
          </Block>
          <Block style={{ flex: 0, paddingVertical: 8 }}>
            <Text
              bold
              style={{ fontSize: 16, fontWeight: "700" }}
              color={theme.colors.solidGray}
            >
              Remarks
            </Text>
            <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
              {data.donationDetails.transaction.remark}
            </Text>
          </Block>
        </>
      )}
    </SafeAreaView>
  );
};

export default DonationDetails;

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
