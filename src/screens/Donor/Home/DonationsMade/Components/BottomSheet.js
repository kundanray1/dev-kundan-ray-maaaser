import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import * as theme from "constants/theme.js";
import {WIDTH} from "constants/theme.js";
import { Block, Text, Button, ErrorMessage } from "components/Index.js";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";

const BottomSheet = ({
  modalizeRef,
  donationsMadeSearch,
  loginData,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
}) => {
  const [showFromDate, setShowFromDate] = useState(false);
  const [showToDate, setShowToDate] = useState(false);
  const [dateError, setDateError] = useState(false);

  const onChangeFromDate = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setShowFromDate(Platform.OS === "ios");
    setFromDate(currentDate);
    setShowFromDate(false);
  };
  const onChangeToDate = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setShowToDate(Platform.OS === "ios");
    setToDate(currentDate);
    setShowToDate(false);
  };

  const onPressReset = () => {
    setFromDate("2021-05-03T15:21:15.513Z");
    setToDate("2031-09-03T15:21:15.513Z");
    setDateError(false);
  };

  const onPressSubmitApply = () => {
    if (new Date(fromDate).getTime() > new Date(toDate).getTime()) {
      setDateError(true);
    } else {
      const oneDayTimeStamp=864e5
      const parameter = {
        accountId: loginData.user.account.accountid,
        fromDate: new Date(
          fromDate === "2021-05-03T15:21:15.513Z"
            ? fromDate
            : fromDate
                .toString()
                .substring(0, 15)
                .concat(" 00:00:00 GMT+0545 (+0545)")
        ).getTime(),
        toDate:
          new Date(
            toDate === "2031-09-03T15:21:15.513Z"
              ? toDate
              : toDate
                  .toString()
                  .substring(0, 15)
                  .concat(" 00:00:00 GMT+0545 (+0545)")
          ).getTime() + oneDayTimeStamp,
        search: " ",
      };
      donationsMadeSearch(parameter);
      setDateError(false);
      modalizeRef.current?.close();
    }
  };
  return (
    <Portal>
      <Modalize
        ref={modalizeRef}
        snapPoint={200}
        modalHeight={200}
        withHandle={false}
      >
        <View style={styles.modalOuterContainer}>
          <Block style={styles.horizontalIconContainer}>
            <Block style={styles.horizontalIcon} />
          </Block>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.resetContainer}
            onPress={onPressReset}
          >
            <Text bold style={styles.label} color={theme.colors.red}>
              Reset
            </Text>
          </TouchableOpacity>

          <Block row style={{ flex: 0 }}>
            <Block style={styles.dateContainer}>
              <Text bold style={styles.label}>
                From
              </Text>
              <TouchableOpacity
                style={[styles.customPicker, { width: "95%" }]}
                activeOpacity={0.8}
                onPress={() => setShowFromDate(true)}
              >
                <Text bold style={styles.date}>
                  {fromDate == "2021-05-03T15:21:15.513Z"
                    ? ""
                    : moment(fromDate).format("DD/MM/YYYY")}
                </Text>
                <Block style={{ alignItems: "flex-end" }}>
                  <MaterialCommunityIcons
                    name="calendar-month"
                    size={20}
                    color={theme.colors.primary2}
                  />
                </Block>
              </TouchableOpacity>
              {showFromDate && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date()}
                  maximumDate={new Date()}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  textColor="red"
                  onChange={onChangeFromDate}
                />
              )}
            </Block>

            <Block style={styles.dateContainer}>
              <Text bold style={styles.label}>
                To
              </Text>
              <TouchableOpacity
                style={[styles.customPicker, { left: "10%" }]}
                activeOpacity={0.8}
                onPress={() => setShowToDate(true)}
              >
                <Text bold style={styles.date}>
                  {toDate == "2031-09-03T15:21:15.513Z"
                    ? ""
                    : moment(toDate).format("DD/MM/YYYY")}
                </Text>
                <Block style={{ alignItems: "flex-end" }}>
                  <MaterialCommunityIcons
                    name="calendar-month"
                    size={20}
                    color={theme.colors.primary2}
                  />
                </Block>
              </TouchableOpacity>
              {showToDate && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date()}
                  maximumDate={new Date()}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  textColor="red"
                  onChange={onChangeToDate}
                />
              )}
            </Block>
          </Block>
          <ErrorMessage
            error={"Please enter a valid date"}
            visible={dateError}
          />
          <Button onPress={onPressSubmitApply}>
            <Text button style={{ fontSize: 18 }}>
              Apply
            </Text>
          </Button>
        </View>
      </Modalize>
    </Portal>
  );
};

export default BottomSheet;

export const styles = StyleSheet.create({
  customPicker: {
    height: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#E7E7E7",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 6,
  },
  modalOuterContainer: { width: "100%", paddingHorizontal: 18 },
  horizontalIconContainer: {
    flex: 0,
    alignItems: "center",
    paddingVertical: 10,
  },
  horizontalIcon: {
    flex: 0,
    backgroundColor: "#E2E2E2",
    width: WIDTH - 280,
    borderRadius: 10,
    paddingVertical: 2,
  },
  resetContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 8,
  },
  label: { fontSize: 14, fontWeight: "700" },
  dateContainer: { paddingVertical: 8 },
  date: {
    fontSize: 16,
    color: "#999999",
  },
});