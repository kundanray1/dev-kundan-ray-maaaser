import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { LoginValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  CustomActivityIndicator
} from "./../../../components/Index.js";
import LoginProto from "./../../../protos/auth_pb";
const Login = ({ navigation, data, login }) => {
  console.log("Login");
  const [identifierFocus, setIdentifierFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [checked, setChecked] = useState(false);

//set all the required proto for updating and submitting
  const onSubmitLogin = (values) => {
    const loginData = new LoginProto.LoginRequest();
    loginData.setEmailphone(values.identifier);
    loginData.setPassword(values.password);
    login(loginData);

  };
  
  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block center middle>
        <Block style={{ marginTop: 20 }}>
          <Image
            source={require("../../../assets/icons/logo.png")}
            style={{ height: 100, width: 100 }}
          />
          <Text bold center style={{ marginTop: 6, fontSize: 18 }}>
            Log In
          </Text>
        </Block>
        <Block flex={2.5} center>
          <Block center style={{ marginTop: 44 }}>
            <Formik
              initialValues={{
                identifier: "j@gmail.com",
                password: "Joshan@1234",
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
                <Block>
                  <Input
                    full
                    label="Email address / Phone Number"
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
                  <ErrorMessage
                    error={errors.password}
                    visible={touched.password}
                  />

                  <Block row style={{ marginTop: 10 }}>
                    <Block>
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
                            color={theme.colors.black}
                          />
                        )}
                        <Text
                          bold
                          style={{ paddingHorizontal: 8, marginTop: 4 }}
                        >
                          Remember Me
                        </Text>
                      </TouchableOpacity>
                    </Block>
                    <TouchableOpacity
                      style={{
                        alignItems: "flex-end",
                        marginTop: 4,
                      }}
                      onPress={() => navigation.navigate("Forgot Password")}
                    >
                      <Text bold color={theme.colors.primary2}>
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </Block>

                  {!errors.identifier && !errors.password ? (
                    <Button
                      full
                      style={{
                        marginTop: 12,
                        marginBottom: 12,
                      }}
                      onPress={handleSubmit}
                    >
                      {data.isLoading ? (
                        <CustomActivityIndicator
                         isLoading={data.isLoading}
                         label="Requesting..."
                        />
                      ) : (
                        <Text button style={{ fontSize: 18 }}>
                          Log In
                        </Text>
                      )}
                    </Button>
                  ) : (
                    <Button
                      full
                      style={{
                        marginTop: 12,
                        marginBottom: 12,
                        backgroundColor: theme.colors.gray,
                      }}
                    >
                      <Text button style={{ fontSize: 18 }}>
                        Log In
                      </Text>
                    </Button>
                  )}

                  <TouchableOpacity
                    onPress={() => navigation.navigate("Welcome")}
                  >
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
        </Block>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default Login;
