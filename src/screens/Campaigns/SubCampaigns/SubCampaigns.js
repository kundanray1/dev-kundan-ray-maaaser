import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Pressable,
  Dimensions,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Empty,
  CampaignCard,
} from "../../../components/Index.js";

const HEIGHT = Dimensions.get("window").height;
const SubCampaigns = ({
  navigation,
  data,
  loginData,
  subCampaigns,
  subCampaignId,
  startASubCampaignData,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [campaignData, setCampaignData] = useState();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    subCampaigns(loginData.user.account.accountid);
    setRefreshing(false);
  });
  useEffect(() => {
      subCampaigns(loginData.user.account.accountid);
  }, [data.subCampaignsEdit,startASubCampaignData.startASubCampaign]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} style={{marginTop:30}} />
      ) : (
        <Block style={{ flex: 0, marginTop: HEIGHT / 20 }}>
          <FlatList
            data={data.subCampaigns.subcampaignsList}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item) => {
              return item.subcampaignid.toString();
            }}
            refreshControl={
              <RefreshControl
                colors={[theme.colors.primary2]}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            ListEmptyComponent={() => (
                  <Empty iconName="campaigns" title="No campaigns data." />
                )}
            ItemSeparatorComponent={() => <Block style={{ marginTop: 10 }} />}
            ListFooterComponent={() => (
              <Block style={{ marginVertical: 40, flex: 0 }} />
            )}
            renderItem={(post) =>
              post.item.subcampaignstarter.account.accountid ==
                loginData.user.account.accountid && (
                  <CampaignCard
                    image={post.item.campaign.thumbnailurl}
                    label={post.item.campaign.title}
                    campaignstatus={post.item.subcampaignstatus}
                    campaignDetailData={post.item}
                    date={post.item.createdat}
                    navigation={navigation}
                    mycampaign={"subcampaign"}
                     countryCode={post.item.campaign.countrycode}
                    onPress={() => {
                      subCampaignId(post.item.subcampaignid)
                      navigation.navigate("Sub Campaign Details");
                    }}
                  />
              )
            }
          />
        </Block>
      )}
    </SafeAreaView>
  );
};

export default SubCampaigns;
