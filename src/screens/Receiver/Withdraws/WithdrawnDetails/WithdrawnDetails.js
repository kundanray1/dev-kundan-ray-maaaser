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

const WithdrawnDetails = ({
  route,
  data,
  navigation,
  withdrawnDetailsStart,
  withdrawnDetailsClear,
}) => {
  const { details } = route.params;
  useEffect(() => {
    withdrawnDetailsStart(details.transactionid);
  }, []);
  console.log("data.withdrawnDetails", data.withdrawnDetails);
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
        <Block style={{ flex: 0, paddingVertical: 8 }}>
            <Text
              bold
              style={{ fontSize: 16, fontWeight: "700" }}
              color={theme.colors.solidGray}
            >
              {moment(data.withdrawnDetails.transaction.createdat).format("DD MMM, YYYY")} at{" "}
              {moment(data.withdrawnDetails.transaction.createdat).format("hh:mm A")}
            </Text>
          </Block>

          {data.withdrawnDetails.transaction.card != undefined ? (
            <Block style={{ flex: 0, paddingVertical: 8 }}>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                Card Holder’s Name
              </Text>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                {data.withdrawnDetails.transaction.card.cardholdername}
              </Text>
            </Block>
          ) : (
            <>
              <Block style={{ flex: 0, paddingVertical: 8 }}>
                <Text
                  bold
                  style={{ fontSize: 16, fontWeight: "700" }}
                  color={theme.colors.solidGray}
                >
                  Account Holder’s Name
                </Text>
                <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                  {data.withdrawnDetails.transaction.bank.accountholdername}
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
                  Fund Withdrawn
                </Text>
              </Block>

              <Block style={{ flex: 0, paddingVertical: 8 }}>
                <Text
                  bold
                  style={{ fontSize: 16, fontWeight: "700" }}
                  color={theme.colors.solidGray}
                >
                  Bank
                </Text>
                <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                  {data.withdrawnDetails.transaction.bank.bankname}
                </Text>
              </Block>

              <Block style={{ flex: 0, paddingVertical: 8 }}>
                <Text
                  bold
                  style={{ fontSize: 16, fontWeight: "700" }}
                  color={theme.colors.solidGray}
                >
                  Routing number
                </Text>
                <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                  {data.withdrawnDetails.transaction.bank.routingnumber}
                </Text>
              </Block>
              <Block style={{ flex: 0, paddingVertical: 8 }}>
                <Text
                  bold
                  style={{ fontSize: 16, fontWeight: "700" }}
                  color={theme.colors.solidGray}
                >
                  Account number
                </Text>
                <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                  {data.withdrawnDetails.transaction.bank.accountnumber}
                </Text>
              </Block>
            </>
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
              value={data.withdrawnDetails.transaction.amount / 100}
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
              {data.withdrawnDetails.transaction.remark}
            </Text>
          </Block>
        </>
      )}
    </SafeAreaView>
  );
};

export default WithdrawnDetails;

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
