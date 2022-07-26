import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  View,
  Dimensions,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Text,
  Button,
  CustomActivityIndicator,
} from "../../../components/Index.js";
import moment from "moment";
import PaymentProto from "./../../../protos/payment_pb";
import TickIconComponent from "./../../../assets/icons/tickIconComponent.js";
import NumberFormat from "react-number-format";

const WIDTH = Dimensions.get("window").width;

const CampaignDonateNowConfirmation = ({
  route,
  data,
  loginData,
  campaignDonateNowConfirmationStart,
  campaignDonateNowConfirmationClear,
  navigation,
}) => {
  const [
    campaignDonateNowCampaignVisible,
    setCampaignDonateNowCampaignVisible,
  ] = useState(false);
  const {
    refId,
    receiverName,
    amount,
    remarks,
    transactionMedium,
    transactionType,
    transactionStatus,
  } = route.params;
  //set all the required proto for updating and submitting
  const onSubmitDonateFund = () => {
    const donateProto = new PaymentProto.Transaction();
    donateProto.setRefid(refId);
    donateProto.setDonoraccountid(loginData.user.account.accountid);
    donateProto.setAmount(amount * 100);
    donateProto.setRemark(remarks);
    donateProto.setTransactionmedium(transactionMedium);
    donateProto.setTransactiontype(transactionType);
    donateProto.setTransactionstatus(transactionStatus);
    campaignDonateNowConfirmationStart(donateProto);
  };

  useEffect(() => {
    if (data.campaignDonateNowConfirmation !== null) {
      if (data.campaignDonateNowConfirmation.success) {
        setCampaignDonateNowCampaignVisible(!campaignDonateNowCampaignVisible);
        campaignDonateNowConfirmationClear();
      }
    }
  }, [data.campaignDonateNowConfirmation]);

  const CampaignDonateNowConfirmationMessageVisible = () => (
    <SafeAreaView>
      <Modal
        visible={campaignDonateNowCampaignVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => {
          setCampaignDonateNowCampaignVisible(false);
          navigation.navigate("Campaign Details");
        }}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 45 }]}>
            <Text center style={{ fontSize: 18, fontWeight: "700" }}>
              Donation Successful!
            </Text>
            <View style={{ paddingVertical: 25, alignItems: "center" }}>
              <TickIconComponent />
            </View>
            <View style={{ paddingHorizontal: 30 }}>
              <Button
                onPress={() => {
                  setCampaignDonateNowCampaignVisible(false);
                  navigation.navigate("Campaign Details");
                }}
              >
                <Text button style={{ fontSize: 18 }}>
                  OK
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 24, justifyContent: "center" }}
    >
      <Block
        style={{
          flex: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          borderRadius: 1.5,
          elevation: 1.5,
        }}
      >
        <Block
          style={{
            flex: 0,
            paddingTop: 30,
            paddingBottom: 20,
            paddingHorizontal: 20,
          }}
        >
          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                Receiver’s Name
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                {receiverName}
              </Text>
            </Block>
          </Block>

          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                Amount
              </Text>
            </Block>
            <Block>
              <NumberFormat
                value={amount}
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
          </Block>

          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                Date
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                {moment(new Date()).format("DD MMM, YYYY")}
              </Text>
            </Block>
          </Block>
          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                Remarks
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                {remarks}
              </Text>
            </Block>
          </Block>
          <Button
            style={{
              marginTop: 30,
            }}
            onPress={onSubmitDonateFund}
          >
            {data.isLoading ? (
              <>
                <CustomActivityIndicator
                  label="Requesting..."
                  isLoading={data.isLoading}
                />
                <Text button style={{ fontSize: 18 }}>
                  Donate
                </Text>
              </>
            ) : (
              <Text button style={{ fontSize: 18 }}>
                Donate
              </Text>
            )}
          </Button>
        </Block>
        <Block
          style={{
            flex: 0,
            paddingHorizontal: 12,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Campaign Details")}
            style={{
              flex: 0,
              borderTopWidth: 2,
              paddingVertical: 10,
              borderColor: theme.colors.gray2,
            }}
          >
            <Text
              center
              color={theme.colors.solidGray}
              style={{ fontSize: 18, fontWeight: "700" }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
      {CampaignDonateNowConfirmationMessageVisible()}
    </SafeAreaView>
  );
};

export default CampaignDonateNowConfirmation;

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
});
