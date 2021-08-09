import React, { useState, useEffect,useRef } from "react";
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
import * as Linking from "expo-linking";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";

const WIDTH = Dimensions.get("window").width;

const LoadFundDetails = ({
  route,
  data,
  navigation,
  loadFundDetailsStart,
  loadFundDetailsClear,
  generateLoadFundReceiptStart,
  generateExcelReceiptStart,
}) => {
  const { details } = route.params;
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  useEffect(() => {
    loadFundDetailsStart(details.transactionid);
    generateLoadFundReceiptStart(details.transactionid);
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onOpen}
          style={{
            alignItems: "flex-end",
            marginRight: 16,
            justifyContent: "center",
          }}
        >
          <DownloadIconComponent height={25} width={20} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const downloadPDF = () => {
    modalizeRef.current?.close();
    Linking.openURL(data.generateLoadFundReceipt.msg);
  };

  const modalizeRef = useRef();

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      {data.isLoading || data.generateLoadFundReceiptLoading ? (
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
              {moment(data.loadFundDetails.transaction.createdat).format(
                "DD MMM, YYYY"
              )}{" "}
              at{" "}
              {moment(data.loadFundDetails.transaction.createdat).format(
                "hh:mm A"
              )}
            </Text>
          </Block>

          {data.loadFundDetails.transaction.card != undefined ? (
            <Block style={{ flex: 0, paddingVertical: 8 }}>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                Card Holder’s Name
              </Text>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                {data.loadFundDetails.transaction.card.cardholdername}
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
                  {data.loadFundDetails.transaction.bank.accountholdername}
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
                  {data.loadFundDetails.transaction.bank.bankname}
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
                  {data.loadFundDetails.transaction.bank.routingnumber}
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
                  {data.loadFundDetails.transaction.bank.accountnumber}
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
              value={data.loadFundDetails.transaction.amount / 100}
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
              {data.loadFundDetails.transaction.remark}
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
                  data.loadFundDetails.transaction.transactionstatus == 1
                    ? theme.colors.schedulingBackground
                    : data.loadFundDetails.transaction.transactionstatus == 2
                    ? "#F1AEFC"
                    : data.loadFundDetails.transaction.transactionstatus == 3
                    ? "#AEE6FC"
                    : data.loadFundDetails.transaction.transactionstatus == 4
                    ? theme.colors.cancelledBackground
                    : theme.colors.schedulingBackground,
                paddingVertical: 4,
                paddingHorizontal: 8,
                width: 130,
              }}
              color={
                data.loadFundDetails.transaction.transactionstatus == 1
                  ? theme.colors.schedulingText
                  : data.loadFundDetails.transaction.transactionstatus == 2
                  ? "#9B59B6"
                  : data.loadFundDetails.transaction.transactionstatus == 3
                  ? "#037CC4"
                  : data.loadFundDetails.transaction.transactionstatus == 4
                  ? theme.colors.cancelledText
                  : theme.colors.schedulingText
              }
            >
              {data.loadFundDetails.transaction.transactionstatus == 1
                ? "APPROVED"
                : data.loadFundDetails.transaction.transactionstatus == 2
                ? "SUBMITTED"
                : data.loadFundDetails.transaction.transactionstatus == 3
                ? "POSTED"
                : data.loadFundDetails.transaction.transactionstatus == 4
                ? "CANCELLED"
                : "NOT AVAILABLE"}
            </Text>
          </Block>
        </>
      )}
      <Portal>
        <Modalize
          ref={modalizeRef}
          snapPoint={160}
          modalHeight={160}
          withHandle={false}
        >
          <View style={{ width: "100%", paddingHorizontal: 18 }}>
            <Block style={{ flex: 0, alignItems: "center", paddingTop: 10 }}>
              <Block
                style={{
                  flex: 0,
                  backgroundColor: "#E2E2E2",
                  width: WIDTH - 280,
                  borderRadius: 10,
                  paddingVertical: 2,
                }}
              />
              <Text
                center
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  paddingVertical: 4,
                }}
              >
                Export to
              </Text>
            </Block>
            <Block style={{ flex: 0, flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ flexDirection: "column", marginRight: 30 }}
                onPress={() => {
                  modalizeRef.current?.close();
                  downloadPDF();
                }}
              >
                <PdfIconComponent />
                <Text center style={{ fontWeight: "400", fontSize: 14 }}>
                  PDF
                </Text>
              </TouchableOpacity>
            </Block>
          </View>
        </Modalize>
      </Portal>
    </SafeAreaView>
  );
};

export default LoadFundDetails;

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
