import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  SafeAreaView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { LinkScheduleDonationValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
} from "./../../../components/Index.js";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import ReceiversName from "./ReceiversName";
import ScheduleType from "./ScheduleType";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const LinkScheduleDonation = ({ navigation, data, login }) => {
  const [receiversId, setReceiversId] = useState();
  const [amountFocus, setAmountFocus] = useState();
  const [scheduleType, setScheduleType] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [showStartDate, setShowStartDate] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [showEndDate, setShowEndDate] = useState(false);
  const [remarksFocus, setRemarksFocus] = useState();
  //set all the required proto for updating and submitting
  const onSubmitLogin = (values) => {
    console.log(values);
  };

  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDate(Platform.OS === "ios");
    setStartDate(currentDate);
    setShowStartDate(false);
  };
  const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDate(Platform.OS === "ios");
    setEndDate(currentDate);
    setShowEndDate(false);
  };

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Formik
          initialValues={{
            remarks: "",
            amount: "",
          }}
          onSubmit={(values) => {
            onSubmitLogin(values);
          }}
          validationSchema={LinkScheduleDonationValidationSchema}
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
              <ReceiversName
                receiversId={receiversId}
                setReceiversId={setReceiversId}
              />

              <Input
                label="Amount"
                focus={amountFocus}
                onChangeText={handleChange("amount")}
                onBlur={() => {
                  setFieldTouched("amount");
                  setAmountFocus(false);
                }}
                number
                onFocus={() => setAmountFocus(true)}
                value={values.amount}
                style={{
                  borderBottomColor: amountFocus
                    ? theme.colors.primary2
                    : touched.amount && errors.amount
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage error={errors.amount} visible={touched.amount} />
              <ScheduleType
                scheduleType={scheduleType}
                setScheduleType={setScheduleType}
              />

              <Block style={{ paddingVertical: 8 }}>
                  <Text bold style={{ fontSize: 16, fontWeight: "500" }}>
                    Start Date
                  </Text>
                <TouchableOpacity
                  style={styles.customPicker}
                  activeOpacity={0.8}
                  onPress={() => setShowStartDate(true)}
                >
                  <Block>
                    <Text
                      bold
                      style={{ fontSize: 16, color: theme.colors.solidGray }}
                    >
                      {moment(startDate).format("DD/MM/YYYY")}
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
                {showStartDate && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={startDate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    minimumDate={new Date()}
                    textColor="red"
                    onChange={onChangeStartDate}
                  />
                )}
              </Block>

              <Block style={{ paddingVertical: 8 }}>
                  <Text bold style={{ fontSize: 16, fontWeight: "500" }}>
                    End Date
                  </Text>
                <TouchableOpacity
                  style={styles.customPicker}
                  activeOpacity={0.8}
                  onPress={() => setShowEndDate(true)}
                >
                  <Block>
                    <Text
                      bold
                      style={{ fontSize: 16, color: theme.colors.solidGray }}
                    >
                      {moment(endDate).format("DD/MM/YYYY")}
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
                {showEndDate && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={endDate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    minimumDate={new Date()}
                    textColor="red"
                    onChange={onChangeEndDate}
                  />
                )}
              </Block>
              <Input
                label="Remarks"
                focus={remarksFocus}
                onChangeText={handleChange("remarks")}
                onBlur={() => {
                  setFieldTouched("remarks");
                  setRemarksFocus(false);
                }}
                onFocus={() => setRemarksFocus(true)}
                value={values.remarks}
                style={{
                  borderBottomColor: remarksFocus
                    ? theme.colors.primary2
                    : touched.remarks && errors.remarks
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage error={errors.remarks} visible={touched.remarks} />
              <Block style={{ flex: 0, paddingVertical: 20 }}>
                {!errors.remarks && !errors.amount ? (
                  <Button onPress={handleSubmit}>
                    {data.isLoading ? (
                      <ActivityIndicator
                        size="small"
                        color={theme.colors.white}
                      />
                    ) : (
                      <Text button style={{ fontSize: 18 }}>
                        Schedule Donation
                      </Text>
                    )}
                  </Button>
                ) : (
                  <Button>
                    <Text button style={{ fontSize: 18 }}>
                      Schedule Donation
                    </Text>
                  </Button>
                )}
              </Block>
            </Block>
          )}
        </Formik>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default LinkScheduleDonation;

const styles = StyleSheet.create({
  customPicker: {
    height: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: theme.colors.solidGray,
    alignItems: "flex-end",
    borderBottomWidth: 1,
    paddingBottom:2,

  },
});
