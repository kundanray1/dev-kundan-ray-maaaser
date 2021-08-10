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
  SubCampaignCard,
  Button,
} from "../../../components/Index.js";
const CampaignSubCampaigns = ({
  navigation,
  campaignDetails,
  campaignDetailsdata,
  campaignId,
  subCampaignId,
  startASubCampaign
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaignDetails(campaignId);
    setRefreshing(false);
  });
 useEffect(() => {
    campaignDetails(campaignId);
  }, [startASubCampaign.startASubCampaign]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {campaignDetailsdata.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} />
      ) : (
        
           campaignDetailsdata.campaignDetails.campaign.allowsubcampaign==true?
        <>
          <Block style={{ flex: 0, marginTop: 6, paddingBottom: 20 }}>
            <FlatList
              data={
                campaignDetailsdata.campaignDetails.campaign.subcampaignsList
              }
              showsVerticalScrollIndicator={true}
              keyExtractor={(item, index) => {
                return index.toString();
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
                  title="No data."
                />
              )}
              ListFooterComponent={() => (
                <Block style={{ marginVertical: 40, flex: 0 }} />
              )}
              renderItem={(post) =>
                post.item.subcampaignstatus !== 3 && (
                  <Block
                    style={{
                      paddingHorizontal: 18,
                      marginVertical: 4,
                    }}
                  >
                    <SubCampaignCard
                      profilePic={post.item.subcampaignstarter.profilepic}
                      name={post.item.subcampaignstarter.account.fullname}
                      collectedAmount={post.item.collectedamount}
                      targetAmount={post.item.targetamount}
                      date={post.item.createdat}
                      onPress={() => {
                        subCampaignId(post.item.subcampaignid)
                        navigation.navigate("Sub Campaign Details");
                      }}
                    />
                  </Block>
                )
              }
            />
          </Block>
          {((campaignDetailsdata.campaignDetails.campaign.campaignstatus==1) && (campaignDetailsdata.campaignDetails.campaign.targetamount > campaignDetailsdata.campaignDetails.campaign.collectedamount))
           &&
            <Block
              style={{
                paddingHorizontal: 18,
                backgroundColor: "white",
                justifyContent: "flex-end",
                bottom: 0,
                paddingVertical: 10,
                position: "absolute",
                width: "100%",
              }}
            >
              <Button
                onPress={() => navigation.navigate("Start a sub campaign")}
              >
                <Text button style={{ fontSize: 18 }}>
                  Start a Sub Campaign
                </Text>
              </Button>
            </Block>
          }
        </>
        :
                <Empty
                  iconName="campaigns"
                  title="Not allowed to create sub campaigns."
                />
         
      )}
    </SafeAreaView>
  );
};

export default CampaignSubCampaigns;
