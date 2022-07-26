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

const AddMember = ({ navigation, data, addMember,addMemberClear,route }) => {
  const [nameFocus, setNameFocus] = useState();
  const [emailFocus, setEmailFocus] = useState();

  //set all the required proto for updating and submitting
  const onSubmitAddMember = (values) => {
    const employeeData = new AccountProto.Employee();
    const accountData = new AccountProto.Account();
    if(route.params!=undefined){
    employeeData.setEmployeeid(route.params.accountData.employeeid);
    }
    accountData.setFullname(values.name);
    accountData.setEmail(values.email);
    accountData.setPhone("");
    accountData.setPassword("Joshan@1234");
    accountData.setCountrycode("NPL");
    accountData.setAccounttype(MaaserProto.AccountType.EMPLOYEE_ACCOUNT);
    employeeData.setAccount(accountData)
    addMember(employeeData);
  };

   useEffect(() => {
    if(data.addMember!=null){
    if (data.addMember.success) {
      console.log("Joshan")
      addMemberClear();
      navigation.navigate("Members");
    }  
    }
  }, [data.addMember]);

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Formik
          initialValues={{
            name:route.params!=undefined ? route.params.accountData.account.fullname: "",
            email:route.params!=undefined ? route.params.accountData.account.email: "",
          }}
          onSubmit={(values) => {
            onSubmitAddMember(values);
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
                label="Email / Phone"
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
                {!errors.name || !errors.email ? (
                  <Button onPress={handleSubmit}>
                    {data.isLoading ? (
                      <>
                      <CustomActivityIndicator
                        label="Requesting..."
                        isLoading={data.isLoading}
                      />
                      <Text button style={{ fontSize: 18 }}>
                        Add Member
                      </Text>
                      </>
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
