import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Pressable,
  Dimensions
} from "react-native";
import * as theme from "../../constants/theme.js";
import {
  Block,
  Empty,
  CampaignCard,
  FloatingButton,
} from "../../components/Index.js";
import AddIconComponent from "./../../assets/icons/addIconComponent";

const HEIGHT=Dimensions.get("window").height
const WIDTH=Dimensions.get("window").width
const Campaigns = ({ navigation, data, loginData, campaigns, campaignId,startACampaignThirdUpdateData,startACampaignThirdData }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [campaignData, setCampaignData] = useState();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaigns(loginData.user.account.accountid);
    setRefreshing(false);
  });
  useEffect(() => {
      campaigns(loginData.user.account.accountid);
  }, [data.campaignsEdit,startACampaignThirdUpdateData.startACampaignThirdUpdate,startACampaignThirdData.startACampaignThird]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} style={{marginTop:30}} />
      ) : (
        <Block style={{ flex: 0, marginTop: HEIGHT/20 }}>
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
                title="You haven’t started any campaigns yet."
              />
            )}
            ListFooterComponent={() => (
              <Block style={{ marginVertical: 40, flex: 0 }} />
            )}
            renderItem={(post) =>
             post.item.campaignstarter.account.accountid==loginData.user.account.accountid && (
                <Pressable
                  onLongPress={() => {
                    bs.current.snapTo(0);
                    setCampaignData(post.item);
                  }}
                  delayLongPress={500}
                >
                  <CampaignCard
                    image={post.item.thumbnailurl}
                    label={post.item.title}
                    campaignstatus={post.item.campaignstatus}
                    date={post.item.createdat}
                    campaignDetailData={post.item}
                    navigation={navigation}
                    mycampaign={"mycampaign"}
                    editCampaignId={post.item.campaignid}
                    onPress={() => {
                      campaignId(post.item.campaignid)
                      navigation.navigate("Campaign Details");
                    }}
                  />
                </Pressable>
              )
            }
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
