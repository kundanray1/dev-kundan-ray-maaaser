import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { LetsGetStartedDonorValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  CustomActivityIndicator
} from "./../../../components/Index.js";
import * as ImagePicker from "expo-image-picker";
import AccountProto from "./../../../protos/account_pb";
import MaaserProto from "./../../../protos/maaser_pb";
import AddressProto from "./../../../protos/address_pb";
const LetsGetStartedDonor = ({ navigation, route, loginData,data, letsGetStartedDonor }) => {
  const [fullNameOrCompanyNameFocus, setFullNameOrCompanyNameFocus] = useState(
    false
  );
  const [street1Focus, setStreet1Focus] = useState(false);
  const [street2Focus, setStreet2Focus] = useState(false);
  const [stateFocus, setStateFocus] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);
  const [zipCodeFocus, setZipCodeFocus] = useState(false);
  const [image, setImage] = useState(null);

//select image function 
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
//set all the required proto for updating and submitting
  const onSubmitSaveAndContinue = (values) => {

    const clientData = new AccountProto.Client();
    const accountData = new AccountProto.Account();
    const addressData = new AddressProto.Address();
   
    accountData.setAccountid(loginData.user.account.accountid);
    accountData.setEmail(loginData.user.account.email);
    accountData.setFullname(values.fullName);
    accountData.setCountrycode(loginData.user.account.countrycode);
    accountData.setAccounttype(loginData.user.account.accounttype);

    addressData.setStreet1(values.street1);
    addressData.setStreet2(values.street2);
    addressData.setState(values.state);
    addressData.setCity(values.city);
    addressData.setZip(values.zipCode);
    addressData.setAddresstype(MaaserProto.AddressType.HOME_ADDRESS);
    

    clientData.setClientid(loginData.user.clientid);
    clientData.setProfilepic(image);
    clientData.setClienttype(loginData.user.clienttype);
    clientData.setAccount(accountData);
    clientData.setAddressesList(addressData);

    letsGetStartedDonor(clientData);
  };

  useEffect(() => {
    if (loginData.user.account.isfirstlogin===true) {
      navigation.navigate("DonorMainTab");
    }
  }, [loginData.user]);

  return (
    <KeyboardAwareScrollView
      style={{ paddingVertical: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <Block center middle>
        <Block style={{ marginTop: 20 }}>
          <Block center>
             <Text
              center
              style={{paddingTop: 5,fontSize: 18, fontWeight: "700" }}
              color={theme.colors.black}
            >
              Let’s Get Started.
            </Text>
            <Text
              center
              style={{ paddingBottom: 15, fontSize: 15, fontWeight: "700" }}
              color={theme.colors.gray2}
            >
              {loginData.user.account.clienttype == 1
                ? "Tell us a bit about you."
                : "Tell us a bit about your company."}
            </Text>
            <TouchableOpacity onPress={pickImage}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{ width: 80, height: 80, borderRadius: 100 }}
                />
              ) : (
                <Image
                  source={require("../../../assets/icons/Vector.png")}
                  style={{ height: 80, width: 80 }}
                />
              )}

              <Block
                style={{
                  backgroundColor: theme.colors.white,
                  padding: 2,
                  borderRadius: 10,
                  position: "absolute",
                  marginLeft: 60,
                  marginTop: 55,
                }}
              >
                <Block
                  style={{
                    backgroundColor: theme.colors.primary2,
                    padding: 4,
                    borderRadius: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name="camera"
                    size={10}
                    color="white"
                  />
                </Block>
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
        <Block flex={2.5} center>
          <Block center style={{ marginTop: 20 }}>
            <Formik
              initialValues={{
                fullName: "Joshan Pradhan",
                street1: "Fikkal ",
                street2: "Phikkal",
                state: " Ilam",
                city: "Fikkal",
                zipCode: "44600",
              }}
              onSubmit={(values) => {
                onSubmitSaveAndContinue(values)
              }}
              validationSchema={LetsGetStartedDonorValidationSchema}
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
                    label={
                       loginData.user.account.clienttype == 1 ? "Full Name" : "Company Name"
                    }
                    focus={fullNameOrCompanyNameFocus}
                    style={{ marginBottom: 5 }}
                    onChangeText={handleChange("fullName")}
                    onBlur={() => {
                      setFieldTouched("fullName");
                      setFullNameOrCompanyNameFocus(false);
                    }}
                    onFocus={() => setFullNameOrCompanyNameFocus(true)}
                    value={values.fullName}
                    style={{
                      borderBottomColor: fullNameOrCompanyNameFocus
                        ? theme.colors.primary2
                        : touched.fullName && errors.fullName
                        ? theme.colors.red
                        : theme.colors.solidGray,
                    }}
                  />
                  <ErrorMessage error={errors.fullName} visible={touched.fullName} />
                  <Text
                    bold
                    style={{ fontSize: 16, marginTop: 5 }}
                    color={
                      street1Focus ||  street2Focus || stateFocus || cityFocus || zipCodeFocus
                        ? theme.colors.primary2
                        : theme.colors.black
                    }
                  >
                    Address
                  </Text>

                  <Input
                    full
                    placeholder="Street 1"
                    style={{ marginBottom: 5 }}
                    onChangeText={handleChange("street1")}
                    onBlur={() => {
                      setFieldTouched("street1");
                      setStreet1Focus(false);
                    }}
                    onFocus={() => setStreet1Focus(true)}
                    value={values.street1}
                    style={{
                      borderBottomColor: street1Focus
                        ? theme.colors.primary2
                        : touched.street1 && errors.street1
                        ? theme.colors.red
                        : theme.colors.solidGray,
                      marginTop: 0,
                    }}
                  />
                  <ErrorMessage
                    error={errors.street1}
                    visible={touched.street1}
                  />

                  <Input
                    full
                    placeholder="Street 2"
                    style={{ marginBottom: 5 }}
                    onChangeText={handleChange("street2")}
                    onBlur={() => {
                      setFieldTouched("street2");
                      setStreet2Focus(false);
                    }}
                    onFocus={() => setStreet2Focus(true)}
                    value={values.street2}
                    style={{
                      borderBottomColor: street2Focus
                        ? theme.colors.primary2
                        : touched.street2 && errors.street2
                        ? theme.colors.red
                        : theme.colors.solidGray,
                      marginTop: 0,
                    }}
                  />
                  <ErrorMessage
                    error={errors.street2}
                    visible={touched.street2}
                  />

                  <Input
                    full
                    placeholder="State"
                    style={{ marginBottom: 5 }}
                    onChangeText={handleChange("state")}
                    onBlur={() => {
                      setFieldTouched("state");
                      setStateFocus(false);
                    }}
                    onFocus={() => setStateFocus(true)}
                    value={values.state}
                    style={{
                      borderBottomColor: stateFocus
                        ? theme.colors.primary2
                        : touched.state && errors.state
                        ? theme.colors.red
                        : theme.colors.solidGray,
                      marginTop: 0,
                    }}
                  />
                  <ErrorMessage error={errors.state} visible={touched.state} />

                  <Input
                    full
                    placeholder="City"
                    style={{ marginBottom: 5 }}
                    onChangeText={handleChange("city")}
                    onBlur={() => {
                      setFieldTouched("city");
                      setCityFocus(false);
                    }}
                    onFocus={() => setCityFocus(true)}
                    value={values.city}
                    style={{
                      borderBottomColor: cityFocus
                        ? theme.colors.primary2
                        : touched.city && errors.city
                        ? theme.colors.red
                        : theme.colors.solidGray,
                      marginTop: 0,
                    }}
                  />
                  <ErrorMessage error={errors.city} visible={touched.city} />

                  <Input
                    full
                    placeholder="Zip Code"
                    style={{ marginBottom: 5 }}
                    onChangeText={handleChange("zipCode")}
                    onBlur={() => {
                      setFieldTouched("zipCode");
                      setZipCodeFocus(false);
                    }}
                    onFocus={() => setZipCodeFocus(true)}
                    value={values.zipCode}
                    style={{
                      borderBottomColor: zipCodeFocus
                        ? theme.colors.primary2
                        : touched.zipCode && errors.zipCode
                        ? theme.colors.red
                        : theme.colors.solidGray,
                      marginTop: 0,
                    }}
                  />
                  <ErrorMessage
                    error={errors.zipCode}
                    visible={touched.zipCode}
                  />

                  {!errors.fullName &&
                  !errors.street1 &&
                  !errors.state &&
                  !errors.city &&
                  !errors.zipCode ? (
                    <Button
                      full
                      style={{
                        marginTop: 12,
                        marginBottom: 12,
                      }}
                      onPress={handleSubmit}
                    >
                     {data.isLoading ? (
                    <>
                    <CustomActivityIndicator
                      isLoading={data.isLoading}
                      label="Requesting..."
                    />
                    <Text button style={{ fontSize: 18 }}>
                      Save and Conitnue
                    </Text>
                    </>
                  ) : (
                    <Text button style={{ fontSize: 18 }}>
                      Save and Conitnue
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
                        Save and Continue
                      </Text>
                    </Button>
                  )}
                </Block>
              )}
            </Formik>
          </Block>
        </Block>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default LetsGetStartedDonor;
