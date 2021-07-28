import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
  SectionList,
  Modal,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Empty,
  TransactionDetailCard,
  Text,
  Button,
  ErrorMessage,
} from "../../../components/Index.js";
import moment from "moment";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import TransactionsMedium from "./TransactionsMedium";
import TransactionsType from "./TransactionsType";
import API from "../../../api/API.js";
import TransactionsSearchIconComponent from "../../../assets/icons/transactionsSearchIconComponent.js";
import ReceiptIconComponent from "../../../assets/icons/ReceiptIconComponent.js";
import PdfIconComponent from "../../../assets/icons/PdfIconComponent.js";
import ExcelIconComponent from "../../../assets/icons/ExcelIconComponent.js";
import * as Linking from "expo-linking";

const WIDTH = Dimensions.get("window").width;
import searchStyles from "../../../utility/globalStyles.js";

const Transactions = ({
  navigation,
  data,
  loginData,
  transactions,
  generateTransactionsPDFReceiptStart,
  generateTransactionsExcelReceiptStart,
  search,
}) => {
  const [transactionssearch, setTransactionssearch] = useState();
  const [transactionsData, setTransactionsData] = useState();
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const [downloadModalVisible, setDownloadModalVisible] = useState(false);
  const [fromDate, setFromDate] = useState("2021-05-03T15:21:15.513Z");
  const [showFromDate, setShowFromDate] = useState(false);
  const [toDate, setToDate] = useState("2021-09-03T15:21:15.513Z");
  const [showToDate, setShowToDate] = useState(false);
  const [transactionsMedium, setTransactionsMedium] = useState();
  const [transactionsMediumId, setTransactionsMediumId] = useState("");
  const [transactionsType, setTransactionsType] = useState();
  const [transactionsTypeId, setTransactionsTypeId] = useState("");
  const [dateError, setDateError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
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
    transactions(loginData.user.account.accountid);
    setRefreshing(false);
  });

  const onPressReset = () => {
    setFromDate("2021-05-03T15:21:15.513Z");
    setToDate("2021-09-03T15:21:15.513Z");
    setTransactionsMedium();
    setTransactionsMediumId("");
    setTransactionsType();
    setTransactionsTypeId("");
    setDateError(false);
  };

  const onPressSubmitApply = () => {
    if (new Date(fromDate).getTime() > new Date(toDate).getTime()) {
      setDateError(true);
    } else {
      setDateError(false);
      setConfirmationSuccessfulVisible(false);
      search({
        accountId: loginData.user.account.accountid,
        fromDate: new Date(fromDate).getTime(),
        toDate: new Date(toDate).getTime(),
        medium: transactionsMediumId,
        type: transactionsTypeId,
        search: transactionssearch == undefined ? "" : "",
      });
      generateTransactionsPDFReceiptStart({
        fromDate: new Date(fromDate).getTime(),
        toDate: new Date(toDate).getTime(),
        medium: transactionsMediumId,
        type: transactionsTypeId,
        search: transactionssearch == undefined ? "" : "",
      });
      generateTransactionsExcelReceiptStart({
        fromDate: new Date(fromDate).getTime(),
        toDate: new Date(toDate).getTime(),
        medium: transactionsMediumId,
        type: transactionsTypeId,
        search: transactionssearch == undefined ? "" : "",
      });
      onPressReset();
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Block row style={{ flex: 0 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setDownloadModalVisible(true);
            }}
            style={{
              alignItems: "flex-end",
              marginRight: 16,
              justifyContent: "center",
            }}
          >
            <ReceiptIconComponent
              style={{ marginRight: 10 }}
              height={15}
              width={15}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setConfirmationSuccessfulVisible(true);
            }}
            style={{
              alignItems: "flex-end",
              marginRight: 16,
              justifyContent: "center",
            }}
          >
            <TransactionsSearchIconComponent height={25} width={20} />
          </TouchableOpacity>
        </Block>
      ),
    });
  }, [navigation]);

  const downloadPDF = () => {
    setDownloadModalVisible(false);
    if (data.generateTransactionsPDFReceipt != null) {
      Linking.openURL(data.generateTransactionsPDFReceipt.msg);
    }
  };

  const downloadEXCEL = () => {
    setDownloadModalVisible(false);
    if (data.generateTransactionsExcelReceipt != null) {
      Linking.openURL(data.generateTransactionsExcelReceipt.msg);
    }
  };

  const DownloadModal = () => (
    <SafeAreaView>
      <Modal
        visible={downloadModalVisible}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}
        onRequestClose={() => setDownloadModalVisible(!downloadModalVisible)}
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() => setDownloadModalVisible(!downloadModalVisible)}
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
                <Text
                  center
                  style={{
                    fontWeight: "700",
                    fontSize: 14,
                    paddingVertical: 4,
                  }}
                >
                  Export to
                </Text>
              </Block>
              <Block
                style={{ flex: 0, flexDirection: "row", paddingBottom: 16 }}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ flexDirection: "column", marginRight: 30 }}
                  onPress={() => downloadPDF()}
                >
                  <PdfIconComponent />
                  <Text center style={{ fontWeight: "400", fontSize: 14 }}>
                    PDF
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ flexDirection: "column" }}
                  onPress={() => downloadEXCEL()}
                >
                  <ExcelIconComponent />
                  <Text center style={{ fontWeight: "400", fontSize: 14 }}>
                    Excel
                  </Text>
                </TouchableOpacity>
              </Block>
              <Block
                center
                style={{ flex: 0, borderTopWidth: 1, borderColor: "#F0EDF1" }}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ paddingVertical: 12 }}
                  onPress={() => setConfirmationSuccessfulVisible(false)}
                >
                  <Text
                    center
                    style={{
                      fontWeight: "700",
                      fontSize: 14,
                      color: theme.colors.primary2,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </Block>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );

  const renderItems = ({ item }) => {
    return (
      <Block style={{ paddingHorizontal: 18 }}>
        <TransactionDetailCard
          data={item}
          amount={item.amount}
          date={item.createdat}
          textColor={theme.colors.black}
          transactionType={item.transactiontype}
          transactionMedium={item.transactionmedium}
          navigation={navigation}
          campaignTitle={
            item.campaign != undefined
              ? item.campaign.title
              : item.subcampaign != undefined
              ? item.subcampaign.campaign.title
              : undefined
          }
        />
      </Block>
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
    if (data.transactions == null) {
      transactions(loginData.user.account.accountid);
    } else {
      const sortedData = Object.values(
        data.transactions.reduce((acc, item) => {
          if (!acc[moment(item.createdat).format("Do MMM YYYY")])
            acc[moment(item.createdat).format("Do MMM YYYY")] = {
              title: moment(item.createdat).format("Do MMM YYYY"),
              data: [],
            };
          acc[moment(item.createdat).format("Do MMM YYYY")].data.push(item);
          return acc;
        }, {})
      );
      setTransactionsData(sortedData);
    }
  }, [data.transactions]);
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
              <TransactionsMedium
                transactionsMedium={transactionsMedium}
                setTransactionsMedium={setTransactionsMedium}
                setTransactionsMediumId={setTransactionsMediumId}
              />
              <TransactionsType
                transactionsType={transactionsType}
                setTransactionsType={setTransactionsType}
                setTransactionsTypeId={setTransactionsTypeId}
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
      search({
        accountId: loginData.user.account.accountid,
        fromDate: new Date(fromDate).getTime(),
        toDate: new Date(toDate).getTime(),
        medium: transactionsMediumId,
        type: transactionsTypeId,
        search: text,
      });
      generateTransactionsPDFReceiptStart({
        fromDate: new Date(fromDate).getTime(),
        toDate: new Date(toDate).getTime(),
        medium: transactionsMediumId,
        type: transactionsTypeId,
        search: text,
      });
      generateTransactionsExcelReceiptStart({
        fromDate: new Date(fromDate).getTime(),
        toDate: new Date(toDate).getTime(),
        medium: transactionsMediumId,
        type: transactionsTypeId,
        search: text,
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
      </Block>
      {data.isLoading ||
      data.generateTransactionsPDFReceiptLoading ||
      data.generateTransactionsExcelReceiptLoading ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.primary2} />
        </Block>
      ) : (
        <Block style={{ flex: 0 }}>
          <SectionList
            sections={transactionsData}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItems}
            renderSectionHeader={renderHeader}
            ListEmptyComponent={() => (
              <Empty iconName="transactions" title="You don't have any data." />
            )}
            refreshControl={
              <RefreshControl
                colors={[theme.colors.primary2]}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
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
          />
        </Block>
      )}
      {ConfirmationMessage()}
      {DownloadModal()}
    </SafeAreaView>
  );
};

export default Transactions;

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
