import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { ManualValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  ErrorMessage,
  CustomActivityIndicator
} from "./../../../components/Index.js";
import PaymentProto from "./../../../protos/payment_pb";
import API from "./../../../api/API";

const CampaignDonateNow = ({ navigation, data, loginData,route }) => {
  const [amountFocus, setAmountFocus] = useState();
  const [remarksFocus, setRemarksFocus] = useState();
  //set all the required proto for updating and submitting
  const makeDonation = (values) => {
     navigation.navigate("Campaign Donate Now Confirmation",{
      refId:route.params.refId,
      receiverName:route.params.receiverName,
      amount:values.amount,
      remarks:values.remarks,
      transactionMedium:PaymentProto.TransactionMedium.INTERNAL_MEDIUM,
      transactionType:PaymentProto.TransactionType.CAMPAIGN_FUND,
      transactionStatus: PaymentProto.TransactionStatus.TRANSACTION_APPROVED,
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
            remarks:" "
          }}
          onSubmit={(values) => {
            makeDonation(values);
          }}
          validationSchema={ManualValidationSchema}
        >
          {({
            handleChange,
            touched,
            setFieldTouched,
            handleSubmit,
            values,
            errors,
          }) => (
            <>
              <Input
                    label="Receiver Name"
                    autoCapitalize="words"
                    value={route.params.receiverName}
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
              <Block style={{ flex: 0, paddingVertical: 10 }}>

                {!errors.remarks && !errors.amount ? (
                  <Button onPress={handleSubmit}>
                    <Text button style={{ fontSize: 18 }}>
                        Proceed
                      </Text>
                  </Button>
                ) : (
                 <Button onPress={handleSubmit}>
                    <Text button style={{ fontSize: 18 }}>
                        Proceed
                      </Text>
                  </Button>
                )}

              </Block>
            </>
          )}
        </Formik>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default CampaignDonateNow;
