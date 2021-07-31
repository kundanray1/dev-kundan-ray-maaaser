import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { LoginValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  CustomActivityIndicator,
} from "./../../../components/Index.js";
import LoginProto from "./../../../protos/auth_pb";
const Login = ({ navigation, data, login }) => {
  const [identifierFocus, setIdentifierFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [checked, setChecked] = useState(false);
  const [asyncData, setAsyncData] = useState();

  //set all the required proto for updating and submitting
  const onSubmitLogin = (values) => {
    const loginData = new LoginProto.LoginRequest();
    loginData.setEmailphone(values.identifier);
    loginData.setPassword(values.password);
    login(loginData);
    if (checked) {
      AsyncStorage.setItem(
        "LOGIN_DATA",
        JSON.stringify({
          emailPhone: values.identifier,
          password: values.password,
          rememberMe: checked,
        })
      );
    }else{
       AsyncStorage.removeItem("LOGIN_DATA");
    }
  };
  async function readData() {
    const response = await AsyncStorage.getItem("LOGIN_DATA");
    if (response !== null) {
      setAsyncData(JSON.parse(response));
      setChecked(JSON.parse(response).rememberMe);
    }
  }
  useEffect(() => {
    readData();
  }, []);


  return (
    <Block center middle>
      <Block center style={{ flex: 0, marginBottom: 20 }}>
        <Image
          source={require("../../../assets/icons/logo.png")}
          style={{ height: 100, width: 100 }}
        />
        <Text style={{ paddingVertical: 20, fontSize: 18, fontWeight: "700" }}>
          Login to your account
        </Text>
      </Block>
      <Formik
        enableReinitialize={true}
        initialValues={{
          identifier: asyncData != undefined ? asyncData.emailPhone:"",
          password: asyncData != undefined ? asyncData.password: "",
        }}
        onSubmit={(values) => {
          onSubmitLogin(values);
        }}
        validationSchema={LoginValidationSchema}
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
            <Input
              full
              label="Email / Phone"
              focus={identifierFocus}
              onChangeText={handleChange("identifier")}
              onBlur={() => {
                setFieldTouched("identifier");
                setIdentifierFocus(false);
              }}
              onFocus={() => setIdentifierFocus(true)}
              value={values.identifier}
              style={{
                borderBottomColor: identifierFocus
                  ? theme.colors.primary2
                  : touched.identifier && errors.identifier
                  ? theme.colors.red
                  : theme.colors.solidGray,
              }}
            />
            <ErrorMessage
              error={errors.identifier}
              visible={touched.identifier}
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
            <ErrorMessage error={errors.password} visible={touched.password} />

            <Block
              row
              style={{
                flex: 0,
                paddingVertical: 10,
                justifyContent: "space-between",
              }}
            >
              <Block style={{ flex: 0 }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setChecked(!checked)}
                  style={{ flexDirection: "row" }}
                >
                  {checked ? (
                    <MaterialCommunityIcons
                      name="checkbox-marked"
                      size={24}
                      color={theme.colors.primary2}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="checkbox-blank-outline"
                      size={24}
                      color={theme.colors.solidGray}
                    />
                  )}
                  <Text
                    bold
                    style={{ paddingHorizontal: 8, marginTop: 2 }}
                    color={theme.colors.solidGray}
                  >
                    Remember me
                  </Text>
                </TouchableOpacity>
              </Block>
              <TouchableOpacity
                style={{
                  marginTop: 2,
                }}
                onPress={() => navigation.navigate("Forgot Password")}
              >
                <Text bold color={theme.colors.primary2}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </Block>
            <Block style={{ flex: 0, paddingTop: 20, paddingBottom: 15 }}>
              {!errors.identifier || !errors.password ? (
                <Button full onPress={handleSubmit}>
                  {data.isLoading ? (
                    <>
                      <CustomActivityIndicator
                        isLoading={data.isLoading}
                        label="Logging in..."
                      />
                      <Text button style={{ fontSize: 18 }}>
                        Login
                      </Text>
                    </>
                  ) : (
                    <Text button style={{ fontSize: 18 }}>
                      Login
                    </Text>
                  )}
                </Button>
              ) : (
                <Button full>
                  <Text button style={{ fontSize: 18 }}>
                    Login
                  </Text>
                </Button>
              )}
            </Block>

            <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
              <Text h4 color={theme.colors.solidGray}>
                Don't have an account?{" "}
                <Text h4 color={theme.colors.primary2}>
                  Sign Up
                </Text>
              </Text>
            </TouchableOpacity>
          </Block>
        )}
      </Formik>
    </Block>
  );
};

export default Login;
