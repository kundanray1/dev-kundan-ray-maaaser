import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Modal,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as theme from "./../../../constants/theme.js";
import country from "./../../../constants/country.json";
import { AntDesign,Ionicons } from "@expo/vector-icons";
import { RegisterValidationSchema } from "./../../../utility/ValidationSchema.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  SearchBar,
  ClientTypePicker,
  CustomActivityIndicator
} from "../../../components/Index.js";
import SvgUri from "expo-svg-uri";
import AccountProto from "./../../../protos/account_pb";
import MaaserProto from "./../../../protos/maaser_pb";
import LoginProto from "./../../../protos/auth_pb";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default SignUp = ({
  route,
  navigation,
  signUpData,
  loginData,
  signUp,
  login,
}) => {
  const [emailOrPhoneFocus, setEmailOrPhoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [clientTypeModalVisible, setClientTypeModalVisible] = useState(false);
  const [countryCodeModalVisible, setCountryCodeModalVisible] = useState(false);
  const [clientType, setClientType] = useState();
  const [countryCode, setCountryCode] = useState();
  const clientTypeOptions = ["Individual", "Organization"];

  const [search, setSearch] = useState();
  const [filteredDataSource, setFilteredDataSource] = useState(country);
  const [masterDataSource, setMasterDataSource] = useState(country);
 

  function searchFilterFunction(text) {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name
          ? item.name.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  }
  const onPressClientTypeItem = (option) => {
    setClientType(option);
    setClientTypeModalVisible(false);
  };

  const onCountryCodeItem = (code) => {
    setCountryCode(code);
    setCountryCodeModalVisible(false);
  };

  const RenderClientTypeOptions = clientTypeOptions.map((option, index) => (
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
      {/*<SvgUri
      width="20"
      height="20"
      source={{
        uri:  `https:${url}`
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
    <SafeAreaView style={{marginTop: 5}}>
      <Text bold style={{ fontSize: 16 }}>
        Country
      </Text>
      <TouchableOpacity
        style={styles.customPicker}
        onPress={() => setCountryCodeModalVisible(!countryCodeModalVisible)}
      >
        <Block>
          <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
            {countryCode}
          </Text>
        </Block>
        <Block style={{ alignItems: "flex-end" }}>
          <AntDesign name="caretdown" size={16} color={theme.colors.solidGray} />
        </Block>
      </TouchableOpacity>
      <Modal
        visible={countryCodeModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setCountryCodeModalVisible(!countryCodeModalVisible)
        }
      >
        <View style={styles.container}>
          <View
            style={[styles.modal, { width: WIDTH - 40, height: HEIGHT - 350 }]}
          >
            <Block style={styles.searchContainer}>
        <Block style={styles.vwSearch}>
          <Ionicons name="search" color="black" size={18} />
        </Block>

        <TextInput
          placeholder="Search"
          style={styles.textInput}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
        />

        {search ? (
          <TouchableOpacity onPress={() => searchFilterFunction()} style={styles.vwClear}>
            <Ionicons name="close-circle-sharp" color="black" size={18} />
          </TouchableOpacity>
        ) : (
          <Block style={styles.vwClear} />
        )}
      </Block>

            <FlatList
              data={filteredDataSource}
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
      <Text
        bold
        style={{ fontSize: 16 }}
        color={
          clientTypeModalVisible ? theme.colors.primary2 : theme.colors.black
        }
      >
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
          <AntDesign
            name="caretdown"
            size={16}
            color={theme.colors.solidGray}
          />
        </Block>
      </TouchableOpacity>
      <Modal
        visible={clientTypeModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => setClientTypeModalVisible(!clientTypeModalVisible)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 40, height: 80 }]}>
            {RenderClientTypeOptions}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );


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
  };


  useEffect(() => {
    if (signUpData.user !== null) {
      const loginData = new LoginProto.LoginRequest();
      loginData.setEmailphone(signUpData.user.client.account.email);
      loginData.setPassword(signUpData.user.client.account.password);
      login(loginData)
    }
  }, [signUpData]);


        return (
    <KeyboardAwareScrollView>
      <Block center middle>
        <Block style={{ marginTop: 20 }}>
          <Image
            source={require("../../../assets/icons/logo.png")}
            style={{ height: 100, width: 100 }}
          />
          <Text bold center style={{ marginTop: 6, fontSize: 18 }}>
            Sign Up
          </Text>
        </Block>

        <Block flex={2.5} center>
          <Block center style={{ marginTop: 44 }}>
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
                  {selectCountryCode()}
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
                      {signUpData.isLoading ? (
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
     borderRadius: 4,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 4,
              elevation: 4,
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
    alignItems: "center",
    borderBottomWidth: 1,
  },
vwClear: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },

  vwSearch: {
    flex: 0.1,
    justifyContent: "center",
  },
  icSearch: {
    height: 20,
    width: 20,
  },
  searchContainer: {
    backgroundColor: theme.colors.white,
    width: "100%",
    height: 38,
    marginTop: 8,
    marginBottom: 6,
    paddingHorizontal: 5,
    flexDirection: "row",
    borderWidth: 1,
    flex: 0,
    borderRadius: 2,
  },
});
