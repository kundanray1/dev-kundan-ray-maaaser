import React, { useState,useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { AddMemberValidationSchema } from "./../../../../utility/ValidationSchema.js";
import * as theme from "./../../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  ErrorMessage,
  CustomActivityIndicator,
} from "./../../../../components/Index.js";
import AccountProto from "./../../../../protos/account_pb";
import MaaserProto from "./../../../../protos/maaser_pb";

const AddBeneficiary = ({ navigation, data, addBeneficiary,addBeneficiaryClear }) => {
  const [nameFocus, setNameFocus] = useState();
  const [emailFocus, setEmailFocus] = useState();
  const [phoneNumberFocus, setPhoneNumberFocus] = useState();
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [countryCode, setCountryCode] = useState("");

  //set all the required proto for updating and submitting
  const onSubmitAddBeneficiary = (values) => {
   
  };

   useEffect(() => {
    if(data.addBeneficiary!=null){
    if (data.addBeneficiary.success) {
      addBeneficiaryClear();
      navigation.navigate("Start a campaign");
    }  
    }
  }, [data.addBeneficiary]);

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Formik
          initialValues={{
            name:"",
            email:"",
          }}
          onSubmit={(values) => {
            onSubmitAddBeneficiary(values);
          }}
          validationSchema={AddMemberValidationSchema}
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
                label="Name"
                focus={nameFocus}
                onChangeText={handleChange("name")}
                onBlur={() => {
                  setFieldTouched("name");
                  setNameFocus(false);
                }}
                onFocus={() => setNameFocus(true)}
                value={values.name}
                style={{
                  borderBottomColor: nameFocus
                    ? theme.colors.primary2
                    : touched.name && errors.name
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage error={errors.name} visible={touched.name} />

              <Input
                label="Email"
                focus={emailFocus}
                onChangeText={handleChange("email")}
                onBlur={() => {
                  setFieldTouched("email");
                  setEmailFocus(false);
                }}
                onFocus={() => setEmailFocus(true)}
                value={values.email}
                style={{
                  borderBottomColor: emailFocus
                    ? theme.colors.primary2
                    : touched.email && errors.email
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
              <Block style={{ flex: 0, marginTop: 20 }}>
                {!errors.name && !errors.email ? (
                  <Button onPress={handleSubmit}>
                    {data.isLoading ? (
                      <>
                      <CustomActivityIndicator
                        label="Requesting..."
                        isLoading={data.isLoading}
                      />
                      <Text button style={{ fontSize: 18 }}>
                        Add 
                      </Text>
                      </>
                    ) : (
                      <Text button style={{ fontSize: 18 }}>
                        Add 
                      </Text>
                    )}
                  </Button>
                ) : (
                  <Button>
                    <Text button style={{ fontSize: 18 }}>
                      Add 
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

export default AddBeneficiary;
