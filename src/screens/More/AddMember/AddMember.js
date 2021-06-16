import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { AddMemberValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  ErrorMessage,
} from "./../../../components/Index.js";

const AddMember = ({ navigation, data, login }) => {
  const [nameFocus, setNameFocus] = useState();
  const [emailFocus, setEmailFocus] = useState();

  //set all the required proto for updating and submitting
  const onSubmitLogin = (values) => {
    console.log("AddMember onSubmitLogin values==", values);
    navigation.navigate("Confirmation");
  };

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) => {
            onSubmitLogin(values);
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
              <ErrorMessage
                error={errors.name}
                visible={touched.name}
              />

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
                {!errors.receiverName && !errors.amount ? (
                  <Button onPress={handleSubmit}>
                    {data.isLoading ? (
                      <ActivityIndicator
                        size="small"
                        color={theme.colors.white}
                      />
                    ) : (
                      <Text button style={{ fontSize: 18 }}>
                        Add Member
                      </Text>
                    )}
                  </Button>
                ) : (
                  <Button>
                    <Text button style={{ fontSize: 18 }}>
                      Add Member
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

export default AddMember;
