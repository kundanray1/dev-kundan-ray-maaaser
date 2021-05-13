import React, { useState, useContext } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as theme from "../../constants/theme.js";
import {RegisterValidationSchema} from "./../../utility/ValidationSchema.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  CustomPicker
} from "../../components/Index.js";


export default Register = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [emailOrPhoneFocus, setEmailOrPhoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const changeModeVisibility = (bool) => {
    setModalVisible(bool);
  };

  const onSubmitRegister = async (values) => {
    console.log(values);
  };
  return (
    <KeyboardAwareScrollView
    >
          <Block center middle>
            <Block style={{ marginTop: 20 }}>
              <Image
                source={require("../../assets/icons/logo.png")}
                style={{ height: 100, width: 100 }}
              />
               <Text h3 style={{ marginTop: 6 }} color={theme.colors.black}>
               Sign Up
              </Text>
            </Block>
            
            <Block flex={2.5} center>
              <Block center style={{ marginTop: 44 }}>
                <Formik
                  initialValues={{
                    emailOrPhone: "",
                    password: "",
                    confirmPassword:""
                  }}
                  onSubmit={(values) => {
                    setLoading(!loading);
                    onSubmitRegister(values);
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
                    <Block>
                    <CustomPicker label="Choose Account Type" /> 
                      <Input
                        full
                        label="Email address / Phone Number"
                        style={{ marginBottom: 5 }}
                        onChangeText={handleChange("emailOrPhone")}
                        onBlur={() =>{
                         setFieldTouched("emailOrPhone") 
                         setEmailOrPhoneFocus(false)
                        }}
                        onFocus={()=>setEmailOrPhoneFocus(true)}
                        value={values.emailOrPhone}
                        style={{borderBottomColor:emailOrPhoneFocus?theme.colors.primary2:(touched.emailOrPhone&&errors.emailOrPhone)?theme.colors.red:theme.colors.solidGray}}
                      />
                      <ErrorMessage
                        error={errors.emailOrPhone}
                        visible={touched.emailOrPhone}
                      />
                      <Input
                        full
                        password
                        label="Password"
                        style={{ marginBottom: 5 }}
                        onChangeText={handleChange("password")}
                        onBlur={() =>{
                         setFieldTouched("password") 
                         setPasswordFocus(false)
                        }}
                        onFocus={()=>{
                          setPasswordFocus(true)
                        }}
                        value={values.password}
                        style={{borderBottomColor:passwordFocus?theme.colors.primary2:(touched.password&&errors.password)?theme.colors.red:theme.colors.solidGray}}
                      />
                      <ErrorMessage
                        error={errors.password}
                        visible={touched.password}
                      />
                      <Input
                        full
                        password
                        label="Confirm Password"
                        style={{ marginBottom: 5 }}
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={() =>{
                         setFieldTouched("confirmPassword") 
                         setConfirmPasswordFocus(false)
                        }}
                        onFocus={()=>setConfirmPasswordFocus(true)}
                        value={values.confirmPassword}
                        style={{borderBottomColor:confirmPasswordFocus?theme.colors.primary2:(touched.confirmPassword&&errors.confirmPassword)?theme.colors.red:theme.colors.solidGray}}
                    />
                      <ErrorMessage
                        error={errors.confirmPassword}
                        visible={touched.confirmPassword}
                      />
                      {
                      !errors.emailOrPhone &&
                      !errors.confirmPassword &&
                      !errors.password ? (
                        <Button
                          full
                          style={{
                            marginTop: 12,
                            marginBottom: 12,
                          }}
                          onPress={handleSubmit}
                        >
                          {loading ? (
                            <ActivityIndicator
                              size="small"
                              color={theme.colors.white}
                            />
                          ) : (
                            <Text button style={{fontSize:18}}>Sign Up</Text>
                          )}
                        </Button>
                      ) : (
                        <Button
                          full
                          style={{
                            marginTop: 12,
                            marginBottom: 12,
                          }}
                        >
                          <Text button style={{fontSize:18}}>Sign Up</Text>
                        </Button>
                      )}

                      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text h4 color="black">
                          Already have an account?{" "}
                          <Text
                            h4
                            color={theme.colors.primary2}
                          >
                            Log In
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
