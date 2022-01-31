import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { WithdrawFundValidationSchema } from "./../../../../utility/ValidationSchema.js";
import * as theme from "./../../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  ErrorMessage,
  CustomActivityIndicator,
} from "./../../../../components/Index.js";
import PaymentProto from "./../../../../protos/payment_pb";
import API from "./../../../../api/API";

const WithdrawFund = ({
  navigation,
  data,
  route,
}) => {
  const { accountData } = route.params;
  const [amountFocus, setAmountFocus] = useState();
  const [remarksFocus, setRemarksFocus] = useState();

  const onSubmitWithdrawFund = (values) => {
    navigation.navigate("Withdraw Fund Confirmation",{
      bankid:accountData.bankid,
      accountid:API.user().account.accountid,
      amount:values.amount,
      remarks:values.remarks,
      transactionMedium:PaymentProto.TransactionMedium.ACH,
      transactionType:PaymentProto.TransactionType.WITHDRAW_FUND,
      transactionStatus: PaymentProto.TransactionStatus.TRANSACTION_APPROVED,
      accountHolderName:accountData.accountholdername,
      bankName:accountData.bankname,
      routingNumber:accountData.routingnumber,
      accountNumber:accountData.accountnumber,
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
            onSubmitWithdrawFund(values);
          }}
          validationSchema={WithdrawFundValidationSchema}
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
                value={accountData.accountholdername}
                editable={false}
              />

              <Input
                label="Bank Name"
                value={accountData.bankname}
                editable={false}
              />

              <Input
                label="Routing Number"
                value={accountData.routingnumber}
                editable={false}
              />

              <Input
                label="Account Number"
                value={accountData.accountnumber}
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
                    <>
                    <CustomActivityIndicator
                      label="Requesting..."
                      isLoading={data.isLoading}
                    />
                     <Text button style={{ fontSize: 18 }}>
                     Proceed
                    </Text>
                    </>
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

export default WithdrawFund;
