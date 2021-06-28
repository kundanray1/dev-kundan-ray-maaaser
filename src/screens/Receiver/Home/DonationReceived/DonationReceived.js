import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, RefreshControl } from "react-native";
import * as theme from "../../../../constants/theme.js";
import { Block, Empty, DonationsDetail } from "../../../../components/Index.js";
import API from "./../../../../api/API";

const DonationReceived = ({ navigation, data, donationReceived }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    donationReceived(API.user().account.accountid);
    setRefreshing(false);
  });
  useEffect(() => {
    if (data.donationReceived == null) {
      donationReceived(API.user().account.accountid);
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
            data={data.donationReceived}
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
                title="You don't have made any donation received yet."
              />
            )}
            ListFooterComponent={() => (
              <Block style={{ marginVertical: 40, flex: 0 }} />
            )}
            renderItem={(post) =>
              post.item.clientList[1] != undefined ? (
                <Block style={{ paddingHorizontal: 18 }}>
                  <DonationsDetail
                    profilePic={require("../../../../assets/icons/user.png")}
                    name={post.item.clientList[1].account.fullname}
                    amount={post.item.amount}
                    date={post.item.createdat}
                    textColor={theme.colors.green}
                  />
                </Block>
              ) : (
                <Block style={{ paddingHorizontal: 18 }} />
              )
            }
          />
        </Block>
      )}
    </SafeAreaView>
  );
};

export default DonationReceived;
