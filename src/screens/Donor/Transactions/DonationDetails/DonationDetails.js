import React, {  useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
} from "../../../../components/Index.js";
import moment from "moment";
import NumberFormat from "react-number-format";
const WIDTH = Dimensions.get("window").width;

const DonationDetails = ({
  route,
  data,
  donationDetailsStart,
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
              Campaign Title
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
           <Block style={{ flex: 0, paddingVertical: 8 }}>
            <Text
              bold
              style={{ fontSize: 16, fontWeight: "700" }}
              color={theme.colors.solidGray}
            >
              Status
            </Text>
            
            <Text
              center
              style={{
                fontSize: 14,
                backgroundColor:
                  data.donationDetails.transaction.transactionstatus == 1
                    ? theme.colors.schedulingBackground
                    : data.donationDetails.transaction.transactionstatus == 2
                    ? "#F1AEFC"
                    : data.donationDetails.transaction.transactionstatus == 3
                    ? "#AEE6FC"
                    : data.donationDetails.transaction.transactionstatus == 4
                    ? theme.colors.cancelledBackground
                    : theme.colors.schedulingBackground,
                paddingVertical: 4,
                paddingHorizontal: 8,
                width: 130,
              }}
              color={
                data.donationDetails.transaction.transactionstatus == 1
                  ? theme.colors.schedulingText
                  : data.donationDetails.transaction.transactionstatus == 2
                  ? "#9B59B6"
                  : data.donationDetails.transaction.transactionstatus == 3
                  ? "#037CC4"
                  : data.donationDetails.transaction.transactionstatus == 4
                  ? theme.colors.cancelledText
                  : theme.colors.schedulingText
              }
            >
              { data.donationDetails.transaction.transactionstatus == 1
                  ? "APPROVED"
                  : data.donationDetails.transaction.transactionstatus == 2
                  ? "SUBMITTED"
                  : data.donationDetails.transaction.transactionstatus == 3
                  ? "POSTED"
                  : data.donationDetails.transaction.transactionstatus == 4
                  ? "CANCELLED":"NOT AVAILABLE"}
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
