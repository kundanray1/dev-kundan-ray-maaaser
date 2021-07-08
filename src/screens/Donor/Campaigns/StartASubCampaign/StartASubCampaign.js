import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  View,
  Image,
  Dimensions,
  TextInput,
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
import TickIconComponent from "./../../../../assets/icons/tickIconComponent.js";
import NumberFormat from "react-number-format";
import { Formik } from "formik";
import { WithdrawFundValidationSchema } from "./../../../../utility/ValidationSchema.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StartACampaignOneIconComponent from "./../../../../assets/icons/startACampaignOneIconComponent";

const WIDTH = Dimensions.get("window").width;

const StartASubCampaign = ({
  data,
  startACampaignStart,
  startACampaignClear,
  navigation,
}) => {
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const onSubmitStartASubCampaignLoadFund = () => {};

  // useEffect(() => {
  //     if (data.ACHLoadFundConfirmation !== null) {
  //       if (data.ACHLoadFundConfirmation.success) {
  //         setConfirmationSuccessfulVisible(!confirmationMessageVisible);
  //         ACHLoadFundConfirmationClear();
  //       }
  //     }
  //   }, [data.ACHLoadFundConfirmation]);
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
              Successfully Created!
            </Text>
            <View style={{ paddingVertical: 25, alignItems: "center" }}>
              <TickIconComponent />
            </View>
            <View style={{ paddingHorizontal: 30 }}>
              <Button onPress={() => navigation.navigate("Sub campaigns")}>
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
          value={1000000 / 100}
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

        <View style={styles.amountSection}>
          <Text
            center
            style={{ fontSize: 22, fontWeight: "700", color: "#0DB952",paddingHorizontal:6 }}
          >
            $
          </Text>
          <TextInput
            style={styles.input}
            textAlign={"center"}
            placeholder="0"
            placeholderTextColor="#0DB952"
            keyboardType="numeric"
          />
        </View>
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
        <Button>
          <Text button style={{ fontSize: 18 }}>
            Proceed
          </Text>
        </Button>
      </Block>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9F9FF",
    paddingHorizontal:4

  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    fontWeight:"700",
    fontSize:22,
    color:"#0DB952",
    backgroundColor: "#E9F9FF",
  },
});
