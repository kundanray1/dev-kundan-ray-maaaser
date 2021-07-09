import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, RefreshControl,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import * as theme from "../../../../constants/theme.js";
import { Block, Empty, CampaignCommentCard,Text } from "../../../../components/Index.js";
import API from "./../../../../api/API";
import {Dummy} from "./Dummy";

const CampaignDonors = ({ navigation, data, campaignDonors }) => {
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
            ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
            ListEmptyComponent={() => (
              <Empty
                iconName="comments"
                // title="No comments yet."
              />
            )}
            ListFooterComponent={() => (
              <Block style={{ marginVertical: 40, flex: 0 }} />
            )}
            renderItem={(post) =>
                <Block style={{ paddingHorizontal: 18 }}>
                  <CampaignCommentCard
                    profilePic={post.item.profilepic}
                    name={post.item.name}
                    comment={post.item.comment}
                  />
                </Block>
              }
          />
        </Block>
         <Block style={{ paddingHorizontal: 18,backgroundColor:"white",justifyContent:"flex-end",bottom:0,paddingVertical:10,position:"absolute",width:"100%"}}>
           <Block style={styles.amountSection}>
              <Block style={{flex:6}}>
                <TextInput
                  style={styles.input}
                  placeholder="write something"
                  placeholderTextColor={theme.colors.solidGray}
                  keyboardType="default"
                  multiline={true}
                  maxHeight={80}
                />
                </Block>
              <TouchableOpacity  activeOpacity={1} style={{flex:1}}>
                  <Text
                  center
                  style={{ fontSize: 16, fontWeight: "700", color: "#0BB3F3" }}
                >
                  Post
                </Text>
                </TouchableOpacity>
              </Block>
        </Block>
    </SafeAreaView>
  );
};

export default CampaignDonors;

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
