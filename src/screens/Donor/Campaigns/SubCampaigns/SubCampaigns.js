import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, RefreshControl } from "react-native";
import * as theme from "../../../../constants/theme.js";
import { Block, Empty, Text,SubCampaignCard,Button } from "../../../../components/Index.js";
import API from "./../../../../api/API";
import MembersIconComponent from "./../../../../assets/icons/membersIconComponent";
import {Dummy} from "./Dummy";

const SubCampaigns = ({ navigation, data, campaignDonors,route }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaignDonors(API.user().account.accountid);
    setRefreshing(false);
  });
  // useEffect(() => {
  //   if (data.campaignDonors == null) {
  //     campaignDonors(API.user().account.accountid);
  //   }
  // }, []);
  // console.log("route",campaignDetailsData.subcampaignsList)
  // console.log("route",route.params)

  return (
   <SafeAreaView style={{ flex: 1 }}>
        <Block style={{ flex: 0, marginTop: 6,paddingBottom:20 }}>
          <FlatList
            data={Dummy}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item) => {
              return item.id.toString();
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
                iconName="donors"
                title="No donors yet."
              />
            )}
            ListFooterComponent={() => (
              <Block style={{ marginVertical: 40, flex: 0 }} />
            )}
            renderItem={(post) =>
                <Block style={{ paddingHorizontal: 18 }}>
                  <SubCampaignCard
                    profilePic={post.item.profilepic}
                    name={post.item.name}
                    amount={post.item.amount}
                    date={post.item.date}
                    textColor={post.item.textColor}
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
    </SafeAreaView>
       );
};

export default SubCampaigns;
