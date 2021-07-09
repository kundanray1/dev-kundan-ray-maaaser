import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Empty,
  CampaignCard,
  FloatingButton,
} from "../../../components/Index.js";
import AddIconComponent from "./../../../assets/icons/addIconComponent";

const Campaigns = ({ navigation, data, loginData, campaigns,campaignId }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaigns(loginData.user.account.accountid);
    setRefreshing(false);
  });
  useEffect(() => {
    if (data.campaigns == null) {
      campaigns(loginData.user.account.accountid);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} />
      ) : (
        <Block style={{ flex: 0, marginTop: 6 }}>
          <FlatList
            data={data.campaigns.campaignsList}
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
            ItemSeparatorComponent={() => <Block style={{ marginTop: 10 }} />}
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
              <CampaignCard
                image={post.item.thumbnailurl}
                label={post.item.title}
                onPress={() =>{
                  campaignId(post.item.campaignid);
                  navigation.navigate("Campaign Details")
                  }
                }
              />
            )}
          />
        </Block>
      )}
      <FloatingButton
        iconComponent={<AddIconComponent />}
        onPress={() => navigation.navigate("Start a campaign")}
      />
    </SafeAreaView>
  );
};

export default Campaigns;