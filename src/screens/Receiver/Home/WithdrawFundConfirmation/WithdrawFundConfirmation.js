import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  View,
  Dimensions,
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
import NumberFormat from "react-number-format";
import TickIconComponent from "./../../../../assets/icons/tickIconComponent.js";

const WIDTH = Dimensions.get("window").width;

const WithdrawFundConfirmation = ({
  route,
  data,
  withdrawFundConfirmationStart,
  withdrawFundConfirmationClear,
  navigation,
}) => {
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const {
    bankid,
    accountid,
    amount,
    remarks,
    transactionMedium,
    transactionType,
    transactionStatus,
    accountHolderName,
    bankName,
    routingNumber,
    accountNumber,
  } = route.params;
  //set all the required proto for updating and submitting
  const onSubmitWithdrawFund = () => {
    const withdrawFundProto = new PaymentProto.Transaction();
    withdrawFundProto.setBankid(bankid);
    withdrawFundProto.setReceiveraccountid(accountid);
    withdrawFundProto.setAmount(amount*100);
    withdrawFundProto.setRemark(remarks);
    withdrawFundProto.setTransactionmedium(transactionMedium);
    withdrawFundProto.setTransactiontype(transactionType);
    withdrawFundProto.setTransactionstatus(transactionStatus);
    withdrawFundConfirmationStart(withdrawFundProto);
  };

  useEffect(() => {
    if (data.withdrawFundConfirmation !== null) {
      if (data.withdrawFundConfirmation.success) {
        setConfirmationSuccessfulVisible(!confirmationMessageVisible);
        withdrawFundConfirmationClear();
      }
    }
  }, [data.withdrawFundConfirmation]);

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
              Withdrawn Fund Successfull!
            </Text>
            <View style={{ paddingVertical: 25, alignItems: "center" }}>
              <TickIconComponent/>
            </View>
            <View style={{ paddingHorizontal: 30 }}>
              <Button onPress={() => navigation.navigate("Linked Accounts")}>
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
            borderRadius: 4,
            shadowRadius: 4,
            elevation: 2,
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
                Account Number
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                {accountNumber}
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
                Routing Number
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                {routingNumber}
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
                Bank Name
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                {bankName}
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
                Account Holder’s Name
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                {accountHolderName}
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
            onPress={onSubmitWithdrawFund}
          >
            {data.isLoading ? (
              <>
                <CustomActivityIndicator
                  label="Requesting..."
                  isLoading={data.isLoading}
                />
                <Text button style={{ fontSize: 18 }}>
                  Withdraw Fund
                </Text>
              </>
            ) : (
              <Text button style={{ fontSize: 18 }}>
                Withdraw Fund
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
            onPress={() => navigation.navigate("Linked Accounts")}
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

export default WithdrawFundConfirmation;

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
