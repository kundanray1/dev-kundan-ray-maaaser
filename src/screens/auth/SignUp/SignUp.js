import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  FlatList,
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
import country from "./../../../constants/country.json";
import { AntDesign } from "@expo/vector-icons";
import { RegisterValidationSchema } from "./../../../utility/ValidationSchema.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  CustomPicker,
} from "../../../components/Index.js";
import SvgUri from "expo-svg-uri";
import AccountProto from "./../../../protos/account_pb";
import MaaserProto from "./../../../protos/maaser_pb";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default SignUp = ({route, navigation, data, signUp }) => {
  const [emailOrPhoneFocus, setEmailOrPhoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [clientTypeModalVisible, setClientTypeModalVisible] = useState(false);
  const [countryCodeModalVisible, setCountryCodeModalVisible] = useState(false);
  const [clientType, setClientType] = useState();
  const [countryCode, setCountryCode] = useState("Np");

  const clientTypeOptions = ["Individual", "Organization"];

  const onPressClientTypeItem = (option) => {
    setClientType(option);
    setClientTypeModalVisible(false);
  };
  const onCountryCodeItem = (code) => {
    setCountryCode(code);
    setCountryCodeModalVisible(false);
  };

  const renderClientTypeOptions = clientTypeOptions.map((option, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => onPressClientTypeItem(option)}
      style={{ marginVertical: 2 }}
    >
      <Text bold style={{ paddingVertical: 4, fontSize: 18 }}>
        {option}
      </Text>
    </TouchableOpacity>
  ));

  const RenderCountryCodeOptions = ({ code, url, name }) => (
    <TouchableOpacity
      onPress={() => onCountryCodeItem(code)}
      style={{ marginVertical: 2 }}
    >
      <Block row>
        {/* <Image
          style={{ height: 20, width: 20 }}
          source={{
            uri: `https:${url}`
          }}
        />*/}
        <Text bold style={{ paddingVertical: 4, fontSize: 18 }}>
          {name}
        </Text>
        <Text bold style={{ paddingVertical: 4, fontSize: 18 }}>
          ({code})
        </Text>
      </Block>
    </TouchableOpacity>
  );

  const selectCountryCode = () => (
    <SafeAreaView>
      <Text bold style={{ fontSize: 18 }}>
        Country
      </Text>
      <TouchableOpacity
        style={styles.customPicker}
        onPress={() => setCountryCodeModalVisible(!countryCodeModalVisible)}
      >
        <Block>
          <Text bold style={{ fontSize: 18, color: theme.colors.solidGray }}>
            {countryCode}
          </Text>
        </Block>
        <Block style={{ alignItems: "flex-end" }}>
          <AntDesign name="caretdown" size={18} color="black" />
        </Block>
      </TouchableOpacity>
      <Modal
        visible={countryCodeModalVisible}
        transparent={true}
        nRequestClose={() =>
          setCountryCodeModalVisible(!countryCodeModalVisible)
        }
      >
        <View style={styles.container}>
          <View
            style={[styles.modal, { width: WIDTH - 40, height: HEIGHT - 50 }]}
          >
            <FlatList
              data={country}
              showsVerticalScrollIndicator={true}
              keyExtractor={(data) => {
                return data.alpha3;
              }}
              renderItem={(data) => (
                <RenderCountryCodeOptions
                  code={data.item.alpha3}
                  url={data.item.file_url}
                  name={data.item.name}
                />
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );

  const selectClientType = () => (
    <SafeAreaView>
      <Text bold style={{ fontSize: 16 }} color={clientTypeModalVisible?theme.colors.primary2:theme.colors.black}>
        Select account type
      </Text>
      <TouchableOpacity
        style={styles.customPicker}
        onPress={() => setClientTypeModalVisible(!clientTypeModalVisible)}
      >
        <Block>
          <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
            {clientType}
          </Text>
        </Block>
        <Block style={{ alignItems: "flex-end" }}>
          <AntDesign name="caretdown" size={16} color={theme.colors.solidGray} />
        </Block>

      </TouchableOpacity>
      <Modal
        visible={clientTypeModalVisible}
        transparent={true}
        nRequestClose={() =>
          setClientTypeModalVisible(!clientTypeModalVisible)
        }
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 40, height: 90 }]}>
            {renderClientTypeOptions}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );

  const onSubmitSignUp=(values)=>{

    const {accountType} = route.params;
    const ACCOUNT_TYPE=(accountType=="DONOR")?MaaserProto.AccountType.DONOR_ACCOUNT:MaaserProto.AccountType.RECEIVER_ACCOUNT
    const CLIENT_TYPE=(clientType=="Individual")?AccountProto.ClientType.INDIVIDUAL_CLIENT:AccountProto.ClientType.ORGANIZATION_CLIENT
    const clientData = new AccountProto.Client();
    const accountData = new AccountProto.Account();
    accountData.setEmail(values.emailOrPhone);
    accountData.setPassword(values.password);
    accountData.setCountrycode(countryCode);
    accountData.setAccounttype(ACCOUNT_TYPE);
    clientData.setClienttype(CLIENT_TYPE);
    clientData.setAccount(accountData);           
    signUp(clientData);
  }


  return (
    <KeyboardAwareScrollView>
      <Block center middle>
        <Block style={{ marginTop: 20 }}>
          <Image
            source={require("../../../assets/icons/logo.png")}
            style={{ height: 100, width: 100 }}

          />
          <Text bold center style={{ marginTop: 6,fontSize:18 }}>
            Sign Up
          </Text>
        </Block>

        <Block flex={2.5} center>
          <Block center style={{ marginTop: 44 }}>
            <Formik
              initialValues={{
                emailOrPhone: "",
                password: "Joshan@123",
                confirmPassword: "Joshan@123",
              }}
              onSubmit={(values) => {
                onSubmitSignUp(values)
               
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
                  {selectClientType()}
                  <Input
                    full
                    label="Email address / Phone Number"
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
                {/*  {selectCountryCode()}*/}
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
                  {!errors.emailOrPhone &&
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
                        <Text button style={{ fontSize: 18 }}>
                          Sign Up
                        </Text>
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
                      <Text button style={{ fontSize: 18 }}>
                        Sign Up
                      </Text>
                    </Button>
                  )}

                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text h4 color={theme.colors.solidGray}>
                      Already have an account?{" "}
                      <Text h4 color={theme.colors.primary2}>
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
    borderTopWidth: 1,
    borderBottomWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    borderRadius: 3,
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
    alignItems:'center',
    borderBottomWidth: 1,

  },
});
