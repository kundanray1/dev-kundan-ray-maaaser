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
  Text,
  CampaignDonorCard,
  Button,
} from "../../../components/Index.js";
import API from "./../../../api/API";
import { Dummy } from "./Dummy";

const SubCampaignDonors = ({
  data,
  loginData,
  subCampaignDonors,
  subCampaignId,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    subCampaignDonors(subCampaignId);
    setRefreshing(false);
  });
  useEffect(() => {
    subCampaignDonors(subCampaignId);
  }, [subCampaignId]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} />
      ) : (
        <Block style={{ flex: 0, marginTop: 6, paddingBottom: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              textTransform: "capitalize",
              marginLeft: 18,
              paddingVertical: 6,
            }}
          >
            Donors({data.subCampaignDonors.donationsList.length})
          </Text>
          <FlatList
            data={data.subCampaignDonors.donationsList}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item) => {
              return item.txnid.toString();
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
              <Empty iconName="donors" title="No donors yet." />
            )}
            ListFooterComponent={() => (
              <Block style={{ marginVertical: 40, flex: 0 }} />
            )}
            renderItem={(post) => (
              <Block style={{ paddingHorizontal: 18 }}>
                <CampaignDonorCard
                  profilePic={post.item.client.profilepic}
                  name={post.item.client.account.fullname}
                  amount={post.item.amount}
                />
              </Block>
            )}
          />
        </Block>
      )}
    </SafeAreaView>
  );
};

export default SubCampaignDonors;
