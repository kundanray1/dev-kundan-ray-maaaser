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
  FloatingButton,
} from "../../../components/Index.js";
import AddIconComponent from "./../../../assets/icons/addIconComponent";
import { Bottom } from "./Bottom.js";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
const SubCampaigns = ({
  navigation,
  data,
  loginData,
  subCampaigns,
  subCampaignId,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [campaignData, setCampaignData] = useState();
  let bs = React.createRef();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    subCampaigns(loginData.user.account.accountid);
    setRefreshing(false);
  });
  useEffect(() => {
      subCampaigns(loginData.user.account.accountid);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} />
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
            renderItem={(post) =>
              post.item.subcampaignstarter.account.accountid ==
                loginData.user.account.accountid && (
                <Pressable
                  onLongPress={() => {
                    bs.current.snapTo(0);
                    setCampaignData(post.item);
                  }}
                  delayLongPress={500}
                >
                  <CampaignCard
                    image={post.item.campaign.thumbnailurl}
                    label={post.item.campaign.title}
                    campaignstatus={post.item.subcampaignstatus}
                    campaignDetailData={post.item}
                    navigation={navigation}
                    mycampaign={"subcampaign"}
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
      )}
      <FloatingButton
        iconComponent={<AddIconComponent />}
        onPress={() => navigation.navigate("Start a campaign")}
      />
      <Bottom bs={bs} campaignData={campaignData} navigation={navigation} />
    </SafeAreaView>
  );
};

export default SubCampaigns;
