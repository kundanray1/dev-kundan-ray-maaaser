import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
  SectionList,
  Modal,
  View,
  Image,
  Dimensions,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Empty,
  TransactionDetailCard,
  Text,
  Button,
} from "../../../components/Index.js";
import moment from "moment";
import { Bottom } from "./Bottom.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import TransactionsMedium from "./TransactionsMedium";
import TransactionsType from "./TransactionsType";
import API from "../../../api/API.js";
import TransactionsSearchIconComponent from "../../../assets/icons/transactionsSearchIconComponent.js";
const WIDTH = Dimensions.get("window").width;
const Transactions = ({ navigation, data,loginData, transactions,search }) => {
  const [transactionsData, setTransactionsData] = useState();
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [showFromDate, setShowFromDate] = useState(false);
  const [toDate, setToDate] = useState(new Date());
  const [showToDate, setShowToDate] = useState(false);
  const [transactionsMedium, setTransactionsMedium] = useState();
  const [transactionsMediumId, setTransactionsMediumId] = useState("");
  const [transactionsType, setTransactionsType] = useState();
  const [transactionsTypeId, setTransactionsTypeId] = useState("");
  console.log("fromDate",new Date(fromDate).getTime())
  console.log("ToDate",new Date(toDate).getTime())
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
  setFromDate(new Date());
  setToDate(new Date());
  setTransactionsMedium();
  setTransactionsMediumId("");
  setTransactionsType();
  setTransactionsTypeId("");
  };

  const onPressSubmitApply = () => {
    setConfirmationSuccessfulVisible(false)
    search({
      accountId:loginData.user.account.accountid,
      fromDate:new Date(fromDate).getTime(),
      toDate:new Date(toDate).getTime(),
      medium:transactionsMediumId,
      type:transactionsTypeId
    })
     onPressReset();
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
       <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setConfirmationSuccessfulVisible(true)}
              style={{ alignItems: "flex-end",marginRight:16,justifyContent:"center" }}
                >
                   <TransactionsSearchIconComponent height={25} width={20}/>
                </TouchableOpacity>
      ),
    });
  }, [navigation]);


  const renderItems = ({ item }) => {
    return (
      <Block style={{ paddingHorizontal: 8 }}>
        <TransactionDetailCard
          data={item}
          amount={item.amount}
          date={item.createdat}
          textColor={theme.colors.black}
          transactionType={item.transactiontype}
          transactionMedium={item.transactionmedium}
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
          paddingVertical: 16,
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
        <View style={styles.container}>
          <View
            style={[styles.modal, { width: "100%", paddingHorizontal: 18 }]}
          >

          <Block style={{flex:0,alignItems:"center",paddingVertical:10}}>
          <Block style={{flex:0,backgroundColor:"#E2E2E2",width:WIDTH-280,borderRadius:10,paddingVertical:2}}/>
            </Block>
              <TouchableOpacity
                  activeOpacity={0.8}
                  style={{flexDirection:"row", justifyContent: "flex-end", paddingBottom: 8 }}
                  onPress={onPressReset}
                >
              <Text bold style={{ fontSize: 14, fontWeight: "700" }} color={theme.colors.red}>
                  Reset
                </Text>
                </TouchableOpacity>

            <Block row style={{ flex: 0 }}>
              <Block style={{ paddingVertical: 8 }}>
                <Text bold style={{ fontSize: 14, fontWeight: "700" }}>
                  From
                </Text>
                <TouchableOpacity
                  style={[styles.customPicker,{width:"90%"}]}
                  activeOpacity={0.8}
                  onPress={() => setShowFromDate(true)}
                >
                  <Text
                    bold
                    style={{
                      fontSize: 16,
                      color:"#999999",
                    }}
                  >
                    {moment(fromDate).format("DD/MM/YYYY")}
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
                    value={fromDate}
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
                  style={[styles.customPicker,{left:"10%"}]}
                  activeOpacity={0.8}
                  onPress={() => setShowToDate(true)}
                >
                  <Text
                    bold
                    style={{
                      fontSize: 16,
                      color:"#999999",

                    }}
                  >
                    {moment(toDate).format("DD/MM/YYYY")}
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
                    value={toDate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    textColor="red"
                    onChange={onChangeToDate}
                  />
                )}
              </Block>
            </Block>

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
        </View>
      </Modal>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.primary2} />
        </Block>
      ) : (
        <Block style={{ flex: 0, marginTop: 6 }}>
           
          {/*<Image source={require("./../../assets/icons/searchTransactions.png")} style={{ height: 36, width: 38 }} />*/}
          <SectionList
            sections={transactionsData}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItems}
            renderSectionHeader={renderHeader}
            ListEmptyComponent={() => (
              <Empty iconName="bank" title="You don't any transactions yet." />
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
    borderColor:"#E7E7E7",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 6,
  },
});
