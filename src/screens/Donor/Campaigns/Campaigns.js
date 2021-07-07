import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, RefreshControl,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Empty, CampaignCard,Text,FloatingButton } from "../../../components/Index.js";
import API from "./../../../api/API";
import AddIconComponent from "./../../../assets/icons/addIconComponent";
import {Dummy} from "./Dummy";

const Campaigns = ({ navigation, data, campaignDonors }) => {
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
    
        <Block style={{ flex: 0, marginTop: 6 }}>
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
                  <CampaignCard
                    image={post.item.image}
                    label={post.item.label}
                    onPress={()=>navigation.navigate("Campaign Details")}
                  />
              }
          />
        </Block>
         <FloatingButton
        iconComponent={<AddIconComponent/>}
        onPress={() => navigation.navigate("Start a campaign")}
      />
    </SafeAreaView>
  );
};

export default Campaigns;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    backgroundColor: "#F0FBFF",
    color: theme.colors.solidGray,
    paddingHorizontal: 14,
    borderRadius:40,

  },
  amountSection: {
    flex: 1,
    borderRadius:40,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical:10,
    backgroundColor: "#F0FBFF",
  },
});
