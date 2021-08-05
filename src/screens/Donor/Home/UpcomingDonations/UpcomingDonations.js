import React, { useState, useEffect, useRef } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
  SectionList,
  View,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Empty,
  DateWiseDonationDetailCard,
  Text,
  Button,
  ErrorMessage,
  FloatingButton,
} from "../../../../components/Index.js";
import moment from "moment";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import TransactionsMedium from "./../../Transactions/TransactionsMedium";
import TransactionsType from "./../../Transactions/TransactionsType";
import API from "../../../../api/API.js";
import TransactionsSearchIconComponent from "../../../../assets/icons/transactionsSearchIconComponent.js";
import searchStyles from "../../../../utility/globalStyles.js";
import DonateIconComponent from "./../../../../assets/icons/DonateIconComponent";
import { Modalize } from "react-native-modalize";
const WIDTH = Dimensions.get("window").width;

const UpcomingDonations = ({
  navigation,
  data,
  loginData,
  upcomingDonations,
  upcomingDonationsSearch,
}) => {
  const [search, setSearch] = useState();
  const [upcomingDonationsData, setUpcomingDonationsData] = useState();
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const [fromDate, setFromDate] = useState("2021-05-03T15:21:15.513Z");
  const [showFromDate, setShowFromDate] = useState(false);
  const [toDate, setToDate] = useState("2021-09-03T15:21:15.513Z");
  const [showToDate, setShowToDate] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
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
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    upcomingDonations();
    setRefreshing(false);
  });

  const onPressReset = () => {
    setFromDate("2021-05-03T15:21:15.513Z");
    setToDate("2021-09-03T15:21:15.513Z");
    setDateError(false);
  };

  const onPressSubmitApply = () => {
    if (new Date(fromDate).getTime() > new Date(toDate).getTime()) {
      setDateError(true);
    } else {
      setConfirmationSuccessfulVisible(false);
      setDateError(false);
      upcomingDonationsSearch({
        search: "",
        fromDate: new Date(fromDate).getTime(),
        toDate: new Date(toDate).getTime(),
        search: search == undefined ? "" : "",
      });
      onPressReset();
      modalizeRef.current?.close();
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onOpen}
          style={{
            alignItems: "flex-end",
            marginRight: 16,
            justifyContent: "center",
          }}
        >
          <TransactionsSearchIconComponent height={25} width={20} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const renderItems = ({ item }) => {
    return item.clientList[1] != undefined ? (
      <Block style={{ paddingHorizontal: 18 }}>
        <DateWiseDonationDetailCard
          profilePic={item.clientList[1].profilepic}
          name={item.clientList[1].account.fullname}
          amount={item.amount}
          date={item.upcomingtxndate}
          textColor={theme.colors.black}
        />
      </Block>
    ) : (
      <Block style={{ flex: 0 }} />
    );
  };

  const renderHeader = ({ section }) => {
    return (
      <Block
        style={{
          backgroundcolor: theme.colors.gray2,
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
      >
        <Text
          color={theme.colors.gray}
          style={{ fontSize: 16, fontWeight: "700" }}
        >
          {section.title}
        </Text>
      </Block>
    );
  };

  useEffect(() => {
    if (data.upcomingDonationsSearch == null) {
      upcomingDonations();
    } else {
      const sortedData = Object.values(
        data.upcomingDonationsSearch.reduce((acc, item) => {
          if (!acc[moment(item.upcomingtxndate).format("DD MMM ,YYYY")])
            acc[moment(item.upcomingtxndate).format("DD MMM, YYYY")] = {
              title: moment(item.upcomingtxndate).format("DD MMM, YYYY"),
              data: [],
            };
          acc[moment(item.upcomingtxndate).format("DD MMM, YYYY")].data.push(
            item
          );
          return acc;
        }, {})
      );
      setUpcomingDonationsData(sortedData);
    }
  }, [data.upcomingDonationsSearch]);

  useEffect(() => {
    upcomingDonations();
  }, []);
  const modalizeRef = useRef();

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  
  function searchFilterFunction(text) {
    if (text) {
      upcomingDonationsSearch({
        fromDate: new Date(fromDate).getTime(),
        toDate: new Date(toDate).getTime(),
        search: text,
      });
    } else {
      upcomingDonationsSearch({
        fromDate: new Date(fromDate).getTime(),
        toDate: new Date(toDate).getTime(),
        search: "",
      });
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Block style={{ flex: 0, paddingHorizontal: 16 }}>
        <Block style={searchStyles.boxSearchContainer}>
          <Block style={searchStyles.boxVwSearch}>
            <Ionicons name="search" color={theme.colors.solidGray} size={18} />
          </Block>

          <TextInput
            placeholder="Search"
            placeholderTextColor={theme.colors.solidGray}
            style={searchStyles.boxTextInput}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
          />

          {search ? (
            <TouchableOpacity
              onPress={() => searchFilterFunction()}
              style={searchStyles.vwClear}
            >
              <Ionicons name="close-circle-sharp" color="black" size={18} />
            </TouchableOpacity>
          ) : (
            <Block style={searchStyles.vwClear} />
          )}
        </Block>
      </Block>
      {data.isLoading ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.primary2} />
        </Block>
      ) : (
        <Block style={{ flex: 0, marginTop: 6 }}>
          <SectionList
            sections={upcomingDonationsData}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItems}
            renderSectionHeader={renderHeader}
            ListEmptyComponent={() => (
              <Empty iconName="transactions" title="No donations data." />
            )}
            refreshControl={
              <RefreshControl
                colors={[theme.colors.primary2]}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            ListFooterComponent={() => (
              <Block middle center style={{ marginBottom: 120, flex: 0 }} />
            )}
            ListFooterComponentStyle={{
              paddingVertical: 20,
            }}
          />
        </Block>
      )}
      <Modalize
        ref={modalizeRef}
        snapPoint={200}
        modalHeight={200}
        withHandle={false}
      >
        <View style={{ width: "100%", paddingHorizontal: 18 }}>
          <Block style={{ flex: 0, alignItems: "center", paddingVertical: 10 }}>
            <Block
              style={{
                flex: 0,
                backgroundColor: "#E2E2E2",
                width: WIDTH - 280,
                borderRadius: 10,
                paddingVertical: 2,
              }}
            />
          </Block>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingBottom: 8,
            }}
            onPress={onPressReset}
          >
            <Text
              bold
              style={{ fontSize: 14, fontWeight: "700" }}
              color={theme.colors.red}
            >
              Reset
            </Text>
          </TouchableOpacity>

          <Block row style={{ flex: 0 }}>
            <Block style={{ paddingVertical: 8 }}>
              <Text bold style={{ fontSize: 14, fontWeight: "700" }}>
                From
              </Text>
              <TouchableOpacity
                style={[styles.customPicker, { width: "95%" }]}
                activeOpacity={0.8}
                onPress={() => setShowFromDate(true)}
              >
                <Text
                  bold
                  style={{
                    fontSize: 16,
                    color: "#999999",
                  }}
                >
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

            <Block style={{ paddingVertical: 8 }}>
              <Text bold style={{ fontSize: 14, fontWeight: "700" }}>
                To
              </Text>
              <TouchableOpacity
                style={[styles.customPicker, { left: "10%" }]}
                activeOpacity={0.8}
                onPress={() => setShowToDate(true)}
              >
                <Text
                  bold
                  style={{
                    fontSize: 16,
                    color: "#999999",
                  }}
                >
                  {toDate == "2021-09-03T15:21:15.513Z"
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

      <FloatingButton
        onPress={() => navigation.navigate("Donate")}
        iconComponent={<DonateIconComponent />}
      />
    </SafeAreaView>
  );
};

export default UpcomingDonations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modal: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    paddingVertical: 10,
  },
  customPicker: {
    height: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#E7E7E7",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 6,
  },
});
