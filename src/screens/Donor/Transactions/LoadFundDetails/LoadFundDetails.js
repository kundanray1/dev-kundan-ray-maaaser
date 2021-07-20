import React, { useState,useEffect } from "react";
import { SafeAreaView,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Dimensions, } from "react-native";
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

const LoadFundDetails = ({ route, data, navigation }) => {
  const { details } = route.params;
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setConfirmationSuccessfulVisible(true);
          }}
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
              <Block style={{ flex: 0, flexDirection: "row",paddingBottom:16 }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ flexDirection: "column", marginRight: 30 }}
                >
                  <PdfIconComponent />
                  <Text center style={{ fontWeight: "400", fontSize: 14 }}>
                    PDF
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ flexDirection: "column" }}
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
                <TouchableOpacity activeOpacity={0.8} style={{ paddingVertical: 12 }} onPress={()=>setConfirmationSuccessfulVisible(false)}>
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
      {ConfirmationMessage()}
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