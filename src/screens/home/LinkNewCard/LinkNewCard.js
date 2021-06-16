import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
 
  TouchableOpacity,
  StyleSheet,
 
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { LinkNewCardValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  CustomActivityIndicator,
} from "./../../../components/Index.js";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import PaymentProto from "./../../../protos/payment_pb";
import AddressProto from "./../../../protos/address_pb";
import CountryCode from "./CountryCode";

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

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState(
    route.params != undefined ? route.params.card.countrycode : ""
  );
  //set all the required proto for updating and submitting
  const onSubmitLinkNewCard = (values) => {
    const linkNewCardData = new PaymentProto.Card();
    const addressData = new AddressProto.Address();
    linkNewCardData.setCardnumber(values.cardNumber);
    linkNewCardData.setCardholdername(values.cardholderName);
    linkNewCardData.setExpirydate(new Date(date).getTime());
    linkNewCardData.setCvc(values.cvc);
    addressData.setStreet1(values.street1);
    addressData.setStreet2(values.street2);
    addressData.setState(values.state);
    addressData.setCity(values.city);
    addressData.setZip(values.zipCode);
    addressData.setCountrycode(countryCode);
    linkNewCardData.setBillingaddress(addressData);
    console.log(values);
    console.log(countryCode);
    linkNewCard(linkNewCardData);
  };

  const onSubmitUpdateLinkNewCard = (values) => {
    const updateLinkNewCardData = new PaymentProto.Card();
    const updateAddressData = new AddressProto.Address();
    updateLinkNewCardData.setCardid(route.params.card.cardid);
    updateLinkNewCardData.setCardholdername(values.cardholderName);
    updateLinkNewCardData.setRefid(route.params.card.refid);
    updateLinkNewCardData.setAccountid(loginData.user.account.accountid);
    updateLinkNewCardData.setCardnumber(values.cardNumber);
    updateLinkNewCardData.setExpirydate(new Date(date).getTime());
    updateLinkNewCardData.setCvc(values.cvc);
    updateLinkNewCardData.setCardstatus(
      PaymentProto.Card.CardStatus.ACTIVE_CARD
    );
    updateAddressData.setAddressid(route.params.card.billingaddress.addressid);
    updateAddressData.setStreet1(values.street1);
    updateAddressData.setStreet2(values.street2);
    updateAddressData.setState(values.state);
    updateAddressData.setCity(values.city);
    updateAddressData.setZip(values.zipCode);
    updateAddressData.setCountrycode(
      route.params.card.billingaddress.countrycode
    );
    updateLinkNewCardData.setBillingaddress(updateAddressData);
    updateLinkNewCard(updateLinkNewCardData);
  };

  useEffect(() => {
    if (data.linkNewCard.success) {
      linkNewCardClear();
      navigation.navigate("Card");
    }
  }, [data]);

  const onChange = (event, selectedDate) => {
    console.log("selectedDate", selectedDate);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setShow(false);
  };

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Formik
          initialValues={{
            cardholderName:
              route.params != undefined
                ? route.params.card.cardholdername
                : "joshan",
            cardNumber:
              route.params != undefined ? route.params.card.cardnumber : "",
            cvc:
              route.params != undefined
                ? route.params.card.cvc.toString()
                : " ",
            street1:
              route.params != undefined ? route.params.card.street1 : "Phikkal",
            street2:
              route.params != undefined ? route.params.card.street2 : "Fikkal",
            city: route.params != undefined ? route.params.card.city : "ktm",
            state: route.params != undefined ? route.params.card.state : "ktm",
            zipCode:
              route.params != undefined
                ? route.params.card.billingaddress.zip.toString()
                : "44600",
          }}
          onSubmit={(values) => {
            route.params != undefined
              ? onSubmitUpdateLinkNewCard(values)
              : onSubmitLinkNewCard(values);
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
                    style={styles.customPicker}
                    activeOpacity={0.8}
                    onPress={() => setShow(true)}
                  >
                    <Block>
                      <Text
                        bold
                        style={{ fontSize: 16, color: theme.colors.solidGray }}
                      >
                        {moment(date).format("DD/MM/YYYY")}
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
                      value={date}
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
              <ErrorMessage error={errors.cvc} visible={touched.cvc} />
              <CountryCode
                countryCode={countryCode}
                setCountryCode={setCountryCode}
              />
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
              <Input
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

              <Input
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
              <ErrorMessage error={errors.zipCode} visible={touched.zipCode} />

              {!errors.cardholderName &&
              !errors.cardNumber &&
              !errors.cvc &&
              !errors.street1 &&
              !errors.street2 &&
              !errors.city &&
              !errors.state &&
              !errors.zipCode ? (
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
                      Update Card
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

const styles = StyleSheet.create({
  customPicker: {
    width: "93%",
    height: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: theme.colors.solidGray,
    alignItems: "center",
    borderBottomWidth: 1,
  },
});
