import React, { useState, useEffect } from "react";
import {
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
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
import { Formik } from "formik";
import AccountProto from "./../../../../protos/account_pb";
import MaaserProto from "./../../../../protos/maaser_pb";
import AddressProto from "./../../../../protos/address_pb";
import { ProfileValidationSchema } from "./../../../../utility/ValidationSchema.js";
import ProfileIconComponent from "../../../../assets/icons/profileIconComponent.js";
import CameraIconComponent from "../../../../assets/icons/cameraIconComponent.js";
import { Camera } from "expo-camera";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const CameraModule = (props) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        props.setModalVisible();
      }}
    >
      <Camera
        style={{ flex: 1 }}
        ratio="16:9"
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "black",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              style={{ marginLeft: 12,paddingHorizontal:10 }}
              onPress={() => {
                props.setModalVisible();
              }}
            >
              <Text style={{fontSize:16,fontWeight:"700",color:"white"}}> Close</Text>
            </Button>

            <TouchableOpacity
              onPress={async () => {
                if (cameraRef) {
                  let photo = await cameraRef.takePictureAsync();
                  props.setImage(photo);
                  props.setModalVisible();
                }
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: "white",
                  height: 50,
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 16,
                  marginTop: 16,
                }}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: "white",
                    height: 40,
                    width: 40,
                    backgroundColor: "white",
                  }}
                ></View>
              </View>
            </TouchableOpacity>

            <Button
              style={{ marginRight: 12,paddingHorizontal:10 }}
             
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text  style={{fontSize:16,fontWeight:"700",color:"white"}}>
                {type === Camera.Constants.Type.back ? "Front" : "Back "}
              </Text>
            </Button>
          </View>
        </View>
      </Camera>
    </Modal>
  );
};

const ReceiverProfileData = ({
  navigation,
  loginData,
  letsGetStartedDonorData,
  receiverEditProfile,
  data,
  receiverProfileData,
  receiverEditProfileClear,
  imageUpload,
  imageUploadClear,
  receiverEditEmployeeProfile,
}) => {
  const [fullNameOrCompanyNameFocus, setFullNameOrCompanyNameFocus] = useState(
    false
  );
  const [street1Focus, setStreet1Focus] = useState(false);
  const [street2Focus, setStreet2Focus] = useState(false);
  const [stateFocus, setStateFocus] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);
  const [zipCodeFocus, setZipCodeFocus] = useState(false);
  const [image, setImage] = useState(receiverProfileData.receiverProfile.profilepic);
  const [showPictureOptions, setShowPictureOptions] = useState(false);

  //select image function
  const [camera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  const pickImage = async () => {
    setShowPictureOptions(false);
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

  const selectOptions = () => (
    <Modal
      visible={showPictureOptions}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
      onRequestClose={() => setShowPictureOptions(!showPictureOptions)}
    >
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        onPressOut={() => setShowPictureOptions(!showPictureOptions)}
      >
        <TouchableWithoutFeedback>
          <View style={[styles.modal, { width: WIDTH - 30 }]}>
            <TouchableOpacity
              onPress={() => {
                setShowPictureOptions(false);
                setShowCamera(true);
              }}
            >
              <Text bold style={{ paddingVertical: 6, fontSize: 16 }}>
                Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={pickImage}
            >
              <Text bold style={{ paddingVertical: 6, fontSize: 16 }}>
                Pick from phone
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );

  const onSubmitSaveAndContinue = (values) => {
    if (loginData.employee !== null) {
      const clientData = new AccountProto.Employee();
      const accountData = new AccountProto.Account();
      const addressData = new AddressProto.Address();
      const AddressList = [];

      accountData.setAccountid(loginData.employee.account.accountid);
      accountData.setEmail(loginData.employee.account.email);
      accountData.setFullname(values.fullName);
      accountData.setCountrycode(loginData.employee.account.countrycode);
      accountData.setAccounttype(loginData.employee.account.accounttype);

      addressData.setStreet1(values.street1);
      addressData.setStreet2(values.street2);
      addressData.setState(values.state);
      addressData.setCity(values.city);
      addressData.setZip(values.zipCode);
      addressData.setAddresstype(MaaserProto.AddressType.HOME_ADDRESS);
      AddressList.push(addressData);
      clientData.setEmployeeid(loginData.employee.employeeid);
      clientData.setProfilepic(
        letsGetStartedDonorData.image == null
          ? receiverProfileData.receiverProfile.profilepic
          : letsGetStartedDonorData.image
      );
      clientData.setAccount(accountData);
      clientData.setAddressesList(AddressList);
      receiverEditEmployeeProfile(clientData);
    } else {
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
      clientData.setProfilepic(
        letsGetStartedDonorData.image == null
          ? receiverProfileData.receiverProfile.profilepic
          : letsGetStartedDonorData.image
      );
      clientData.setBio(values.bio);
      clientData.setClienttype(1);
      clientData.setAccount(accountData);
      clientData.setAddressesList(AddressList);
      receiverEditProfile(clientData);
    }
  };

  useEffect(() => {
      receiverEditProfileClear();
      imageUploadClear();
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    if (data.receiverEditProfile !== null) {
      if (data.receiverEditProfile.success) {
        receiverEditProfileClear();
        imageUploadClear();
        navigation.navigate("Receiver View Profile");
      }
    }
  }, [data.receiverEditProfile]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
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
              backgroundColor: "#FBFBFB",
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
                  flex: 0,
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
                    fullName:
                      receiverProfileData.receiverProfile.account.fullname !== undefined
                        ? receiverProfileData.receiverProfile.account.fullname
                        : "",
                    street1:
                      receiverProfileData.receiverProfile.addressesList.length > 0
                        ? receiverProfileData.receiverProfile.addressesList[0].street1
                        : "",
                    street2:
                      receiverProfileData.receiverProfile.addressesList.length > 0
                        ? receiverProfileData.receiverProfile.addressesList[0].street2
                        : "",
                    state:
                      receiverProfileData.receiverProfile.addressesList.length > 0
                        ? receiverProfileData.receiverProfile.addressesList[0].state
                        : "",
                    city:
                      receiverProfileData.receiverProfile.addressesList.length > 0
                        ? receiverProfileData.receiverProfile.addressesList[0].city
                        : "",
                    zipCode:
                      receiverProfileData.receiverProfile.addressesList.length > 0
                        ? receiverProfileData.receiverProfile.addressesList[0].zip.toString()
                        : "",
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
                        {!errors.fullName ||
                        !errors.street1 ||
                        !errors.street2 ||
                        !errors.state ||
                        !errors.city ||
                        !errors.zipCode ? (
                          <Button onPress={handleSubmit}>
                            {data.isLoading ||
                            letsGetStartedDonorData.isLoading ? (
                              <>
                                <CustomActivityIndicator
                                  isLoading={data.isLoading}
                                  label="Requesting..."
                                />
                                <Text button style={{ fontSize: 18 }}>
                                  Update
                                </Text>
                              </>
                            ) : (
                              <Text button style={{ fontSize: 18 }}>
                                Update
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
                              Update
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
            onPress={() => setShowPictureOptions(true)}
            style={{
              flex: 0,
              zIndex: 1,
              position: "absolute",
              marginTop: HEIGHT / 22,
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
        {camera && (
          <CameraModule
            showModal={camera}
            setModalVisible={() => setShowCamera(false)}
            setImage={(result) => {
              setImage(result.uri);
              imageUpload(result.uri);
            }}
          />
        )}
      </SafeAreaView>
      <CustomActivityIndicator
        isLoading={letsGetStartedDonorData.isLoading}
        label="Requesting..."
      />
      {selectOptions()}
    </KeyboardAwareScrollView>
  );
};

export default ReceiverProfileData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modal: {
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    paddingVertical: 10,
    paddingHorizontal:20,
    borderRadius: 4,
  },
});
