import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
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
import AccountProto from "./../../../protos/account_pb";
import MaaserProto from "./../../../protos/maaser_pb";
import LoginProto from "./../../../protos/auth_pb";
import ClientType from "./ClientType";
import CountryCode from "./CountryCode";
import FaviconIconComponent from "./../../../assets/icons/FaviconIconComponent";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

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
  const [clientTypeError, setClientTypeError] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryCodeError, setCountryCodeError] = useState(false);

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
    if(clientType==""){
      setClientTypeError(true);
    }else if(countryCode==""){
      setCountryCodeError(true)
    }else{
        signUp(clientData);
    }
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
    <KeyboardAwareScrollView  resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={{flex:0,marginTop:"15%",justifyContent:"center",alignItems:"center"}}>
        <Image
        source={require("../../../assets/icons/logo.png")}
        style={{ height: 90, width: 90 }}
      />
        <Text style={{ paddingVertical: 16, fontSize: 18, fontWeight: "700" }}>
          Create your maaser account
        </Text>
        <Formik
          initialValues={{
            emailOrPhone: "",
            password: "",
            confirmPassword: "",
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

            <Block style={{ flex: 0 }}>
              <ClientType
                clientType={clientType}
                setClientType={setClientType}
                setClientTypeError={setClientTypeError}
              />
              <ErrorMessage
                error={"Account type is a required field"}
                visible={clientTypeError}
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
                countryName={countryName}
                setCountryName={setCountryName}
                setCountryCodeError={setCountryCodeError}
              />
               <ErrorMessage
                error={"Country code is a required field"}
                visible={countryCodeError}
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
              <Block style={{ flex: 0, paddingVertical: 16}}>
                {
                !errors.emailOrPhone ||
                !errors.confirmPassword ||
                !errors.password 
                ? (
                  <Button full onPress={handleSubmit}>
                    {data.isLoading ? (
                      <>
                        <CustomActivityIndicator
                          isLoading={data.isLoading}
                          label="Requesting..."
                        />
                        <Text button style={{ fontSize: 18 }}>
                          Sign Up
                        </Text>
                      </>
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
          )}
        </Formik>
    </KeyboardAwareScrollView>
  );
};
