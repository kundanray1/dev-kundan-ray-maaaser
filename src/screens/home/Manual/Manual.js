import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { LinkNewCardValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  FormInput,
  ErrorMessage,
} from "./../../../components/Index.js";

const Manual = ({ navigation, data, login }) => {
  //set all the required proto for updating and submitting

  const onSubmitLogin = (values) => {
    console.log("Submit Successful");
  };

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
   
      <Block style={{ paddingHorizontal: 16 }}>
       <Block>
        <Text style={{ fontSize: 18, fontWeight: "700",paddingVertical:2 }}>Manual </Text>
       </Block>
        <Formik
          initialValues={{
            receiverName: "",
            amount: "",
          }}
          onSubmit={(values) => {
            onSubmitLogin(values);
          }}
          validationSchema={LinkNewCardValidationSchema}
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
              <FormInput
                label="Receiver’s Name"
                placeholder="Receiver’s Name"
                onChangeText={handleChange("receiverName")}
                onBlur={() => {
                  setFieldTouched("receiverName");
                }}
                value={values.receiverName}
              />
              <ErrorMessage
                error={errors.receiverName}
                visible={touched.receiverName}
              />
              <FormInput
                label="Amount"
                placeholder="Amount"
                onChangeText={handleChange("amount")}
                onBlur={() => {
                  setFieldTouched("amount");
                }}
                value={values.amount}
              />
              <ErrorMessage error={errors.amount} visible={touched.amount} />


              {!errors.receiverName && !errors.amount ? (
                <Button
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                  }}
                  onPress={handleSubmit}
                >
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
                <Button
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                    backgroundColor: theme.colors.gray,
                  }}
                >
                  <Text button style={{ fontSize: 18 }}>
                    Proceed
                  </Text>
                </Button>
              )}
            </Block>
          )}
        </Formik>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default Manual;
