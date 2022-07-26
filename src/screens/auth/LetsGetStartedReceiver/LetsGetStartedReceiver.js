import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image, TouchableOpacity, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LetsGetStartedReceiverValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  CustomActivityIndicator,
} from "./../../../components/Index.js";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import AccountProto from "./../../../protos/account_pb";
import MaaserProto from "./../../../protos/maaser_pb";
import AddressProto from "./../../../protos/address_pb";
import ProfileIconComponent from "../../../assets/icons/profileIconComponent.js";
import CameraIconComponent from "../../../assets/icons/cameraIconComponent.js";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const letsGetStartedReceiver = ({
  navigation,
  route,
  loginData,
  data,
  letsGetStartedReceiver,
  letsGetStartedDonorData,
  imageUpload,
  imageUploadClear,
}) => {
  const [fullNameOrCompanyNameFocus, setFullNameOrCompanyNameFocus] = useState(
    false
  );
  const [street1Focus, setStreet1Focus] = useState(false);
  const [street2Focus, setStreet2Focus] = useState(false);
  const [stateFocus, setStateFocus] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);
  const [zipCodeFocus, setZipCodeFocus] = useState(false);
  const [bioFocus, setBioFocus] = useState(false);
  const [image, setImage] = useState(null);

  //select image function
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      imageUpload(result.uri);
    }
  };
  //set all the required proto for updating and submitting
  const onSubmitSaveAndContinue = (values) => {
    const clientData = new AccountProto.Client();
    const accountData = new AccountProto.Account();
    const addressData = new AddressProto.Address();
    const AddressList = [];

    accountData.setAccountid(loginData.user.account.accountid);
    accountData.setEmail(loginData.user.account.email);
    accountData.setFullname(values.fullName);
    accountData.setCountrycode(loginData.user.account.countrycode);
    accountData.setAccounttype(loginData.user.account.accounttype);

    addressData.setRefid(loginData.user.account.accountid);
    addressData.setStreet1(values.street1);
    addressData.setStreet2(values.street2);
    addressData.setState(values.state);
    addressData.setCity(values.city);
    addressData.setZip(values.zipCode);
    addressData.setAddresstype(MaaserProto.AddressType.HOME_ADDRESS);
    AddressList.push(addressData);

    clientData.setClientid(loginData.user.clientid);
    clientData.setProfilepic(letsGetStartedDonorData.image);
    clientData.setBio(values.bio);
    clientData.setClienttype(loginData.user.clienttype);
    clientData.setAccount(accountData);
    clientData.setAddressesList(AddressList);
    letsGetStartedReceiver(clientData);
  };

  useEffect(() => {
    if (data.user != null) {
      if (data.user.success) {
        navigation.navigate("ReceiverMainTab");
        imageUploadClear();
      }
    }
  }, [data.user]);
  return (
    <KeyboardAwareScrollView
      style={{ paddingVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block>
        <Block center style={{ marginTop: 20 }}>
          <Text
            style={{ paddingTop: 5, fontSize: 18, fontWeight: "700" }}
            color={theme.colors.black}
          >
            Let’s Get Started.
          </Text>
          {loginData.user.clienttype == 1 ? (
            <Text
              center
              style={{ paddingBottom: 15, fontSize: 15, fontWeight: "700" }}
              color={theme.colors.gray2}
            >
              Tell us a bit about you
            </Text>
          ) : (
            <Text
              center
              style={{ paddingBottom: 15, fontSize: 15, fontWeight: "700" }}
              color={theme.colors.gray2}
            >
              Tell us a bit about your company
            </Text>
          )}
          <TouchableOpacity
            onPress={pickImage}
            style={{
              zIndex: 1,
              position: "absolute",
              marginTop: HEIGHT / 12,
            }}
          >
            {image ? (
              <Image
                source={{ uri: image }}
                style={{
                  height: HEIGHT * 0.105,
                  width: WIDTH * 0.2,
                  borderRadius: 100,
                }}
              />
            ) : (
              <ProfileIconComponent
                height={HEIGHT * 0.105}
                width={WIDTH * 0.2}
              />
            )}

            <Block
              style={{
                padding: 2,
                borderRadius: 10,
                position: "absolute",
                marginLeft: WIDTH * 0.126,
                marginTop: HEIGHT * 0.064,
              }}
            >
              <CameraIconComponent
                height={HEIGHT * 0.034}
                width={WIDTH * 0.12}
              />
            </Block>
          </TouchableOpacity>
        </Block>

        <Block center style={{ marginTop: HEIGHT / 10 }}>
          <Formik
            initialValues={{
              fullName: "",
              street1: "",
              street2: "",
              state: "",
              city: "",
              zipCode: "",
              bio: "",
            }}
            onSubmit={(values) => {
              onSubmitSaveAndContinue(values);
            }}
            validationSchema={LetsGetStartedReceiverValidationSchema}
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
                  label={
                    loginData.user.clienttype == 1
                      ? "Full Name"
                      : "Company Name"
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
                <ErrorMessage
                  error={errors.fullName}
                  visible={touched.fullName}
                />
                <Text
                  bold
                  style={{ fontSize: 16, marginTop: 5 }}
                  color={
                    street1Focus ||
                    street2Focus ||
                    stateFocus ||
                    cityFocus ||
                    zipCodeFocus
                      ? theme.colors.primary2
                      : theme.colors.black
                  }
                >
                  Address
                </Text>

                <Input
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
                  number
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

                <Input
                  label="Bio"
                  focus={bioFocus}
                  onChangeText={handleChange("bio")}
                  onBlur={() => {
                    setFieldTouched("bio");
                    setBioFocus(false);
                  }}
                  multiline
                  numberOfLines={3}
                  onFocus={() => setBioFocus(true)}
                  value={values.bio}
                  style={{
                    borderColor: bioFocus
                      ? theme.colors.primary2
                      : touched.bio && errors.bio
                      ? theme.colors.red
                      : theme.colors.solidGray,
                    height: 70,
                    borderRadius: 2,
                    borderWidth: 1,
                    marginTop: 4,
                    paddingHorizontal: 8,
                    textAlignVertical: "top",
                  }}
                />
                <ErrorMessage error={errors.bio} visible={touched.bio} />

                {!errors.fullName &&
                !errors.street1 &&
                !errors.state &&
                !errors.city &&
                !errors.zipCode &&
                !errors.bio ? (
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
                          Save and Continue
                        </Text>
                      </>
                    ) : (
                      <Text button style={{ fontSize: 18 }}>
                        Save and Continue
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
    </KeyboardAwareScrollView>
  );
};

export default letsGetStartedReceiver;
