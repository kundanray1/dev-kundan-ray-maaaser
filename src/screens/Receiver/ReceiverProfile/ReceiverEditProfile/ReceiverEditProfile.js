import React, { useState,useEffect } from "react";
import {
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  Input,
  ErrorMessage,
  CustomActivityIndicator,
  Button,
} from "../../../../components/Index.js";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import AccountProto from "./../../../../protos/account_pb";
import MaaserProto from "./../../../../protos/maaser_pb";
import AddressProto from "./../../../../protos/address_pb";
import { ProfileValidationSchema } from "./../../../../utility/ValidationSchema.js";
import ProfileIconComponent from "../../../../assets/icons/profileIconComponent.js";
import CameraIconComponent from "../../../../assets/icons/cameraIconComponent.js";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const ReceiverEditProfile = ({ navigation, loginData, data,receiverProfileData,receiverEditProfile,receiverEditProfileClear }) => {
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
useEffect(() => {
    if(data.receiverEditProfile!==null){
       if(data.receiverEditProfile.success){
        receiverEditProfileClear()
        navigation.navigate("Receiver Profile")
       }
    }
  }, [data.receiverEditProfile]); 
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

    addressData.setStreet1(values.street1);
    addressData.setStreet2(values.street2);
    addressData.setState(values.state);
    addressData.setCity(values.city);
    addressData.setZip(values.zipCode);
    addressData.setAddresstype(MaaserProto.AddressType.HOME_ADDRESS);
    AddressList.push(addressData);

    clientData.setClientid(loginData.user.clientid);
    clientData.setProfilepic(image);
    clientData.setBio(values.bio);
    clientData.setClienttype(loginData.user.clienttype);
    clientData.setAccount(accountData);
    clientData.setAddressesList(AddressList);
    receiverEditProfile(clientData);
  };

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{ flex: 1, top: StatusBar.currentHeight }}>
        <Block
          style={{
            flex: 0.8,
            alignItems: "center",
          }}
        >
          <ImageBackground
            style={{
              height: "24%",
              width: "100%",
              flex: 1,
            }}
            imageStyle={{
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
            source={require("../../../../assets/images/backgroundColor.png")}
          >
            <Block
              style={{
                paddingHorizontal: 16,
                paddingBottom: 40,
              }}
            >
              <Block
                style={{
                  borderRadius: 4,
                  elevation: 4,
                  paddingTop: HEIGHT / 14,
                  paddingBottom: 8,
                  marginTop: HEIGHT / 10,
                  backgroundColor: theme.colors.white,
                  paddingHorizontal: 16,
                }}
              >
                <Formik
                  initialValues={{
                    fullName: "",
                    street1:"",
                    street2:"",
                    state: "",
                    city: "",
                    zipCode: ""
                  }}
                  onSubmit={(values) => {
                    onSubmitSaveAndContinue(values);
                  }}
                  validationSchema={ProfileValidationSchema}
                >
                  {({
                    handleChange,
                    touched,
                    setFieldTouched,
                    handleSubmit,
                    values,
                    errors,
                  }) => (
                    <Block style={{ justifyContent: "flex-end" }}>
                      <Input
                        label={
                          loginData.user.clienttype == 1
                            ? "Full Name"
                            : "Company Name"
                        }
                         placeholder={
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
                      <Block style={{ flex: 0, marginTop: 16 }}>
                        <Text
                          bold
                          style={{ fontSize: 16, marginTop: 5 }}
                          color={
                            street1Focus ||
                            street2Focus ||
                            stateFocus ||
                            cityFocus 
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
                        <ErrorMessage
                          error={errors.state}
                          visible={touched.state}
                        />

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
                        <ErrorMessage
                          error={errors.city}
                          visible={touched.city}
                        />
                      </Block>
                      <Block style={{ flex: 0, marginTop: 16 }}>
                        <Input
                          label="Zip "
                          placeholder="Zip Code"
                          style={{ marginBottom: 5 }}
                          focus={zipCodeFocus}
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
                          }}
                        />
                        <ErrorMessage
                          error={errors.zipCode}
                          visible={touched.zipCode}
                        />
                      </Block>

                      <Block style={{ marginVertical: HEIGHT / 50 }}>
                        {!errors.fullName &&
                        !errors.street1 &&
                        !errors.state &&
                        !errors.city &&
                        !errors.zipCode ? (
                          <Button onPress={handleSubmit}>
                            {data.isLoading ? (
                              <>
                                <CustomActivityIndicator
                                  isLoading={data.isLoading}
                                  label="Requesting..."
                                />
                                <Text button style={{ fontSize: 18 }}>
                                  Update Profile
                                </Text>
                              </>
                            ) : (
                              <Text button style={{ fontSize: 18 }}>
                                Update Profile
                              </Text>
                            )}
                          </Button>
                        ) : (
                          <Button
                            style={{
                              backgroundColor: theme.colors.gray,
                            }}
                          >
                            <Text button style={{ fontSize: 18 }}>
                              Update Profile
                            </Text>
                          </Button>
                        )}
                      </Block>
                    </Block>
                  )}
                </Formik>
              </Block>
            </Block>
          </ImageBackground>

          <TouchableOpacity
            onPress={pickImage}
            style={{ zIndex: 1, position: "absolute", marginTop: HEIGHT / 26 }}
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
                <ProfileIconComponent/>
            )}

            <Block
              style={{
                padding: 2,
                borderRadius: 10,
                position: "absolute",
                marginLeft: WIDTH * 0.17,
                marginTop: HEIGHT * 0.074,
              }}
            >
                <CameraIconComponent/>
            </Block>
          </TouchableOpacity>
        </Block>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default ReceiverEditProfile;
