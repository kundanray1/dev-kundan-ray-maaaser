import React, { useEffect } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
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

const LoadFundDetails = ({ route, data, navigation }) => {
  const { details } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <Block style={{ flex: 0, paddingVertical: 8 }}>
        <Text
          bold
          style={{ fontSize: 16, fontWeight: "700" }}
          color={theme.colors.solidGray}
        >
        {moment(details.createdat).format("DD MMM, YYYY")} at{" "}
            {moment(details.createdat).format("hh:mm A")}
        </Text>
      </Block>

      {details.card != undefined ? (
        <Block style={{ flex: 0, paddingVertical: 8 }}>
          <Text
            bold
            style={{ fontSize: 16, fontWeight: "700" }}
            color={theme.colors.solidGray}
          >
            Card Holder’s Name
          </Text>
          <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
            {details.card.cardholdername}
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
              {details.bank.accountholdername}
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
              Load Fund
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
              {details.bank.bankname}
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
              {details.bank.routingnumber}
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
              {details.bank.accountnumber}
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

export default LoadFundDetails;
