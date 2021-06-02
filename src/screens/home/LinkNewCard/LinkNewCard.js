import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  SafeAreaView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Modal,
  View,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Formik } from "formik";
import { LinkNewCardValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  Input,
  // Dimensions,
  ErrorMessage,CustomActivityIndicator
} from "./../../../components/Index.js";
import MonthPicker from "./MonthPicker";

// const HEIGHT = Dimensions.get("window").height;
// const WIDTH = Dimensions.get("window").width;

const LinkNewCard = ({ navigation, data, login }) => {
  const [cardholderNameFocus, setCardholderNameFocus] = useState(false);
  const [cardNumberFocus, setCardNumberFocus] = useState(false);
  const [cvvFocus, setCvvFocus] = useState(false);
  const [streetAddressFocus, setStreetAddressFocus] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);
  const [stateFocus, setStateFocus] = useState(false);
  const [month, setMonth] = useState("Month");
  const [year, setYear] = useState("Year");
  const [monthModalVisible, setMonthModalVisible] = useState(false);
  const [yearModalVisible, setYearModalVisible] = useState(false);

  const monthOptions = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const yearOptions = ["2021", "2022", "2023", "2024", "2025", "2026"];

  const onPressMonthItem = (option) => {
    setMonth(option);
    setMonthModalVisible(false);
  };

  const onPressYearItem = (option) => {
    setYear(option);
    setYearModalVisible(false);
  };

  const RenderMonthOptions = monthOptions.map((option, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => onPressMonthItem(option)}
      style={{ marginVertical: 2 }}
    >
      <Text bold style={{ paddingVertical: 4, fontSize: 18 }}>
        {option}
      </Text>
    </TouchableOpacity>
  ));

  const RenderYearOptions = yearOptions.map((option, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => onPressYearItem(option)}
      style={{ marginVertical: 2 }}
    >
      <Text bold style={{ paddingVertical: 4, fontSize: 18 }}>
        {option}
      </Text>
    </TouchableOpacity>
  ));

  const selectMonth = () => (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.customPicker}
        activeOpacity={0.8}
        onPress={() => setMonthModalVisible(!monthModalVisible)}
      >
        <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
          {month}
        </Text>
        <Block style={{ alignItems: "flex-end" }}>
          <AntDesign
            name="caretdown"
            size={16}
            color={theme.colors.solidGray}
          />
        </Block>
      </TouchableOpacity>
      <Modal
        visible={monthModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => setMonthModalVisible(!monthModalVisible)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: 150 }]}>
            {RenderMonthOptions}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );

  const selectYear = () => (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.customPicker}
        activeOpacity={0.8}
        onPress={() => setYearModalVisible(!monthModalVisible)}
      >
        <Block>
          <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
            {year}
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
        visible={yearModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => setYearModalVisible(!yearModalVisible)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: 150 }]}>
            {RenderYearOptions}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );

  //set all the required proto for updating and submitting

  const onSubmitLogin = (values) => {
    console.log("Submit Successful");
  };

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Formik
          initialValues={{
            cardholderName: "",
            cardNumber: "",
            cvv: "",
            streetAddress: "",
            city: "",
            state: "",
          }}
          onSubmit={(values) => {
            onSubmitLogin(values);
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
                full
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
                full
                label="Card Number"
                focus={cardNumberFocus}
                onChangeText={handleChange("cardNumber")}
                onBlur={() => {
                  setFieldTouched("cardNumber");
                  setCardNumberFocus(false);
                }}
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

              <Block row style={{marginTop:5}}>
                <Block style={{ flex: 4 }}>
                  <Text bold style={{ fontSize: 16}}>
                    Expiry Date
                  </Text>
                </Block>
                <Block style={{ flex: 2.7 }}>
                  <Text bold style={{ fontSize: 16}}>
                    CVV
                  </Text>
                </Block>
              </Block>

              <Block row>
                <Block style={{ flex: 1.5, marginTop: 10 }}>
                  {selectMonth()}
                </Block>

                <Block style={{ flex: 1.5, marginTop: 10 }}>
                  {selectYear()}
                </Block>

                <Block style={{ flex: 2 }}>
                  <Input
                    full
                    focus={cvvFocus}
                    onChangeText={handleChange("cvv")}
                    onBlur={() => {
                      setFieldTouched("cvv");
                      setCvvFocus(false);
                    }}
                    onFocus={() => setCvvFocus(true)}
                    value={values.cvv}
                    style={{
                      borderBottomColor: cvvFocus
                        ? theme.colors.primary2
                        : touched.cvv && errors.cvv
                        ? theme.colors.red
                        : theme.colors.solidGray,
                    }}
                  />
                </Block>
              </Block>

              <ErrorMessage error={errors.cvv} visible={touched.cvv} />

              <Input
                full
                label="Street Address"
                focus={streetAddressFocus}
                onChangeText={handleChange("streetAddress")}
                onBlur={() => {
                  setFieldTouched("streetAddress");
                  setStreetAddressFocus(false);
                }}
                onFocus={() => setStreetAddressFocus(true)}
                value={values.streetAddress}
                style={{
                  borderBottomColor: streetAddressFocus
                    ? theme.colors.primary2
                    : touched.streetAddress && errors.streetAddress
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage
                error={errors.streetAddress}
                visible={touched.streetAddress}
              />

              <Input
                full
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
                full
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

              {!errors.cardholderName &&
              !errors.cardNumber &&
              !errors.cvv &&
              !errors.streetAddress &&
              !errors.city &&
              !errors.state ? (
                <Button
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                  }}
                  onPress={handleSubmit}
                >
                  {data.isLoading ? (
                   <CustomActivityIndicator
                         isLoading={data.isLoading}
                         label="Requesting..."
                        />
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
                  <Text button style={{ fontSize: 18 }}>
                    Link Card
                  </Text>
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
    width: "90%",
    height: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: theme.colors.solidGray,
    alignItems: "center",
    borderBottomWidth: 1,
  },
});
