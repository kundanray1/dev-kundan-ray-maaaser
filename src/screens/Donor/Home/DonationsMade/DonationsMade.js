import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, RefreshControl } from "react-native";
import * as theme from "../../../../constants/theme.js";
import { Block, Empty, DonationsDetail } from "../../../../components/Index.js";
import API from "./../../../../api/API";

const DonationsMade = ({ navigation, data, loginData,donationsMade }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    donationsMade(loginData.user.account.accountid);
    setRefreshing(false);
  });
  useEffect(() => {
    if (data.donationsMade == null) {
      donationsMade(loginData.user.account.accountid);
    }
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.primary2} />
        </Block>
      ) : (
        <Block style={{ flex: 0, marginTop: 6 }}>
          <FlatList
            data={data.donationsMade}
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
                title="You don't have made any donations yet."
              />
            )}
            renderItem={(post) =>
              post.item.clientList[1] != undefined ? (
                <Block style={{ paddingHorizontal: 18 }}>
                  <DonationsDetail
                    profilePic={post.item.clientList[1].profilepic}
                    name={post.item.clientList[1].account.fullname}
                    amount={post.item.amount}
                    date={post.item.createdat}
                    textColor={theme.colors.green}
                  />
                </Block>
              ) : (
                <Block style={{flex:0}}/>
              )
            }
          />
        </Block>
      )}
    </SafeAreaView>
  );
};

export default DonationsMade;
