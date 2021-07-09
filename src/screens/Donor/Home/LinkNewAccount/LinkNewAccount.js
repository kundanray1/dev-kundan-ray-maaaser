import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { LinkNewAccountValidationSchema } from "./../../../../utility/ValidationSchema.js";
import * as theme from "./../../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  ErrorMessage,
  CustomActivityIndicator,
} from "./../../../../components/Index.js";
import PaymentProto from "./../../../../protos/payment_pb";
import RoutingNumberGuideIconComponent from "./../../../../assets/icons/routingNumberGuideIconComponent";
import AccountNumberGuideIconComponent from "./../../../../assets/icons/accountNumberGuideIconComponent";
import BankGuideIconComponent from "./../../../../assets/icons/bankGuideIconComponent";

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
  const [confirmAccountNumberFocus, setConfirmAccountNumberFocus] = useState();

  //set all the required proto for updating and submitting
  const onSubmitLinkNewAccount = (values) => {
    const updateLinkNewAccountData = new PaymentProto.Bank();
    updateLinkNewAccountData.setBankname(values.bankName);
    updateLinkNewAccountData.setAccountholdername(values.accountHolderName);
    updateLinkNewAccountData.setAccountnumber(values.accountNumber);
    updateLinkNewAccountData.setRoutingnumber(values.routingNumber);
    updateLinkNewAccountData.setBankstatus(
      PaymentProto.Bank.BankStatus.ACTIVE_STATUS
    );
    if (route.params.account != undefined) {
      updateLinkNewAccountData.setBankid(route.params.account.bankid);
      updateLinkNewAccount(updateLinkNewAccountData);
    } else {
      linkNewAccount(updateLinkNewAccountData);
    }
  };

  useEffect(() => {
    if (data.linkNewAccount !== null) {
      if (data.linkNewAccount.success) {
        linkNewAccountClear();
        if (route.params.screenName == "Linked Accounts") {
          navigation.navigate("Linked Accounts");
        } else {
          navigation.navigate("ACH");
        }
      }
    }
  }, [data.linkNewAccount]);

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Formik
          initialValues={{
            bankName:
              route.params.account != undefined
                ? route.params.account.bankname
                : "",
            accountHolderName:
              route.params.account != undefined
                ? route.params.account.accountholdername
                : "",
            accountNumber:
              route.params.account != undefined
                ? route.params.account.accountnumber
                : "",
            routingNumber:
              route.params.account != undefined
                ? route.params.account.routingnumber
                : "",
            confirmAccountNumber: "",
          }}
          onSubmit={(values) => {
            onSubmitLinkNewAccount(values);
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
              {routingNumberFocus ? (
                <RoutingNumberGuideIconComponent width="100%" />
              ) : accountNumberFocus ? (
                <AccountNumberGuideIconComponent width="100%" />
              ) : (
                <BankGuideIconComponent width="100%" />
              )}

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
                label="Confirm Account Number"
                focus={confirmAccountNumberFocus}
                onChangeText={handleChange("confirmAccountNumber")}
                onBlur={() => {
                  setFieldTouched("confirmAccountNumber");
                  setConfirmAccountNumberFocus(false);
                }}
                number
                onFocus={() => setConfirmAccountNumberFocus(true)}
                value={values.confirmAccountNumber}
                style={{
                  borderBottomColor: confirmAccountNumberFocus
                    ? theme.colors.primary2
                    : touched.confirmAccountNumber &&
                      errors.confirmAccountNumber
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />

              <ErrorMessage
                error={errors.confirmAccountNumber}
                visible={touched.confirmAccountNumber}
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
                  ) : route.params.account != undefined ? (
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
                  {route.params.account != undefined ? (
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
