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
import { LetsGetStartedReceiverValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  CheckBox,
} from "./../../../components/Index.js";
import * as ImagePicker from "expo-image-picker";

const LetsGetStartedReceiver = ({ navigation, data, login,accountType }) => {
  const [fullNameOrCompanyNameFocus, setFullNameOrCompanyNameFocus] = useState(false);
  const [streetFocus, setStreetFocus] = useState(false);
  const [stateFocus, setStateFocus] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);
  const [zipCodeFocus, setZipCodeFocus] = useState(false);
  const [bioFocus, setBioFocus] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  console.log("Joshan");

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block center middle>
        <Block style={{ marginTop: 20 }}>
          <Block center>
            <Text
              bold
              center
              style={{ marginTop: 6, fontSize: 18 }}
              color={theme.colors.black}
            >
              Let’s Get Started.
            </Text>
            <Text
              center
              style={{ marginTop: 2, padding: 5, fontSize: 15 }}
              color={theme.colors.gray}
            >
            {accountType=="Individual"? "Tell us a bit about you.":"Tell us a bit about your company."}
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
                  marginLeft:60,
                  marginTop:55,
                }}
              >
              <Block style={{
                  backgroundColor: theme.colors.primary2,
                   padding: 4,
                  borderRadius: 10,
                }}>
                <MaterialCommunityIcons name="camera" size={10} color="white" />
              </Block>
              </Block>
            </TouchableOpacity>
            
          </Block>
        </Block>
        <Block flex={2.5} center>
          <Block center style={{ marginTop: 20 }}>
            <Formik
              initialValues={{
                name: "",
                street: "",
                state: "",
                city: "",
                zipCode: "",
                bio:""
              }}
              onSubmit={(values) => {
                console.log(values);
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
                    full
                    label={accountType=="Individual"? "Full Name":"Company Name"}
                    focus={fullNameOrCompanyNameFocus}
                    style={{ marginBottom: 5 }}
                    onChangeText={handleChange("name")}
                    onBlur={() => {
                      setFieldTouched("name");
                      setFullNameOrCompanyNameFocus(false);
                    }}
                    onFocus={() => setFullNameOrCompanyNameFocus(true)}
                    value={values.name}
                    style={{
                      borderBottomColor: fullNameOrCompanyNameFocus
                        ? theme.colors.primary2
                        : touched.name && errors.name
                        ? theme.colors.red
                        : theme.colors.solidGray,
                    }}
                  />
                  <ErrorMessage
                    error={errors.name}
                    visible={touched.name}
                  />
                  <Text
                    bold
                    style={{ fontSize: 16, marginTop: 5 }}
                    color={
                      streetFocus || stateFocus || cityFocus || zipCodeFocus
                        ? theme.colors.primary2
                        : theme.colors.black
                    }
                  >
                    Address
                  </Text>

                  <Input
                    full
                    placeholder="Street"
                    onChangeText={handleChange("street")}
                    onBlur={() => {
                      setFieldTouched("street");
                      setStreetFocus(false);
                    }}
                    onFocus={() => setStreetFocus(true)}
                    value={values.street}
                    style={{
                      borderBottomColor: streetFocus
                        ? theme.colors.primary2
                        : touched.street && errors.street
                        ? theme.colors.red
                        : theme.colors.solidGray,
                      marginTop: 0,
                    }}
                  />
                  <ErrorMessage
                    error={errors.street}
                    visible={touched.street}
                  />

                  <Input
                    full
                    placeholder="State"
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
                    full
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
                        height:70,
                        borderRadius:2,
                        borderWidth:1
                    }}
                  />
                  <ErrorMessage
                    error={errors.bio}
                    visible={touched.bio}
                  />

                  {!errors.fullName &&
                  !errors.street &&
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
                        <ActivityIndicator
                          size="small"
                          color={theme.colors.white}
                        />
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
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default LetsGetStartedReceiver;
