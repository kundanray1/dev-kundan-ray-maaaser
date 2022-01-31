import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
  ScrollView
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Empty,
  Text,
  CampaignDonorCard,
} from "../../../components/Index.js";

const SubCampaignDonors = ({
  data,
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
       <ScrollView nestedScrollEnabled={true}>
        <>
      {data.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} />
      ) : (
       data.subCampaignDonors.donationsList.length>0 ? 
        <Block style={{ flex: 0, marginTop: 6, paddingBottom: 20 }}>
          <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  textTransform: "capitalize",
                  marginLeft: 18,
                  paddingVertical: 6,
                }}
              >
                Top Donors
              </Text>

              <FlatList
                data={data.subCampaignDonors.donationsList
                  .sort((a, b) => b.amount - a.amount)
                  .slice(0, 3)}
                showsVerticalScrollIndicator={true}
                keyExtractor={(item, index) => {
                  return item.txnid.toString();
                }}
                nestedScrollEnabled
                refreshControl={
                  <RefreshControl
                    colors={[theme.colors.primary2]}
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                nestedScrollEnabled
                ItemSeparatorComponent={() => (
                  <Block style={{ marginTop: 2 }} />
                )}
                ListEmptyComponent={() => (
                  <Empty iconName="donors" title="No data."/>
                )}
                // ListFooterComponent={() => (
                //   <Block style={{ marginVertical: 40, flex: 0 }} />
                // )}
                renderItem={(post) => (
                  <Block style={{ flex: 0, paddingHorizontal: 18 }}>
                    <CampaignDonorCard
                      profilePic={post.item.client.profilepic}
                      name={post.item.client.account.fullname}
                      amount={post.item.amount}
                    />
                  </Block>
                )}
              />
            
          <Text
            style={{
              fontSize: 16,
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
            nestedScrollEnabled
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
        :
        <Empty
                iconName="donors"
                title="No data."
              />
      )}
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubCampaignDonors;
