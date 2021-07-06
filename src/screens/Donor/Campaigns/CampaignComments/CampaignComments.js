import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, RefreshControl } from "react-native";
import * as theme from "../../../../constants/theme.js";
import { Block, Empty, CampaignCommentCard } from "../../../../components/Index.js";
import API from "./../../../../api/API";
import {Dummy} from "./Dummy";

const CampaignDonors = ({ navigation, data, campaignDonors }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaignDonors(API.user().account.accountid);
    setRefreshing(false);
  });
  // useEffect(() => {
  //   if (data.campaignDonors == null) {
  //     campaignDonors(API.user().account.accountid);
  //   }
  // }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
    
        <Block style={{ flex: 0, marginTop: 6 }}>
          <FlatList
            data={Dummy}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item) => {
              return item.id.toString();
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
                title="There is no comments yet."
              />
            )}
            ListFooterComponent={() => (
              <Block style={{ marginVertical: 40, flex: 0 }} />
            )}
            renderItem={(post) =>
                <Block style={{ paddingHorizontal: 18 }}>
                  <CampaignCommentCard
                    profilePic={post.item.profilepic}
                    name={post.item.name}
                    comment={post.item.comment}
                  />
                </Block>
              }
          />
        </Block>
    </SafeAreaView>
  );
};

export default CampaignDonors;
