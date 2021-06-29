import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import { Block, Empty, DonationsDetail } from "../../../../components/Index.js";

const UpcomingDonations = ({ navigation, data, upcomingDonations }) => {
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    upcomingDonations();
    setRefreshing(false);
  });
  
  useEffect(() => {
    if (data.upcomingDonations == null) {
    upcomingDonations();
      
    }
  }, [data.upcomingDonations]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.primary2} />
        </Block>
      ) : (
        <Block style={{ flex: 0, marginTop: 6 }}>
          <FlatList
            data={data.upcomingDonations}
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
            ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
            ListEmptyComponent={() => (
              <Empty
                iconName="calendar-month"
                title="You don't have any upcoming donations yet."
              />
            )}
            ListFooterComponent={() => (
              <Block style={{ marginVertical: 40, flex: 0 }} />
            )}
            renderItem={(post) => (
              <Block style={{ paddingHorizontal: 18 }}>
                <DonationsDetail
                  profilePic={post.item.clientList[1].profilepic}
                  name={post.item.clientList[1].account.fullname}
                  amount={post.item.amount}
                  date={post.item.scheduledetail.startdate}
                  textColor={theme.colors.black}
                />
              </Block>
            )}
          />
        </Block>
      )}
    </SafeAreaView>
  );
};

export default UpcomingDonations;
