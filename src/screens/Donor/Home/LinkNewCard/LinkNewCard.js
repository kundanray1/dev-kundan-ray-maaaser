import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { LinkNewCardValidationSchema } from "./../../../../utility/ValidationSchema.js";
import * as theme from "./../../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  CustomActivityIndicator,
} from "./../../../../components/Index.js";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import PaymentProto from "./../../../../protos/payment_pb";
import AddressProto from "./../../../../protos/address_pb";
import CountryCode from "./CountryCode";
import styles from "./../../../../utility/globalStyles.js";

const LinkNewCard = ({
  navigation,
  data,
  loginData,
  linkNewCard,
  linkNewCardClear,
  updateLinkNewCard,
  route,
}) => {
  const [cardholderNameFocus, setCardholderNameFocus] = useState(false);
  const [cardNumberFocus, setCardNumberFocus] = useState(false);
  const [cvcFocus, setCvcFocus] = useState(false);

  const [street1Focus, setStreet1Focus] = useState(false);
  const [street2Focus, setStreet2Focus] = useState(false);
  const [stateFocus, setStateFocus] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);
  const [zipCodeFocus, setZipCodeFocus] = useState(false);
  const [date, setDate] = useState( route.params != undefined ? route.params.card.expirydate : "2021-07-03T15:21:15.513Z");
  const [dateError, setDateError] = useState(false);
  const [show, setShow] = useState(false);
  // const [countryCode, setCountryCode] = useState(
  //   route.params != undefined ? route.params.card.countrycode : ""
  // );
  //set all the required proto for updating and submitting
  const onSubmitLinkNewCard = (values) => {
    const linkNewCardData = new PaymentProto.Card();
    const addressData = new AddressProto.Address();

    if (route.params != undefined) {
      linkNewCardData.setCardid(route.params.card.cardid);
      linkNewCardData.setRefid(route.params.card.refid);
      linkNewCardData.setCardstatus(PaymentProto.Card.CardStatus.ACTIVE_CARD);
      linkNewCardData.setAccountid(loginData.user.account.accountid);
    }
    linkNewCardData.setCardnumber(values.cardNumber);
    linkNewCardData.setCardholdername(values.cardholderName);
    linkNewCardData.setCvc(values.cvc);
    linkNewCardData.setExpirydate(new Date(date).getTime());
    if (route.params != undefined) {
      addressData.setAddressid(route.params.card.billingaddress.addressid);
    }
    addressData.setStreet1(values.street1);
    // addressData.setStreet2(values.street2);
    addressData.setState(values.state);
    addressData.setCity(values.city);
    // addressData.setZip(values.zipCode);
    // addressData.setCountrycode(countryCode);
    linkNewCardData.setBillingaddress(addressData);
    if(date=="2021-07-03T15:21:15.513Z"){
      setDateError(true)
    }else if (route.params != undefined) {
      updateLinkNewCard(linkNewCardData);
    } else {
      linkNewCard(linkNewCardData);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setShow(false);
    setDateError(false)
  };

  useEffect(() => {
    if (data.linkNewCard !== null) {
      if (data.linkNewCard.success) {
        linkNewCardClear();
        navigation.navigate("Card");
      }
    }
  }, [data.linkNewCard]);

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Formik
          initialValues={{
            cardholderName:
              route.params != undefined ? route.params.card.cardholdername : "",
            cardNumber:
              route.params != undefined ? route.params.card.cardnumber : "",
            cvc:
              route.params != undefined
                ? route.params.card.cvc.toString()
                : " ",
            street1:
              route.params != undefined
                ? route.params.card.billingaddress.street1
                : "",
            // street2:
            //   route.params != undefined ?  route.params.card.billingaddress.street2 : "",
            city:
              route.params != undefined
                ? route.params.card.billingaddress.city
                : "",
            state:
              route.params != undefined
                ? route.params.card.billingaddress.state
                : "",
            // zipCode:
            //   route.params != undefined
            //     ? route.params.card.billingaddress.zip.toString()
            //     : "",
          }}
          onSubmit={(values) => {
            onSubmitLinkNewCard(values);
          }}
          validationSchema={LinkNewCardValidationSchema}
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
                label="Cardholder Name"
                focus={cardholderNameFocus}
                onChangeText={handleChange("cardholderName")}
                onBlur={() => {
                  setFieldTouched("cardholderName");
                  setCardholderNameFocus(false);
                }}
                onFocus={() => setCardholderNameFocus(true)}
                value={values.cardholderName}
                style={{
                  borderBottomColor: cardholderNameFocus
                    ? theme.colors.primary2
                    : touched.cardholderName && errors.cardholderName
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage
                error={errors.cardholderName}
                visible={touched.cardholderName}
              />
              <Input
                label="Card Number"
                focus={cardNumberFocus}
                onChangeText={handleChange("cardNumber")}
                onBlur={() => {
                  setFieldTouched("cardNumber");
                  setCardNumberFocus(false);
                }}
                number
                onFocus={() => setCardNumberFocus(true)}
                value={values.cardNumber}
                style={{
                  borderBottomColor: cardNumberFocus
                    ? theme.colors.primary2
                    : touched.cardNumber && errors.cardNumber
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage
                error={errors.cardNumber}
                visible={touched.cardNumber}
              />

              <Block row style={{ marginTop: 5 }}>
                <Block style={{ flex: 4 }}>
                  <Text bold style={{ fontSize: 16 }}>
                    Expiry Date
                  </Text>
                </Block>
                <Block style={{ flex: 2.7 }}>
                  <Text bold style={{ fontSize: 16 }}>
                    CVC
                  </Text>
                </Block>
              </Block>

              <Block row>
                <Block style={{ flex: 3, marginTop: 10 }}>
                  <TouchableOpacity
                    style={[styles.customPicker,{width:"92%"}]}
                    activeOpacity={0.8}
                    onPress={() => setShow(true)}
                  >
                    <Block>
                      <Text
                        bold
                        style={{ fontSize: 16, color: theme.colors.solidGray }}
                      >
                        {date == "2021-07-03T15:21:15.513Z"
                          ? ""
                          : moment(date).format("DD/MM/YYYY")}
                      </Text>
                    </Block>
                    <Block style={{ alignItems: "flex-end" }}>
                      <MaterialCommunityIcons
                        name="calendar-month"
                        size={20}
                        color={theme.colors.primary2}
                      />
                    </Block>
                  </TouchableOpacity>

                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={new Date()}
                      mode="date"
                      is24Hour={true}
                      display="default"
                      minimumDate={new Date()}
                      textColor="red"
                      onChange={onChange}
                    />
                  )}
                </Block>
                

                <Block style={{ flex: 2 }}>
                  <Input
                    focus={cvcFocus}
                    onChangeText={handleChange("cvc")}
                    onBlur={() => {
                      setFieldTouched("cvc");
                      setCvcFocus(false);
                    }}
                    number
                    onFocus={() => setCvcFocus(true)}
                    value={values.cvc}
                    style={{
                      borderBottomColor: cvcFocus
                        ? theme.colors.primary2
                        : touched.cvc && errors.cvc
                        ? theme.colors.red
                        : theme.colors.solidGray,
                    }}
                  />
                </Block>
              </Block>
              <ErrorMessage
                error={"Expiry Date is a required field"}
                visible={dateError}
              />
              <ErrorMessage error={errors.cvc} visible={touched.cvc} />
             {/* <CountryCode
                countryCode={countryCode}
                setCountryCode={setCountryCode}
              />*/}
              <Input
                label="Street Address 1"
                focus={street1Focus}
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
                }}
              />
              <ErrorMessage error={errors.street1} visible={touched.street1} />
                {/*<Input
                label="Street Address 2"
                focus={street2Focus}
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
                }}
              />
              <ErrorMessage error={errors.street2} visible={touched.street2} />
*/}
              <Input
                label="City"
                focus={cityFocus}
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
                }}
              />
              <ErrorMessage error={errors.city} visible={touched.city} />

              <Input
                label="State"
                focus={stateFocus}
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
                }}
              />
              <ErrorMessage error={errors.state} visible={touched.state} />
              
              {/*<Input
                label="Zip Code"
                focus={zipCodeFocus}
                onChangeText={handleChange("zipCode")}
                onBlur={() => {
                  setFieldTouched("zipCode");
                  setZipCodeFocus(false);
                }}
                number
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
              <ErrorMessage error={errors.zipCode} visible={touched.zipCode} />*/}
              {
              !errors.cardholderName||
              !errors.cardNumber ||
              !errors.cvc ||
              !errors.street1 || 
              !errors.city ||
              !errors.state 
               ? (
                <Button
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                  }}
                  onPress={handleSubmit}
                >
                  {data.isLoading ? (
                    <CustomActivityIndicator
                      label="Requesting..."
                      isLoading={data.isLoading}
                    />
                  ) : route.params != undefined ? (
                    <Text button style={{ fontSize: 18 }}>
                      Update Card
                    </Text>
                  ) : (
                    <Text button style={{ fontSize: 18 }}>
                      Link Card
                    </Text>
                  )}
                </Button>
              ) : (
                <Button
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                    backgroundColor: theme.colors.gray,
                  }}
                >
                  {route.params != undefined ? (
                    <Text button style={{ fontSize: 18 }}>
                      Update
                    </Text>
                  ) : (
                    <Text button style={{ fontSize: 18 }}>
                      Link Card
                    </Text>
                  )}
                </Button>
              )}
            </Block>
          )}
        </Formik>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default LinkNewCard;
