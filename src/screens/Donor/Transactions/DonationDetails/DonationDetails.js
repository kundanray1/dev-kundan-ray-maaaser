import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Dimensions,
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

const DonationDetails = ({ route, data, navigation }) => {
  const { details } = route.params;
  
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <Block style={{ flex: 0, paddingVertical: 10 }}>
        <Text
          bold
          style={{ fontSize: 16, fontWeight: "700" }}
          color={theme.colors.solidGray}
        >
          {moment(details.createdat).format("DD MMM, YYYY")} at{" "}
          {moment(details.createdat).format("hh:mm A")}
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
          {details.clientList[1].account.fullname}
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

      <Block style={{ flex: 0, paddingVertical: 8 }}>
        <Text
          bold
          style={{ fontSize: 16, fontWeight: "700" }}
          color={theme.colors.solidGray}
        >
          Amount
        </Text>
        <NumberFormat
          value={details.amount / 100}
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
          {details.remark}
        </Text>
      </Block>
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
