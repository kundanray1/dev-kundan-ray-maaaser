import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
  ScrollView,
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

const CampaignDonors = ({ data, loginData, campaignDonors, campaignId }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [topDonorsData, setTopDonorsData] = useState();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaignDonors(campaignId);
    setRefreshing(false);
  });
  useEffect(() => {
    campaignDonors(campaignId);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView nestedScrollEnabled={true} style={{flex:1}}>
        <>
          {data.isLoading ? (
            <ActivityIndicator size="large" color={theme.colors.primary2} />
          ) : (
          
           data.campaignDonors.donationsList.length>0 ? 
          
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
                Top Donors
              </Text>

              <FlatList
                data={data.campaignDonors.donationsList
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
                ItemSeparatorComponent={() => (
                  <Block style={{ marginTop: 2 }} />
                )}
                ListEmptyComponent={() => (
                  <Empty iconName="donors" title="No donors yet." />
                )}
                renderItem={(post) => (
                  <Block style={{ flex: 0, paddingHorizontal: 18 }}>
                    <CampaignDonorCard
                      profilePic={post.item.client.profilepic}
                      name={post.item.client.account.fullname}
                      amount={post.item.amount}
                      date={post.item.txndate}
                    />
                  </Block>
                )}
              />
            
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  textTransform: "capitalize",
                  marginLeft: 18,
                  marginTop:20,
                  paddingVertical: 6,
                }}
              >
                Donors({data.campaignDonors.donationsList.length})
              </Text>
              <FlatList
                data={data.campaignDonors.donationsList}
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
                
                ListEmptyComponent={() => (
                  <Empty iconName="donors" title="No donors yet." />
                )}
                ListFooterComponent={() => (
                  <Block style={{ marginVertical: 40, flex: 0 }} />
                )}
                renderItem={(post) => (
                  <Block style={{ flex: 0, paddingHorizontal: 18 }}>
                    <CampaignDonorCard
                      profilePic={post.item.client.profilepic}
                      name={post.item.client.account.fullname}
                      amount={post.item.amount}
                      date={post.item.txndate}
                      
                    />
                  </Block>
                )}
              />
            </Block>
            :
           <Empty
                iconName="donors"
                title="No donors yet."
              />
          
          )}
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CampaignDonors;
