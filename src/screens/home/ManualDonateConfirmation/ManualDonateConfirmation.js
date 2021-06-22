import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  View,
  Image,
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

const WIDTH = Dimensions.get("window").width;

const ManualDonateConfirmation = ({
  route,
  data,
  manualDonateConfirmationStart,
  manualDonateConfirmationClear,
  navigation,
}) => {
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const {
    accountid,
    receiverId,
    receiverName,
    amount,
    remarks,
    transactionMedium,
    transactionType,
    transactionStatus,
  } = route.params;
  //set all the required proto for updating and submitting
  const onSubmitManualDonateConfirmation = () => {
    const donationProto = new PaymentProto.Transaction();
    donationProto.setDonoraccountid(accountid);
    donationProto.setReceiveraccountid(receiverId);
    donationProto.setAmount(amount);
    donationProto.setRemark(remarks);
    donationProto.setTransactionmedium(transactionMedium);
    donationProto.setTransactiontype(transactionType);
    donationProto.setTransactionstatus(transactionStatus);
    manualDonateConfirmationStart(donationProto);
  };

  useEffect(() => {
    if (data.manualDonateConfirmation !== null) {
      if (data.manualDonateConfirmation.success) {
        setConfirmationSuccessfulVisible(!confirmationMessageVisible);
        manualDonateConfirmationClear();
      }
    }
  }, [data.manualDonateConfirmation]);

  const ConfirmationMessage = () => (
    <SafeAreaView>
      <Modal
        visible={confirmationMessageVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setConfirmationSuccessfulVisible(!confirmationMessageVisible)
        }
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 45 }]}>
            <Text center style={{ fontSize: 18, fontWeight: "700" }}>
              Donation Successfull!
            </Text>
            <View style={{ paddingVertical: 25, alignItems: "center" }}>
              <Image
                source={require("../../../assets/icons/successConfirmation.png")}
                style={{ height: 60, width: 60 }}
              />
            </View>
            <View style={{ paddingHorizontal: 30 }}>
              <Button onPress={() => navigation.navigate("Donate Now")}>
                <Text button style={{ fontSize: 18 }}>
                  Got It!
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 24, marginTop: 30 }}>
      <Block
        style={{
          flex: 0,
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 2,
          borderRadius: 4,
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
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                {amount}
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
                Date
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                {moment(new Date()).format("Do MMMM YYYY")}
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
            onPress={onSubmitManualDonateConfirmation}
          >
            {data.isLoading ? (
              <CustomActivityIndicator
                label="Requesting..."
                isLoading={data.isLoading}
              />
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
            onPress={() => console.log("Pressed cancel Donation")}
            style={{
              flex: 0,
              borderTopWidth: 2,
              paddingVertical: 10,
              borderColor: theme.colors.gray2,
            }}
          >
            <Text
              center
              color={theme.colors.red}
              style={{ fontSize: 18, fontWeight: "700" }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
      {ConfirmationMessage()}
    </SafeAreaView>
  );
};

export default ManualDonateConfirmation;

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
