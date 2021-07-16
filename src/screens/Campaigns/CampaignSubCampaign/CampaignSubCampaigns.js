import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Pressable,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Empty,
  Text,
  SubCampaignCard,
  Button,
} from "../../../components/Index.js";
import { Bottom } from "./Bottom.js";
const CampaignSubCampaigns = ({
  navigation,
  campaignDetails,
  campaignDetailsdata,
  campaignId,
  subCampaignId,
  loginData,
  startASubCampaign
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [subCampaignData, setSubCampaignData] = useState();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaignDetails(campaignId);
    setRefreshing(false);
  });
 useEffect(() => {
    campaignDetails(campaignId);
  }, [startASubCampaign.startASubCampaign]);

  let bs = React.createRef();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {campaignDetailsdata.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} />
      ) : (
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
                  title="No sub campaign created yet."
                />
              )}
              ListFooterComponent={() => (
                <Block style={{ marginVertical: 40, flex: 0 }} />
              )}
              renderItem={(post) =>
                post.item.subcampaignstatus !== 3 && (
                  <Pressable
                    style={{
                      paddingHorizontal: 18,
                      marginVertical: 4,
                    }}
                    onLongPress={() => {
                      bs.current.snapTo(0);
                      setSubCampaignData(post.item);
                    }}
                    delayLongPress={500}
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
                  </Pressable>
                )
              }
            />
          </Block>
          {campaignDetailsdata.campaignDetails.campaign.campaignstarter.account
            .accountid !== loginData.user.account.accountid && (
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
          )}
        </>
      )}
      <Bottom
        bs={bs}
        subCampaignData={subCampaignData}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default CampaignSubCampaigns;
