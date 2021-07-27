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
  generateWithdrawnExcelReceipt,
}) => {
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  useEffect(() => {
    withdrawnDetailsStart(details.transactionid);
    // generateWithdrawnExcelReceipt()
  }, []);

const { details } = route.params;
// React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <TouchableOpacity
//           activeOpacity={0.8}
//           onPress={() => {
//             setConfirmationSuccessfulVisible(true);
//           }}
//           style={{
//             alignItems: "flex-end",
//             marginRight: 16,
//             justifyContent: "center",
//           }}
//         >
//           <DownloadIconComponent height={25} width={20} />
//         </TouchableOpacity>
//       ),
//     });
//   }, [navigation]);

  // const downloadPDF = () => {
  //   setConfirmationSuccessfulVisible(false);
  //   Linking.openURL(data.generateLoadFundReceipt.msg);
  // };

  // const downloadEXCEL = () => {
  //   setConfirmationSuccessfulVisible(false);
  //   Linking.openURL(data.generateWithdrawnExcelReceipt.msg);
  // };



  const ConfirmationMessage = () => (
    <SafeAreaView>
      <Modal
        visible={confirmationMessageVisible}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setConfirmationSuccessfulVisible(!confirmationMessageVisible)
        }
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() =>
            setConfirmationSuccessfulVisible(!confirmationMessageVisible)
          }
        >
          <TouchableWithoutFeedback>
            <View
              style={[styles.modal, { width: "100%", paddingHorizontal: 18 }]}
            >
              <Block
                style={{ flex: 0, alignItems: "center", paddingVertical: 10 }}
              >
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
              <Block
                style={{ flex: 0, flexDirection: "row", paddingBottom: 16 }}
              >
                {/*<TouchableOpacity
                  activeOpacity={0.8}
                  style={{ flexDirection: "column", marginRight: 30 }}
                  onPress={() => downloadPDF()}
                >
                  <PdfIconComponent />
                  <Text center style={{ fontWeight: "400", fontSize: 14 }}>
                    PDF
                  </Text>
                </TouchableOpacity>*/}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ flexDirection: "column" }}
                  onPress={() => downloadEXCEL()}
                >
                  <ExcelIconComponent />
                  <Text center style={{ fontWeight: "400", fontSize: 14 }}>
                    Excel
                  </Text>
                </TouchableOpacity>
              </Block>
              <Block
                center
                style={{ flex: 0, borderTopWidth: 1, borderColor: "#F0EDF1" }}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ paddingVertical: 12 }}
                  onPress={() => setConfirmationSuccessfulVisible(false)}
                >
                  <Text
                    center
                    style={{
                      fontWeight: "700",
                      fontSize: 14,
                      color: theme.colors.primary2,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </Block>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );

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
                  data.withdrawnDetails.transaction.transactionstatus == 1
                    ? theme.colors.schedulingBackground
                    : data.withdrawnDetails.transaction.transactionstatus == 2
                    ? "#F1AEFC"
                    : data.withdrawnDetails.transaction.transactionstatus == 3
                    ? "#AEE6FC"
                    : data.withdrawnDetails.transaction.transactionstatus == 4
                    ? theme.colors.cancelledBackground
                    : theme.colors.schedulingBackground,
                paddingVertical: 4,
                paddingHorizontal: 8,
                width: 130,
              }}
              color={
                data.withdrawnDetails.transaction.transactionstatus == 1
                  ? theme.colors.schedulingText
                  : data.withdrawnDetails.transaction.transactionstatus == 2
                  ? "#9B59B6"
                  : data.withdrawnDetails.transaction.transactionstatus == 3
                  ? "#037CC4"
                  : data.withdrawnDetails.transaction.transactionstatus == 4
                  ? theme.colors.cancelledText
                  : theme.colors.schedulingText
              }
            >
              { data.withdrawnDetails.transaction.transactionstatus == 1
                  ? "APPROVED"
                  : data.withdrawnDetails.transaction.transactionstatus == 2
                  ? "SUBMITTED"
                  : data.withdrawnDetails.transaction.transactionstatus == 3
                  ? "POSTED"
                  : data.withdrawnDetails.transaction.transactionstatus == 4
                  ? "CANCELLED":"NOT AVAILABLE"}
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
