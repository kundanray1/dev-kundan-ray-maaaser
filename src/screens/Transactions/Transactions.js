import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import * as theme from "../../constants/theme.js";
import { Block, Empty, TransactionDetailCard } from "../../components/Index.js";
import Dummy from "./Dummy.js";
import API from "./../../api/API";

const Transactions = ({ navigation, data, transactions }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    transactions(API.user().account.accountid);
    setRefreshing(false);
  });
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
          <FlatList
            data={data.transactions}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item) => {
              return item.transactionid.toString();
            }}
            refreshControl={
              <RefreshControl
                colors={[theme.colors.primary2]}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
            ListEmptyComponent={() => (
              <Empty
                iconName="calendar-month"
                title="You don't have any upcoming donations yet."
              />
            )}
             ListFooterComponent={() => (
                  <Block middle center style={{ marginBottom:100,flex: 0 }}>
                  </Block>
                )}
                ListFooterComponentStyle={{
                  paddingVertical:20,
                }}
            renderItem={(post) => (
              <Block style={{ paddingHorizontal: 18 }}>
                <TransactionDetailCard
                  profilePic={require("../../assets/icons/user.png")}
                  data={post.item}
                  amount={post.item.amount}
                  date={post.item.createdat}
                  textColor={theme.colors.black}
                  transactionType={post.item.transactiontype}
                  transactionMedium={post.item.transactionmedium}
                />
              </Block>
            )}
          />
        </Block>
      )}
    </SafeAreaView>
  );
};

export default Transactions;
