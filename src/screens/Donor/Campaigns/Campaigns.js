import React, { useState, useEffect } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ActivityIndicator,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  FloatingButton,
  CampaignCard,
} from "../../../components/Index.js";
import API from "./../../../api/API";
import AddIconComponent from "./../../../assets/icons/addIconComponent";
import BlueBankIconComponent from "./../../../assets/icons/blueBankIconComponent";
import {Dummy} from "./Dummy";

const Campaigns = ({ navigation, data,loginData, campaigns }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaigns(loginData.user.clientid);
    setRefreshing(false);
  });
  useEffect(() => {
    // if(data.campaigns===null){
    //     campaigns(loginData.user.clientid);
    // }
  }, [data.campaigns]);
  return (
    <>
          <SafeAreaView>
            <Block style={{ flex: 0 }}>
              <Block style={{paddingVertical:30}}>
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
                  ItemSeparatorComponent={() => (
                    <Block style={{ marginTop: 2 }} />
                  )}
                  ListEmptyComponent={() => <Empty iconName="bank" title="You haven’t stated any campaigns yet.."/>}
                    ListFooterComponent={() => (
                  <Block middle center style={{ marginBottom:120,flex: 0 }}>
                  </Block>
                )}
                ListFooterComponentStyle={{
                  paddingVertical:20,
                }}
                  renderItem={(post) => (
                      <CampaignCard
                        label={post.item.label}
                        image={post.item.image}
                      />
                  )}
                />
                </Block>
            </Block>
          </SafeAreaView>
      <FloatingButton
        iconComponent={<AddIconComponent/>}
        onPress={() => navigation.navigate("Start a campaign")}
      />
    </>
  );
};

export default Campaigns;
