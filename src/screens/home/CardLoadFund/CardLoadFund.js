import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions, StyleSheet } from "react-native";
import { Formik } from "formik";
import { CardLoadFundValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  ErrorMessage,
  CustomActivityIndicator,
} from "./../../../components/Index.js";
import PaymentProto from "./../../../protos/payment_pb";
import API from "./../../../api/API";

const WIDTH = Dimensions.get("window").width;
const CardLoadFund = ({
  navigation,
  data,
  route,
}) => {
  const { cardData } = route.params;
  const [amountFocus, setAmountFocus] = useState();
  const [remarksFocus, setRemarksFocus] = useState();

  const onSubmitCardLoadFund = (values) => {
    navigation.navigate("Card Load Fund Confirmation",{
      cardid:cardData.cardid,
      accountid:API.user().account.accountid,
      amount:values.amount,
      remarks:values.remarks,
      transactionMedium:PaymentProto.TransactionMedium.CARD,
      transactionType:PaymentProto.TransactionType.LOAD_FUND,
      transactionStatus: PaymentProto.TransactionStatus.TRANSACTION_APPROVED,

      cardHolderName:cardData.cardholdername,
      cardNumber:cardData.cardnumber,
    })
  };

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Formik
          initialValues={{
            amount: "",
            remarks: "",
          }}
          onSubmit={(values) => {
            onSubmitCardLoadFund(values);
          }}
          validationSchema={CardLoadFundValidationSchema}
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
                label="Card Holder Name"
                value={cardData.cardholdername}
                editable={false}
              />

              <Input
                label="Card Number"
                value={cardData.cardnumber}
                editable={false}
              />

              <Input
                label="Amount"
                focus={amountFocus}
                onChangeText={handleChange("amount")}
                onBlur={() => {
                  setFieldTouched("amount");
                  setAmountFocus(false);
                }}
                number
                onFocus={() => setAmountFocus(true)}
                value={values.amount}
                style={{
                  borderBottomColor: amountFocus
                    ? theme.colors.primary2
                    : touched.amount && errors.amount
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage error={errors.amount} visible={touched.amount} />
              <Input
                label="Remarks"
                focus={remarksFocus}
                onChangeText={handleChange("remarks")}
                onBlur={() => {
                  setFieldTouched("remarks");
                  setRemarksFocus(false);
                }}
                onFocus={() => setRemarksFocus(true)}
                value={values.remarks}
                style={{
                  borderBottomColor: remarksFocus
                    ? theme.colors.primary2
                    : touched.remarks && errors.remarks
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage error={errors.remarks} visible={touched.remarks} />

              {!errors.amount && !errors.remarks ? (
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
                  ) : 
                   (
                    <Text button style={{ fontSize: 18 }}>
                     Proceed
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
                     Proceed
                    </Text>
                  ) : (
                    <Text button style={{ fontSize: 18 }}>
                     Proceed
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

export default CardLoadFund;

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
