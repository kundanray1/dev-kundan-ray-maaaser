import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Empty,
  CampaignCard,
  Text,
  FloatingButton,
} from "../../../components/Index.js";
import API from "./../../../api/API";
import AddIconComponent from "./../../../assets/icons/addIconComponent";
import { Dummy } from "./Dummy";

const Campaigns = ({ navigation, data, loginData, campaigns }) => {
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
                onPress={() =>
                  navigation.navigate("Campaign Details", {
                    screen: "Campaign Details",
                    params: { campaignDetailsData: post.item },
                    // screen: "Sub Campaigns",
                    // params: { campaignDetailsData: post.item },
                  })
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

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    backgroundColor: "#F0FBFF",
    color: theme.colors.solidGray,
    paddingHorizontal: 14,
    borderRadius: 40,
  },
  amountSection: {
    flex: 1,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#F0FBFF",
  },
});
