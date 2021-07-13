import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Empty, CampaignCard } from "../../../components/Index.js";

const AllCampaigns = ({
  navigation,
  data,
  loginData,
  allCampaigns,
  campaignId,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    allCampaigns(loginData.user.account.accountid);
    setRefreshing(false);
  });
  useEffect(() => {
    if (data.allCampaigns == null) {
      allCampaigns(loginData.user.account.accountid);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} />
      ) : (
        <Block style={{ flex: 0, marginTop: 6 }}>
          <FlatList
            data={data.allCampaigns.campaignsList}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item) => {
              return item.campaignid.toString();
            }}
            refreshControl={
              <RefreshControl
                colors={[theme.colors.primary2]}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            ListEmptyComponent={() => (
              <Empty
                iconName="campaigns"
                title="You haven’t stated any campaigns yet."
              />
            )}
            ListFooterComponent={() => (
              <Block style={{ marginVertical: 40, flex: 0 }} />
            )}
            renderItem={(post) => (
              post.item.campaignstarter.account.accountid !==loginData.user.account.accountid &&
              <CampaignCard
                image={post.item.thumbnailurl}
                label={post.item.title}
                targetAmount={post.item.targetamount}
                collectedAmount={post.item.collectedamount}
                onPress={() => {
                 campaignId(post.item.campaignid)
                      navigation.navigate("Campaign Details");
                }}
              />
            )}
          />
        </Block>
      )}
    </SafeAreaView>
  );
};

export default AllCampaigns;
