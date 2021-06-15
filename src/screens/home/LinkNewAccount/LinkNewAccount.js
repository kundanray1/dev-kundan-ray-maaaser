import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Dimensions,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import { LinkNewAccountValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  ErrorMessage,
  CustomActivityIndicator,
} from "./../../../components/Index.js";
import PaymentProto from "./../../../protos/payment_pb";
const WIDTH = Dimensions.get("window").width;

const LinkNewAccount = ({
  navigation,
  data,
  linkNewAccount,
  linkNewAccountClear,
  updateLinkNewAccount,
  route,
}) => {
  const [bankNameFocus, setBankNameFocus] = useState();
  const [accountHolderNameFocus, setAccountHolderNameFocus] = useState();
  const [accountNumberFocus, setAccountNumberFocus] = useState();
  const [routingNumberFocus, setRoutingNumberFocus] = useState();

  //set all the required proto for updating and submitting
  const onSubmitLinkNewAccount = (values) => {
    const linkNewAccountData = new PaymentProto.Bank();
    linkNewAccountData.setBankname(values.bankName);
    linkNewAccountData.setAccountholdername(values.accountHolderName);
    linkNewAccountData.setAccountnumber(values.accountNumber);
    linkNewAccountData.setRoutingnumber(values.routingNumber);
    linkNewAccountData.setBankstatus(
      PaymentProto.Bank.BankStatus.ACTIVE_STATUS
    );
    linkNewAccount(linkNewAccountData);
  };

  //set all the required proto for updating and submitting
  const onSubmitUpdateLinkNewAccount = (values) => {
    const updateLinkNewAccountData = new PaymentProto.Bank();
    updateLinkNewAccountData.setBankid(route.params.account.bankid);
    updateLinkNewAccountData.setBankname(values.bankName);
    updateLinkNewAccountData.setAccountholdername(values.accountHolderName);
    updateLinkNewAccountData.setAccountnumber(values.accountNumber);
    updateLinkNewAccountData.setRoutingnumber(values.routingNumber);
    updateLinkNewAccountData.setBankstatus(
      PaymentProto.Bank.BankStatus.ACTIVE_STATUS
    );
    console.log(updateLinkNewAccountData);
    updateLinkNewAccount(updateLinkNewAccountData);
  };

  //===========USEFUL TO SHOW MODAL OF DONATIONS SUCCESSFUL===============

  // useEffect(() => {
  //   if (data.linkNewAccount.success) {
  //     linkNewAccountClear();
  //     setConfirmationSuccessfulVisible(true);
  //     return () => {
  //       setTimeout(function () {
  //         setConfirmationSuccessfulVisible(false);
  //         navigation.navigate("ACH");
  //       }, 1000);
  //     };
  //   }
  // }, [data]);

  useEffect(() => {
    if (data.linkNewAccount.success) {
      linkNewAccountClear();
      navigation.navigate("ACH");
    }
  }, [data]);

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Formik
          initialValues={{
            bankName:
              route.params != undefined ? route.params.account.bankname : "b",
              accountHolderName:
              route.params != undefined ? route.params.account.accountholdername : "JoshanEdit Pradhan",
            accountNumber:
              route.params != undefined
                ? route.params.account.accountnumber
                : "113456789002",
            routingNumber:
              route.params != undefined
                ? route.params.account.routingnumber
                : "123456733",
          }}
          onSubmit={(values) => {
            route.params != undefined
              ? onSubmitUpdateLinkNewAccount(values)
              : onSubmitLinkNewAccount(values);
          }}
          validationSchema={LinkNewAccountValidationSchema}
        >
          {({
            handleChange,
            touched,
            setFieldTouched,
            handleSubmit,
            values,
            errors,
          }) => (
            <Block>
              <Input
                label="Bank Name"
                focus={bankNameFocus}
                onChangeText={handleChange("bankName")}
                onBlur={() => {
                  setFieldTouched("bankName");
                  setBankNameFocus(false);
                }}
                onFocus={() => setBankNameFocus(true)}
                value={values.bankName}
                style={{
                  borderBottomColor: bankNameFocus
                    ? theme.colors.primary2
                    : touched.bankName && errors.bankName
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage
                error={errors.bankName}
                visible={touched.bankName}
              />
               <Input
                label="Account Holder Name"
                focus={accountHolderNameFocus}
                onChangeText={handleChange("accountHolderName")}
                onBlur={() => {
                  setFieldTouched("accountHolderName");
                  setAccountHolderNameFocus(false);
                }}
                onFocus={() => setAccountHolderNameFocus(true)}
                value={values.accountHolderName}
                style={{
                  borderBottomColor: accountHolderNameFocus
                    ? theme.colors.primary2
                    : touched.accountHolderName && errors.accountHolderName
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage
                error={errors.accountHolderName}
                visible={touched.accountHolderName}
              />

              <Input
                label="Account Number"
                focus={accountNumberFocus}
                onChangeText={handleChange("accountNumber")}
                onBlur={() => {
                  setFieldTouched("accountNumber");
                  setAccountNumberFocus(false);
                }}
                number
                onFocus={() => setAccountNumberFocus(true)}
                value={values.accountNumber}
                style={{
                  borderBottomColor: accountNumberFocus
                    ? theme.colors.primary2
                    : touched.accountNumber && errors.accountNumber
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />

              <ErrorMessage
                error={errors.accountNumber}
                visible={touched.accountNumber}
              />

              <Input
                label="Routing Number"
                focus={routingNumberFocus}
                onChangeText={handleChange("routingNumber")}
                onBlur={() => {
                  setFieldTouched("routingNumber");
                  setRoutingNumberFocus(false);
                }}
                number
                onFocus={() => setRoutingNumberFocus(true)}
                value={values.routingNumber}
                style={{
                  borderBottomColor: routingNumberFocus
                    ? theme.colors.primary2
                    : touched.routingNumber && errors.routingNumber
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage
                error={errors.routingNumber}
                visible={touched.routingNumber}
              />

              {!errors.bankName &&
              !errors.accountNumber &&
              !errors.routingNumber ? (
                <Button
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                  }}
                  onPress={handleSubmit}
                >
                  {data.isLoading ? (
                    <CustomActivityIndicator
                      label="Requesting..."
                      isLoading={data.isLoading}
                    />
                  ) : route.params != undefined ? (
                    <Text button style={{ fontSize: 18 }}>
                      Update Account
                    </Text>
                  ) : (
                    <Text button style={{ fontSize: 18 }}>
                      Link Account
                    </Text>
                  )}
                </Button>
              ) : (
                <Button
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                  }}
                >
                  {route.params != undefined ? (
                    <Text button style={{ fontSize: 18 }}>
                      Update Account
                    </Text>
                  ) : (
                    <Text button style={{ fontSize: 18 }}>
                      Link Account
                    </Text>
                  )}
                </Button>
              )}
            </Block>
          )}
        </Formik>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default LinkNewAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modal: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    paddingVertical: 20,
  },
});
