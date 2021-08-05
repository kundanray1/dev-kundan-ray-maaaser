import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
  FlatList,
  Pressable,
  Modal,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  FloatingButton,
  ScheduleDonationCard,
} from "../../../../components/Index.js";
import API from "./../../../../api/API";
import AddIconComponent from "./../../../../assets/icons/addIconComponent";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import searchStyles from "../../../../utility/globalStyles.js";
import TransactionsSearchIconComponent from "../../../../assets/icons/transactionsSearchIconComponent.js";
import moment from "moment";
const WIDTH = Dimensions.get("window").width;
const ScheduleDonation = ({
  navigation,
  data,
  loginData,
  scheduleDonation,
  linkScheduleDonationData,
  scheduleDonationReceiverDetailData,
  scheduleDonationSearch,
}) => {
  const [transactionssearch, setTransactionssearch] = useState();
  const [scheduleDonationData, setScheduleDonationData] = useState();
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const [fromDate, setFromDate] = useState("2021-05-03T15:21:15.513Z");
  const [showFromDate, setShowFromDate] = useState(false);
  const [toDate, setToDate] = useState("2021-09-03T15:21:15.513Z");
  const [showToDate, setShowToDate] = useState(false);
  const [dateError, setDateError] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  let bs = React.createRef();

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
    scheduleDonation(loginData.user.account.accountid);
    setRefreshing(false);
  });
  useEffect(() => {
    scheduleDonation(loginData.user.account.accountid);
  }, [
    linkScheduleDonationData.linkScheduleDonation,
    scheduleDonationReceiverDetailData.scheduleDonationReceiverDetail,
  ]);

  const onPressReset = () => {
    setFromDate("2021-05-03T15:21:15.513Z");
    setToDate("2021-09-03T15:21:15.513Z");
    setDateError(false)
  };

  const onPressSubmitApply = () => {
    if (new Date(fromDate).getTime() > new Date(toDate).getTime()) {
      setDateError(true);
    } else {
      setConfirmationSuccessfulVisible(false);
      setDateError(false);
      scheduleDonationSearch({
        accountId: loginData.user.account.accountid,
        fromDate: new Date(fromDate).getTime(),
        toDate: new Date(toDate).getTime(),
        search: transactionssearch == undefined ? "" : "",
      });
      onPressReset();
    }
  };

  const ConfirmationMessage = () => (
    <SafeAreaView>
      <Modal
        visible={confirmationMessageVisible}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setConfirmationSuccessfulVisible(!confirmationMessageVisible)
        }
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() =>
            setConfirmationSuccessfulVisible(!confirmationMessageVisible)
          }
        >
          <TouchableWithoutFeedback>
            <View
              style={[styles.modal, { width: "100%", paddingHorizontal: 18 }]}
            >
              <Block
                style={{ flex: 0, alignItems: "center", paddingVertical: 10 }}
              >
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
                      maximumDate={new Date()}
                      value={new Date()}
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
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
  function searchFilterFunction(text) {
    if (text) {
      scheduleDonationSearch({
        accountId: loginData.user.account.accountid,
        fromDate: new Date(fromDate).getTime(),
        toDate: new Date(toDate).getTime(),
        search: text,
      });
    }else{
      scheduleDonationSearch({
        accountId: loginData.user.account.accountid,
        fromDate: new Date(fromDate).getTime(),
        toDate: new Date(toDate).getTime(),
        search: "",
      });
    }
  }
  return (
    <>
      <SafeAreaView>
        <Block
          row
          style={{
            flex: 0,
            paddingHorizontal: 16,
            marginTop: 6,
            marginBottom: 20,
          }}
        >
          <Block style={[searchStyles.boxSearchContainer, { width: "90%" }]}>
            <Block style={searchStyles.boxVwSearch}>
              <Ionicons
                name="search"
                color={theme.colors.solidGray}
                size={18}
              />
            </Block>

            <TextInput
              placeholder="Search"
              placeholderTextColor={theme.colors.solidGray}
              style={searchStyles.boxTextInput}
              onChangeText={(text) => searchFilterFunction(text)}
              value={transactionssearch}
            />

            {transactionssearch ? (
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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setConfirmationSuccessfulVisible(true);
            }}
            style={{
              alignItems: "center",
              marginTop: 8,
              marginLeft: 16,
              justifyContent: "center",
            }}
          >
            <TransactionsSearchIconComponent height={25} width={20} />
          </TouchableOpacity>
        </Block>
        <Block style={{ flex: 0 }}>
          {data.isLoading ? (
            <ActivityIndicator size="large" color={theme.colors.primary2} />
          ) : (
            <>
              <FlatList
                data={data.scheduleDonation}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => {
                  return item.scheduletransactionid.toString();
                }}
                refreshControl={
                  <RefreshControl
                    colors={[theme.colors.primary2]}
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                ItemSeparatorComponent={() => (
                  <Block style={{ marginTop: 2 }} />
                )}
                ListEmptyComponent={() => (
                  <Empty
                    iconName="transactions"
                    title="You don't have any data."
                  />
                )}
                ListFooterComponent={() => (
                  <Block
                    middle
                    center
                    style={{ marginBottom: 120, flex: 0 }}
                  ></Block>
                )}
                ListFooterComponentStyle={{
                  paddingVertical: 20,
                }}
                renderItem={(post) =>
                 
                    <Pressable
                      style={{
                        paddingHorizontal: 16,
                        marginVertical: 4,
                      }}
                    >
                      <ScheduleDonationCard
                        receiverName={post.item.clientList[1].account.fullname}
                        profilePic={post.item.clientList[1].profilepic}
                        amount={post.item.amount}
                        startDate={post.item.scheduledetail.startdate}
                        scheduleType={post.item.scheduledetail.scheduletype}
                        scheduleTransactionStatus={
                          post.item.scheduletransactionstatus
                        }
                        onPress={() =>
                          navigation.navigate("Details", {
                            scheduleDonationReceiverDetail: post.item,
                          })
                        }
                      />
                    </Pressable>
                }
              />
            </>
          )}
        </Block>
      </SafeAreaView>
      <FloatingButton
        iconComponent={<AddIconComponent />}
        onPress={() => navigation.navigate("Link Schedule Donation")}
      />
      {ConfirmationMessage()}
    </>
  );
};

export default ScheduleDonation;

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
