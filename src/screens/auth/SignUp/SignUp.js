import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as theme from "./../../../constants/theme.js";
import country from "./../../../constants/country.json";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { RegisterValidationSchema } from "./../../../utility/ValidationSchema.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  SearchBar,
  ClientTypePicker,
  CustomActivityIndicator,
} from "../../../components/Index.js";
import SvgUri from "expo-svg-uri";
import AccountProto from "./../../../protos/account_pb";
import MaaserProto from "./../../../protos/maaser_pb";
import LoginProto from "./../../../protos/auth_pb";
import ClientType from "./ClientType";
import CountryCode from "./CountryCode";

export default SignUp = ({
  route,
  navigation,
  data,
  loginData,
  signUp,
  login,
}) => {
  const [emailOrPhoneFocus, setEmailOrPhoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [clientType, setClientType] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const onSubmitSignUp = (values) => {
    
    const { accountType } = route.params;
    const ACCOUNT_TYPE =
      accountType == "DONOR"
        ? MaaserProto.AccountType.DONOR_ACCOUNT
        : MaaserProto.AccountType.RECEIVER_ACCOUNT;
    const CLIENT_TYPE =
      clientType == "Individual"
        ? AccountProto.ClientType.INDIVIDUAL_CLIENT
        : AccountProto.ClientType.ORGANIZATION_CLIENT;
    const clientData = new AccountProto.Client();
    const accountData = new AccountProto.Account();
    accountData.setEmail(values.emailOrPhone);
    accountData.setPassword(values.password);
    accountData.setCountrycode(countryCode);
    accountData.setAccounttype(ACCOUNT_TYPE);
    clientData.setClienttype(CLIENT_TYPE);
    clientData.setAccount(accountData);
    signUp(clientData);
    console.log(values)
    console.log(clientType)
    console.log(countryCode)
  };

  useEffect(() => {
    if (data.user !== null) {
      const loginData = new LoginProto.LoginRequest();
      loginData.setEmailphone(data.user.client.account.email);
      loginData.setPassword(data.user.client.account.password);
      login(loginData);
    }
  }, [data]);

  return (
    <Block center middle>
      <Block center style={{ flex: 0, marginBottom: 20 }}>
        <Image
          source={require("../../../assets/icons/logo.png")}
          style={{ height: 100, width: 100 }}
        />
        <Text style={{ paddingVertical: 20, fontSize: 18, fontWeight: "700" }}>
          Create your maaser account
        </Text>
      </Block>

      <Formik
        initialValues={{
          emailOrPhone: "@gmail.com",
          password: "Joshan@123",
          confirmPassword: "Joshan@123",
        }}
        onSubmit={(values) => {
          onSubmitSignUp(values);
        }}
        validationSchema={RegisterValidationSchema}
      >
        {({
          handleChange,
          touched,
          setFieldTouched,
          handleSubmit,
          values,
          errors,
        }) => (
          <KeyboardAvoidingView behavior="padding">
            <Block style={{ flex: 0 }}>
              <ClientType
                clientType={clientType}
                setClientType={setClientType}
              />
              <Input
                full
                label="Email / Phone"
                focus={emailOrPhoneFocus}
                onChangeText={handleChange("emailOrPhone")}
                onBlur={() => {
                  setFieldTouched("emailOrPhone");
                  setEmailOrPhoneFocus(false);
                }}
                onFocus={() => setEmailOrPhoneFocus(true)}
                value={values.emailOrPhone}
                style={{
                  borderBottomColor: emailOrPhoneFocus
                    ? theme.colors.primary2
                    : touched.emailOrPhone && errors.emailOrPhone
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage
                error={errors.emailOrPhone}
                visible={touched.emailOrPhone}
              />
              <CountryCode
                countryCode={countryCode}
                setCountryCode={setCountryCode}
              />
              <Input
                full
                password
                label="Password"
                focus={passwordFocus}
                onChangeText={handleChange("password")}
                onBlur={() => {
                  setFieldTouched("password");
                  setPasswordFocus(false);
                }}
                onFocus={() => {
                  setPasswordFocus(true);
                }}
                value={values.password}
                style={{
                  borderBottomColor: passwordFocus
                    ? theme.colors.primary2
                    : touched.password && errors.password
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage
                error={errors.password}
                visible={touched.password}
              />
              <Input
                full
                password
                label="Confirm Password"
                focus={confirmPasswordFocus}
                onChangeText={handleChange("confirmPassword")}
                onBlur={() => {
                  setFieldTouched("confirmPassword");
                  setConfirmPasswordFocus(false);
                }}
                onFocus={() => setConfirmPasswordFocus(true)}
                value={values.confirmPassword}
                style={{
                  borderBottomColor: confirmPasswordFocus
                    ? theme.colors.primary2
                    : touched.confirmPassword && errors.confirmPassword
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage
                error={errors.confirmPassword}
                visible={touched.confirmPassword}
              />
              <Block style={{ flex: 0, paddingTop: 20, paddingBottom: 15 }}>
                {!errors.emailOrPhone &&
                !errors.confirmPassword &&
                !errors.password ? (
                  <Button full onPress={handleSubmit}>
                    {data.isLoading ? (
                      <CustomActivityIndicator
                        isLoading={data.isLoading}
                        label="Requesting..."
                      />
                    ) : (
                      <Text button style={{ fontSize: 18 }}>
                        Sign Up
                      </Text>
                    )}
                  </Button>
                ) : (
                  <Button full>
                    <Text button style={{ fontSize: 18 }}>
                      Sign Up
                    </Text>
                  </Button>
                )}
              </Block>

              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text h4 color={theme.colors.solidGray}>
                  Already have an account?{" "}
                  <Text h4 color={theme.colors.primary2}>
                    Login
                  </Text>
                </Text>
              </TouchableOpacity>
            </Block>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </Block>
  );
};
