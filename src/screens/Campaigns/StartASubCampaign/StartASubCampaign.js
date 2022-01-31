import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Modal,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Text,
  Button,
  CustomActivityIndicator,
} from "../../../components/Index.js";
import TickIconComponent from "./../../../assets/icons/tickIconComponent.js";
import NumberFormat from "react-number-format";
import CampaignProto from "../../../protos/campaign_pb";
const WIDTH = Dimensions.get("window").width;

const StartASubCampaign = ({
  data,
  navigation,
  loginData,
  startASubCampaignStart,
  startASubCampaignClear,
  startASubCampaignEditStart,
  campaignDetailsdata,
  campaignId,
  route,
}) => {
  const targetAmountRef = useRef();
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const [amount, setAmount] = useState(
    route.params != undefined
      ? (route.params.campaignDetailData.targetamount / 100).toString()
      : ""
  );
  const onSubmitStartASubCampaign = () => {
    const subCampaignData = new CampaignProto.SubCampaign();
    subCampaignData.setTargetamount(amount * 100);
    subCampaignData.setSubcampaignstatus(1);

    if (route.params != undefined) {
      subCampaignData.setSubcampaignid(
        route.params.campaignDetailData.subcampaignid
      );
      subCampaignData.setAccountid(loginData.user.account.accountid);
      subCampaignData.setCampaignid(
        route.params.campaignDetailData.campaign.campaignid
      );
      startASubCampaignEditStart(subCampaignData);
    } else {
      subCampaignData.setCampaignid(campaignId);
      startASubCampaignStart(subCampaignData);
    }
  };
  useEffect(() => {
    if (data.startASubCampaign !== null) {
      if (data.startASubCampaign.success) {
        setConfirmationSuccessfulVisible(!confirmationMessageVisible);
        startASubCampaignClear();
      }
    }
  }, [data.startASubCampaign]);

  const ConfirmationMessage = () => (
    <SafeAreaView>
      <Modal
        visible={confirmationMessageVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => {
          setConfirmationSuccessfulVisible(false);
          navigation.goBack();
        }}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 45 }]}>
            <Text center style={{ fontSize: 18, fontWeight: "700" }}>
              {route.params != undefined ? (
                <Text center style={{ fontSize: 18, fontWeight: "700" }}>
                  Sub-Campaign Updated Successfully!
                </Text>
              ) : (
                <Text center style={{ fontSize: 18, fontWeight: "700" }}>
                  Sub-Campaign Started Successfully!
                </Text>
              )}
            </Text>
            <View style={{ paddingVertical: 25, alignItems: "center" }}>
              <TickIconComponent />
            </View>
            <View style={{ paddingHorizontal: 30 }}>
              <Button
                onPress={() => {
                  setConfirmationSuccessfulVisible(false);
                  navigation.goBack();
                }}
              >
                <Text button style={{ fontSize: 18 }}>
                  View Sub Campaigns
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Block style={{ paddingHorizontal: 16, flex: 0 }}>
        <Text
          center
          style={{
            fontSize: 20,
            paddingTop: 20,
            paddingBottom: 10,
            fontWeight: "700",
            color: "#5F6062",
          }}
        >
          Campaign Goal Amount
        </Text>
        <NumberFormat
          value={
            route.params != undefined
              ? route.params.campaignDetailData.campaign.targetamount / 100
              : campaignDetailsdata.campaignDetails.campaign.targetamount / 100
          }
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          decimalScale={2}
          fixedDecimalScale={true}
          renderText={(formattedValue) => (
            <Text
              center
              color={theme.colors.primary2}
              style={{
                fontSize: 30,
                fontWeight: "700",
                textTransform: "capitalize",
              }}
            >
              {formattedValue}
            </Text>
          )}
        />
        <Text
          center
          style={{
            fontSize: 20,
            paddingTop: 30,
            paddingBottom: 20,
            fontWeight: "700",
            color: "#5F6062",
          }}
        >
          Enter your goal
        </Text>

        <TouchableOpacity
          onPress={() => targetAmountRef.current.focus()}
          style={styles.amountSection}
          activeOpacity={1}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              color: "#0DB952",
              paddingHorizontal: 6,
            }}
          >
            $
          </Text>
          <TextInput
            ref={targetAmountRef}
            style={styles.input}
            value={amount}
            onChangeText={(value) => setAmount(value)}
            placeholderTextColor="#0DB952"
            keyboardType="numeric"
          />
        </TouchableOpacity>
      </Block>
      <Block
        style={{
          paddingHorizontal: 18,
          backgroundColor: "white",
          justifyContent: "flex-end",
          bottom: 0,
          paddingVertical: 10,
          position: "absolute",
          width: "100%",
        }}
      >
        <Button
          onPress={() => onSubmitStartASubCampaign()}
          disabled={amount == "" ? true : false}
        >
          {route.params !== undefined ? (
            <Text button style={{ fontSize: 18 }}>
              Update
            </Text>
          ) : (
            <Text button style={{ fontSize: 18 }}>
              Proceed
            </Text>
          )}
        </Button>
      </Block>
      {data.isLoading && (
        <CustomActivityIndicator
          isLoading={data.isLoading}
          label="Requesting..."
        />
      )}
      {ConfirmationMessage()}
    </SafeAreaView>
  );
};

export default StartASubCampaign;

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
  amountSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9F9FF",
    paddingHorizontal: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginLeft: 10,
    paddingLeft: 0,
    fontWeight: "700",
    fontSize: 22,
    color: "#0DB952",
    backgroundColor: "#E9F9FF",
  },
});
