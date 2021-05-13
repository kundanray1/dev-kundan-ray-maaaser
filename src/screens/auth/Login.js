import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  StyleSheet,
  Image,
  ActivityIndicator,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { LoginValidationSchema } from "./../../utility/ValidationSchema.js";
import * as theme from "../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  CheckBox,
} from "../../components/Index.js";
import { authStart } from "./../../store/actions/AuthActions";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

const Login = ({ navigation, data }) => {
  const dispatch = useDispatch();
  const [identifierFocus, setIdentifierFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [checked, setChecked] = useState(false);
  const onSubmitRegister = (values) => {
    dispatch(authStart(values));
  };
  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block center middle>
        <Block style={{ marginTop: 20 }}>
          <Image
            source={require("../../assets/icons/logo.png")}
            style={{ height: 100, width: 100 }}
          />
          <Text h3 center style={{ marginTop: 6 }} color={theme.colors.black}>
            Log In
          </Text>
        </Block>
        <Block flex={2.5} center>
          <Block center style={{ marginTop: 44 }}>
            <Formik
              initialValues={{
                identifier: "mobile@gmail.com",
                password: "Mobile@123",
              }}
              onSubmit={(values) => {
                onSubmitRegister(values);
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
                    style={{ marginBottom: 5 }}
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
                    style={{ marginBottom: 5 }}
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
                    <Block row>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setChecked(!checked)}
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
                      </TouchableOpacity>

                      <Text bold style={{ paddingHorizontal: 8 }}>
                        Remember Me
                      </Text>
                    </Block>
                    <TouchableOpacity
                      style={{
                        alignItems: "flex-end",
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
                        <ActivityIndicator
                          size="small"
                          color={theme.colors.white}
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
                    onPress={() => navigation.navigate("Register")}
                  >
                    <Text h4 color="black">
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const structuredSelector = createStructuredSelector({
  data: (state) => state.auth,
});

const mapDispatchToProps = { authStart };
export default connect(structuredSelector, mapDispatchToProps)(Login);
