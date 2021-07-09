import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, RefreshControl } from "react-native";
import * as theme from "../../../../constants/theme.js";
import { Block, Empty, Text,SubCampaignCard,Button } from "../../../../components/Index.js";

const SubCampaigns = ({ navigation,campaignDetails,campaignDetailsdata,campaignId }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaignDetails(campaignId);
    setRefreshing(false);
  });
  useEffect(() => {
    if (campaignDetailsdata.campaignDetails == null) {
       campaignDetails(campaignId);
    }
  }, [campaignId]);
  return (
   <SafeAreaView style={{ flex: 1 }}>
    {campaignDetailsdata.isLoading ? (
                <ActivityIndicator size="large" color={theme.colors.primary2} />
              ) : (
              <>
        <Block style={{ flex: 0, marginTop: 6,paddingBottom:20 }}>
          <FlatList
            data={campaignDetailsdata.campaignDetails.campaign.subcampaignsList}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item,index) => {
              return index.toString();
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
                iconName="campaigns"
                title="No sub campaign created yet."
              />
            )}
            ListFooterComponent={() => (
              <Block style={{ marginVertical: 40, flex: 0 }} />
            )}
            renderItem={(post) =>
                <Block style={{ paddingHorizontal: 18 }}>
                  <SubCampaignCard
                    profilePic={post.item.subcampaignstarter.profilepic}
                    name={post.item.subcampaignstarter.account.fullname}
                    collectedAmount={post.item.collectedamount}
                    targetAmount={post.item.targetamount}
                    date={post.item.createdat}
                  />
                </Block>
              }
          />
        </Block>
         <Block style={{ paddingHorizontal: 18,backgroundColor:"white",justifyContent:"flex-end",bottom:0,paddingVertical:10,position:"absolute",width:"100%"}}>
            <Button
            onPress={()=>navigation.navigate("Start a sub campaign")}
          >
                <Text button style={{ fontSize: 18 }}>
                 Start a Sub Campaign
                </Text>
          </Button>
        </Block>
        </>
        )}
    </SafeAreaView>
       );
};

export default SubCampaigns;
