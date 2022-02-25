import React from "react";
import { FlatList, RefreshControl } from "react-native";
import * as theme from "constants/theme.js";
import { Block, Text, Empty } from "components/Index.js";
import { styles } from "./DonationsMadeUI.js";
import NeedHelpFirstCard from "./NeedHelpFirstCard.js";

export default NeedToHelpFirstUI = ({
  allCampaignsData,
  loginData,
  campaignId,
  navigation,
  refreshing,
  onRefresh,
}) => {
  return (
    <Block style={styles.container}>
      <Block row style={styles.titleContainer}>
        <Text style={styles.title}>Need to help first</Text>
        <Text
          onPress={() => navigation.navigate("All Campaigns")}
          style={styles.title}
          color={theme.colors.solidGray}
        >
          View All
        </Text>
      </Block>
      <Block style={styles.campaignContainer}>
        <FlatList
          data={allCampaignsData.allCampaigns.campaignsList.slice(0, 10)}
          refreshControl={
            <RefreshControl
              colors={[theme.colors.primary2]}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          nestedScrollEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => {
            return item.campaignid.toString();
          }}
          ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
          ListEmptyComponent={() => (
            <Empty
              iconName="campaigns"
              dashboard={0}
              title="No campaigns data."
            />
          )}
          renderItem={(post) =>
            post.item.campaignstarter.account.accountid !==
              loginData.user.account.accountid &&
            post.item.campaignstatus == 1 && (
              <NeedHelpFirstCard
                image={post.item.thumbnailurl}
                label={post.item.title}
                collectedAmount={post.item.collectedamount}
                targetAmount={post.item.targetamount}
                countryCode={post.item.countrycode}
                onPress={() => {
                  campaignId(post.item.campaignid);
                  navigation.navigate("Campaign Details");
                }}
              />
            )
          }
        />
      </Block>
    </Block>
  );
};
