

import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Modal,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as theme from "./../../../constants/theme.js";
import { AntDesign } from "@expo/vector-icons";
import {RegisterValidationSchema} from "./../../../utility/ValidationSchema.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  CustomPicker
} from "../../../components/Index.js";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default SignUp = ({ navigation,data,signUp }) => {
  const [emailOrPhoneFocus, setEmailOrPhoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [accountTypeModalVisible, setAccountTypeModalVisible] = useState(false);
  const [countryCodeModalVisible, setCountryCodeModalVisible] = useState(false);
  const [accountType, setAccountType] = useState("Select");
  const [countryCode, setCountryCode] = useState("Select");

  const accountTypeOptions = ["Individual", "Organization"];
  const countryCodeOptions = ["Individual", "Organization"];

  const onPressAccountTypeItem = (option) => {
    setAccountType(option);
    setAccountTypeModalVisible(false);
  };
  const onCountryCodeItem = (option) => {
    setCountryCode(option);
    setCountryCodeModalVisible(false);
  };

  const renderAccountTypeOptions = accountTypeOptions.map((option, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => onPressItem(option)}
      style={{ marginVertical: 2 }}
    >
      <Text bold style={{ paddingVertical: 4, fontSize: 18}}>
        {option}
      </Text>
    </TouchableOpacity>
  ));

    const renderCountryCodeOptions = countryCodeOptions.map((option, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => onPressItem(option)}
      style={{ marginVertical: 2 }}
    >
      <Text bold style={{ paddingVertical: 4, fontSize: 18}}>
        {option}
      </Text>
    </TouchableOpacity>
  ));

const selectAccountType=()=>(
 <SafeAreaView>
      <Text bold style={{ fontSize: 18 }}>
        Select account type
      </Text>
      <TouchableOpacity
        style={styles.customPicker}
        onPress={() => setAccountTypeModalVisible(!accountTypeModalVisible)}
      >
        <Block>
          <Text bold style={{ fontSize: 18 , color: theme.colors.solidGray}}>
            {accountType}
          </Text>
        </Block>
        <Block style={{ alignItems: "flex-end" }}>
          <AntDesign name="caretdown" size={18} color="black" />
        </Block>
      </TouchableOpacity>
      <Modal
        visible={accountTypeModalVisible}
        transparent={true}
        nRequestClose={() => setAccountTypeModalVisible(!accountTypeModalVisible)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 40, height: 90 }]}>
            {renderAccountTypeOptions}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
)


  return (
    <KeyboardAwareScrollView
    >
          <Block center middle>
            <Block style={{ marginTop: 20 }}>
              <Image
                source={require("../../../assets/icons/logo.png")}
                style={{ height: 100, width: 100 }}
              />
               <Text h3 style={{ marginTop: 6 }}>
               Sign Up
              </Text>
            </Block>
            
            <Block flex={2.5} center>
              <Block center style={{ marginTop: 44 }}>
                <Formik
                  initialValues={{
                    emailOrPhone: "joshan@gmail.com",
                    password: "Joshan@123",
                    confirmPassword:"Joshan@123"
                  }}
                  onSubmit={(values) => {
                    signUp(values);
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
                    <SafeAreaView>
      <Text bold style={{ fontSize: 18 }}>
        Select account type
      </Text>
      <TouchableOpacity
        style={styles.customPicker}
        onPress={() => setAccountTypeModalVisible(!accountTypeModalVisible)}
      >
        <Block>
          <Text bold style={{ fontSize: 18 , color: theme.colors.solidGray}}>
            {accountType}
          </Text>
        </Block>
        <Block style={{ alignItems: "flex-end" }}>
          <AntDesign name="caretdown" size={18} color="black" />
        </Block>
      </TouchableOpacity>
      <Modal
        visible={accountTypeModalVisible}
        transparent={true}
        nRequestClose={() => setAccountTypeModalVisible(!accountTypeModalVisible)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 40, height: 90 }]}>
            {renderAccountTypeOptions}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
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
                          {data.isLoading ? (
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
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    borderLeftWidth: 1,
    borderTopWidth:1,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    padding: 10,
  },
  option: {
    alignItems: "flex-start",
  },
  customPicker: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: theme.colors.solidGray,
    borderBottomWidth: 1.5,
  },
});
