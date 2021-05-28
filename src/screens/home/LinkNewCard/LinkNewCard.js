import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  SafeAreaView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Modal,
  View
} from "react-native";
import { MaterialCommunityIcons,AntDesign } from "@expo/vector-icons";
import { Formik } from "formik";
import { LinkNewCardValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  FormInput,
  // Dimensions,
  ErrorMessage,
} from "./../../../components/Index.js";
import MonthPicker from './MonthPicker';

// const HEIGHT = Dimensions.get("window").height;
// const WIDTH = Dimensions.get("window").width;

const LinkNewCard = ({ navigation, data, login }) => {
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
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
    console.log("month", month);
    setMonthModalVisible(false);
  };

    const onPressYearItem = (option) => {
    setYear(option);
    console.log("Year", year);
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
      <Block>
        <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
          {month}
        </Text>
      </Block>
      <Block style={{ alignItems: "flex-end" }}>
        <AntDesign name="caretdown" size={16} color={theme.colors.solidGray} />
      </Block>
      
    </TouchableOpacity>
    <Modal
        visible={monthModalVisible}
        transparent={true}
        nRequestClose={() => setMonthModalVisible(!monthModalVisible)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, {width:150 }]}>
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
        <AntDesign name="caretdown" size={16} color={theme.colors.solidGray} />
      </Block>
      
    </TouchableOpacity>
    <Modal
        visible={yearModalVisible}
        transparent={true}
        nRequestClose={() => setYearModalVisible(!yearModalVisible)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, {width:150 }]}>
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
              <FormInput
                label="Cardholder Name"
                placeholder="Cardholder Name"
                onChangeText={handleChange("cardholderName")}
                onBlur={() => {
                  setFieldTouched("cardholderName");
                }}
                value={values.cardholderName}
              />
              <ErrorMessage
                error={errors.cardholderName}
                visible={touched.cardholderName}
              />
              <FormInput
                label="Card Number"
                placeholder="Card Name"
                onChangeText={handleChange("cardNumber")}
                onBlur={() => {
                  setFieldTouched("cardNumber");
                }}
                value={values.cardNumber}
              />
              <ErrorMessage
                error={errors.cardNumber}
                visible={touched.cardNumber}
              />

              <Block row>
                <Block style={{ flex: 4 }}>
                <Text
          bold
          style={{ fontSize: 18,fontWeight:"500"}}
        >
        Expiry Date
        </Text>
                </Block>
                <Block style={{ flex: 2 }}>
                   <Text
          bold
          style={{ fontSize: 18,fontWeight:"500"}}
        >
       CVV
        </Text>
                </Block>
              </Block>

              <Block row>
                <Block style={{ flex: 1.5,marginTop:10 }}>
                  <MonthPicker />
                  {/*{selectMonth()}*/}

                </Block>

                <Block style={{ flex: 1.5,marginTop:10 }}>
                  {selectYear()}
                </Block>

                <Block style={{ flex: 2 }}>
                  <FormInput
                    placeholder="CVV"
                    onChangeText={handleChange("cvv")}
                    onBlur={() => {
                      setFieldTouched("cvv");
                    }}
                    value={values.cvv}
                  />
                </Block>
              </Block>

              <ErrorMessage error={errors.month} visible={touched.month} />
              <ErrorMessage error={errors.year} visible={touched.year} />
              <ErrorMessage error={errors.cvv} visible={touched.cvv} />

              <FormInput
                label="Street Address"
                placeholder="Street Address"
                onChangeText={handleChange("streetAddress")}
                onBlur={() => {
                  setFieldTouched("streetAddress");
                }}
                value={values.streetAddress}
              />
              <ErrorMessage
                error={errors.streetAddress}
                visible={touched.streetAddress}
              />

              <FormInput
                label="City"
                placeholder="City"
                onChangeText={handleChange("city")}
                onBlur={() => {
                  setFieldTouched("city");
                }}
                value={values.city}
              />
              <ErrorMessage error={errors.city} visible={touched.city} />

              <FormInput
                label="State"
                placeholder="State"
                onChangeText={handleChange("state")}
                onBlur={() => {
                  setFieldTouched("state");
                }}
                value={values.state}
              />
              <ErrorMessage error={errors.state} visible={touched.state} />

              {!errors.cardholderName &&
              !errors.cardNumber &&
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
                    <ActivityIndicator
                      size="small"
                      color={theme.colors.white}
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
    width:"90%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: theme.colors.solidGray,
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal:5

  },
});


    
