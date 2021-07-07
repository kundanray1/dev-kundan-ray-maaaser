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
import { LinkScheduleDonationValidationSchema } from "./../../../../utility/ValidationSchema.js";
import * as theme from "./../../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
  CustomActivityIndicator,
} from "./../../../../components/Index.js";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import ReceiversList from "./ReceiversList";
import ScheduleType from "./ScheduleType";
import PaymentProto from "./../../../../protos/payment_pb";
import API from "./../../../../api/API";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const LinkScheduleDonation = ({
  navigation,
  data,
  linkScheduleDonation,
  linkScheduleDonationClear,
  updateLinkScheduleDonation,
  route,
}) => {
  let scheduleTypeRoute;
  if (route.params != undefined) {
    if (route.params.scheduleDonationData.scheduledetail.scheduletype == 1) {
      scheduleTypeRoute = "One Time";
    } else if (
      route.params.scheduleDonationData.scheduledetail.scheduletype == 2
    ) {
      scheduleTypeRoute = "Daily";
    } else if (
      route.params.scheduleDonationData.scheduledetail.scheduletype == 3
    ) {
      scheduleTypeRoute = "Weekly";
    } else if (
      route.params.scheduleDonationData.scheduledetail.scheduletype == 4
    ) {
      scheduleTypeRoute = "Monthly";
    } else if (
      route.params.scheduleDonationData.scheduledetail.scheduletype == 5
    ) {
      scheduleTypeRoute = "Quaterly";
    } else if (
      route.params.scheduleDonationData.scheduledetail.scheduletype == 7
    ) {
      scheduleTypeRoute = "Yearly";
    } else {
      scheduleTypeRoute = "Nth Day";
    }
  }
  const [receiverId, setReceiverId] = useState(
    route.params != undefined
      ? route.params.scheduleDonationData.clientList[1].account.accountid
      : ""
  );
  const [amountFocus, setAmountFocus] = useState(scheduleTypeRoute);
  const [scheduleType, setScheduleType] = useState(scheduleTypeRoute);
  const [startDate, setStartDate] = useState("2021-07-03T15:21:15.513Z");
  const [showStartDate, setShowStartDate] = useState(false);
  const [startTime, setStartTime] = useState("12:00 AM");
  const [showStartTime, setShowStartTime] = useState(false);
  const [endDate, setEndDate] = useState("2021-07-03T15:21:15.513Z");
  const [showEndDate, setShowEndDate] = useState(false);
  const [remarksFocus, setRemarksFocus] = useState();
  //set all the required proto for updating and submitting

  const onSubmitLinkScheduleDonation = (values) => {
    const scheduleTypeProto =
      scheduleType == "One Time"
        ? PaymentProto.ScheduleType.ONE_TIME
        : scheduleType == "Daily"
        ? PaymentProto.ScheduleType.DAILY
        : scheduleType == "Weekly"
        ? PaymentProto.ScheduleType.WEEKLY
        : scheduleType == "Monthly"
        ? PaymentProto.ScheduleType.MONTHLY
        : scheduleType == "Quaterly"
        ? PaymentProto.ScheduleType.QUARTERLY
        : scheduleType == "YEARLY"
        ? PaymentProto.ScheduleType.YEARLY
        : PaymentProto.ScheduleType.NTH_DAY;
    const scheduleTransactionProto = new PaymentProto.ScheduleTransaction();
    const scheduleDetailProto = new PaymentProto.ScheduleDetail();
    scheduleDetailProto.setStartdate(new Date(startDate).getTime());
    // scheduleDetailProto.setStarttime(new Date(startTime).getTime());
    scheduleDetailProto.setEnddate(new Date(endDate).getTime());
    scheduleDetailProto.setScheduletype(scheduleTypeProto);

    if (route.params != undefined) {
      scheduleTransactionProto.setScheduletransactionid(
        route.params.scheduleDonationData.scheduletransactionid
      );
    }
    scheduleTransactionProto.setScheduledetail(scheduleDetailProto);

    scheduleTransactionProto.setAmount(values.amount*100);
    scheduleTransactionProto.setTransactionstatus(
      PaymentProto.TransactionStatus.TRANSACTION_APPROVED
    );
    scheduleTransactionProto.setScheduletransactionstatus(
      PaymentProto.ScheduleTransactionStatus.SCHEDULING
    );
    scheduleTransactionProto.setTransactiontype(
      PaymentProto.TransactionType.DONATE_FUND
    );
    scheduleTransactionProto.setTransactionmedium(
      PaymentProto.TransactionMedium.INTERNAL_MEDIUM
    );
    scheduleTransactionProto.setDonoraccountid(
      API.user().account.accountid
    );
    scheduleTransactionProto.setReceiveraccountid(receiverId);
    scheduleTransactionProto.setRemark(values.remarks);
    if(route.params !=undefined){
    updateLinkScheduleDonation(scheduleTransactionProto);
  }else{
    linkScheduleDonation(scheduleTransactionProto);
  }

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
  const onChangeStartTime = (event, selectedTime) => {
   const currentTime = selectedTime || startTime;
    setShowStartTime(Platform.OS === "ios");
    setStartTime(currentTime);
    setShowStartTime(false);
  };
 useEffect(() => {
    if(data.linkScheduleDonation!==null){
       if(data.linkScheduleDonation.success){
        linkScheduleDonationClear()
        navigation.navigate("Schedule Donation")
       }
    }
  }, [data.linkScheduleDonation]); 

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Formik
          initialValues={{
            remarks:
              route.params != undefined
                ? route.params.scheduleDonationData.remark
                : "",
            amount:
              route.params != undefined
                ? (route.params.scheduleDonationData.amount/100).toString()
                : "",
          }}
          onSubmit={(values) => {
            onSubmitLinkScheduleDonation(values);
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
              <ReceiversList
                receiverId={receiverId}
                setReceiverId={setReceiverId}
                data={data}
                receiverName={
                  route.params != undefined
                    ? route.params.scheduleDonationData.clientList[1].account
                        .fullname
                    : ""
                }
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
                    {
                      startDate=="2021-07-03T15:21:15.513Z"?"":
                       moment(startDate).format("DD/MM/YYYY")
                    }
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
                    value={new Date()}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    minimumDate={new Date()}
                    onChange={onChangeStartDate}
                  />
                )}
              </Block>
               <Block style={{ paddingVertical: 8 }}>
                <Text bold style={{ fontSize: 16, fontWeight: "500" }}>
                  Start Time
                </Text>
                <TouchableOpacity
                  style={styles.customPicker}
                  activeOpacity={0.8}
                  onPress={() => setShowStartTime(true)}
                >
                  <Block>
                    <Text
                      bold
                      style={{ fontSize: 16, color: theme.colors.solidGray }}
                    >
                    {
                      startTime=="12:00 AM"?"":
                       moment(startTime).format("hh:mm A")
                    }
                    </Text>
                  </Block>
                  <Block style={{ alignItems: "flex-end" }}>
                    <MaterialCommunityIcons
                      name="clock"
                      size={20}
                      color={theme.colors.primary2}
                    />
                  </Block>
                </TouchableOpacity>
                {showStartTime && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode="time"
                    is24Hour={false}
                    display="default"
                    onChange={onChangeStartTime}
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
                     {
                      endDate=="2021-07-03T15:21:15.513Z"?"":
                       moment(endDate).format("DD/MM/YYYY")
                    }
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
                    value={new Date()}
                    mode="date"
                    minimumDate={new Date()}
                    is24Hour={true}
                    display="default"
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
                      <CustomActivityIndicator
                        label="Requesting..."
                        isLoading={data.isLoading}
                      />
                    ) : route.params != undefined ? (
                    <Text button style={{ fontSize: 18 }}>
                      Update 
                    </Text>
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
    paddingBottom: 2,
    paddingVertical: 6,
  },
});
