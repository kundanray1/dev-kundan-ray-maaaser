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
} from "./../../../components/Index.js";

const Manual = ({ navigation, data, login }) => {
  const [receiverNameFocus, setReceiverNameFocus] = useState();
  const [amountFocus, setAmountFocus] = useState();

  //set all the required proto for updating and submitting
  const onSubmitLogin = (values) => {
    console.log("Manual onSubmitLogin values==", values);
    navigation.navigate("Confirmation");
  };

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Block style={{ flex: 0, paddingVertical: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Manual </Text>
        </Block>
        <Formik
          initialValues={{
            receiverName: "",
            amount: "",
          }}
          onSubmit={(values) => {
            onSubmitLogin(values);
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
                label="Receiver’s Name"
                focus={receiverNameFocus}
                onChangeText={handleChange("receiverName")}
                onBlur={() => {
                  setFieldTouched("receiverName");
                  setReceiverNameFocus(false);
                }}
                onFocus={() => setReceiverNameFocus(true)}
                value={values.receiverName}
                style={{
                  borderBottomColor: receiverNameFocus
                    ? theme.colors.primary2
                    : touched.receiverName && errors.receiverName
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage
                error={errors.receiverName}
                visible={touched.receiverName}
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
              <Block style={{ flex: 0, paddingVertical: 10 }}>
                {!errors.receiverName && !errors.amount ? (
                  <Button onPress={handleSubmit}>
                    {data.isLoading ? (
                      <ActivityIndicator
                        size="small"
                        color={theme.colors.white}
                      />
                    ) : (
                      <Text button style={{ fontSize: 18 }}>
                        Proceed
                      </Text>
                    )}
                  </Button>
                ) : (
                  <Button>
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

export default Manual;
