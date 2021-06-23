import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
  SectionList,
} from "react-native";
import * as theme from "../../constants/theme.js";
import { Block, Empty, TransactionDetailCard,Text } from "../../components/Index.js";
import API from "./../../api/API";
import moment from "moment";


const Transactions = ({ navigation, data, transactions }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    transactions(API.user().account.accountid);
    setRefreshing(false);
  });


const DATA = Object.values(data.transactions.reduce((acc, item) => {
  if (!acc[moment(item.createdat).format("Do MMMM YYYY")]) acc[moment(item.createdat).format("Do MMMM YYYY")] = {
    title: moment(item.createdat).format("Do MMMM YYYY"),
    data: []
  };
  acc[moment(item.createdat).format("Do MMMM YYYY")].data.push(item);
  return acc;

}, {}))
const  renderItems = ({ item }) => {
    return (
       <Block style={{ paddingHorizontal: 18 }}>
     <TransactionDetailCard
                  profilePic={require("../../assets/icons/user.png")}
                  data={item}
                  amount={item.amount}
                  date={item.createdat}
                  textColor={theme.colors.black}
                  transactionType={item.transactiontype}
                  transactionMedium={item.transactionmedium}
                />
                </Block>
    )
  }

const  renderHeader = ({ section }) => {
    return (
      <Block style={{backgroundcolor:theme.colors.gray2,paddingHorizontal:8,paddingVertical:6}}>
        <Text center style={{fontSize:16,fontWeight:"700"}}>{section.title}</Text>
      </Block>
    )
  }


  useEffect(() => {
    if (data.transactions == null) {
      transactions(API.user().account.accountid);
    }
  }, [data.transactions]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.primary2} />
        </Block>
      ) : (
        <Block style={{ flex: 0, marginTop: 6 }}>
          <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItems}
          renderSectionHeader={renderHeader}
      />
        </Block>
      )}
    </SafeAreaView>
  );
};

export default Transactions;
