import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  SafeAreaView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
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
  FormInput,
  ErrorMessage,
} from "./../../../components/Index.js";
import MonthPicker from "./MonthPicker";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const ScheduleDonation = ({ navigation, data, login }) => {
  const [month, setMonth] = useState();
  const [monthModalVisible, setMonthModalVisible] = useState(false);

  const monthOptions = ["Weekly", "Monthly", "Yearly"];

  const onPressMonthItem = (option) => {
    setMonth(option);
    console.log("month", month);
    setMonthModalVisible(false);
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

  const selectMonth = () => (
    <SafeAreaView>
    <Block style={{marginTop:10}}>
    <Text
          bold
          style={{ fontSize: 18,fontWeight:"500"}}
        >
          Schedule Donation
        </Text>
    </Block>
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
        nRequestClose={() => setMonthModalVisible(!monthModalVisible)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width:WIDTH-30 }]}>
            {RenderMonthOptions}
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
                label="Receiver’s Name"
                placeholder="Receiver’s Name"
                onChangeText={handleChange("receiverName")}
                onBlur={() => {
                  setFieldTouched("receiverName");
                }}
                value={values.receiverName}
              />
              <ErrorMessage
                error={errors.receiverName}
                visible={touched.receiverName}
              />
              <FormInput
                label="Amount"
                placeholder="Amount"
                onChangeText={handleChange("amount")}
                onBlur={() => {
                  setFieldTouched("amount");
                }}
                value={values.amount}
              />
              <ErrorMessage error={errors.amount} visible={touched.amount} />


              {selectMonth()}
              {!errors.receiverName && !errors.amount ? (
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
                      Proceed
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
                    Proceed
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

export default ScheduleDonation;
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
    borderWidth: 1,
    paddingHorizontal: 5,
  },
});
