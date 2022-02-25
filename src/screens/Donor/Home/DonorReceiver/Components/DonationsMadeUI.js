import React from "react";
import { StyleSheet } from "react-native";
import * as theme from "constants/theme.js";
import { Block, Text, DonationsDetail } from "components/Index.js";
export default DonationsMadeUI = ({ donationsMadeData, navigation }) => {
  const renderDonationsMade = () => {
    return donationsMadeData.donationsMade
      .filter((transaction) => {
        return transaction.transactiontype == 2;
      })
      .slice(0, 2)
      .map((item, index) => {
        return item.clientList[1] != undefined ? (
          <DonationsDetail
            key={index}
            profilePic={item.clientList[1].profilepic}
            name={item.clientList[1].account.fullname}
            amount={item.amount}
            date={item.createdat}
            textColor={theme.colors.black}
          />
        ) : (
          <Block style={{ paddingHorizontal: 18 }} />
        );
      });
  };
  return (
    <Block style={styles.container}>
      <Block row style={styles.titleContainer}>
        <Text style={styles.title}>Donations Made</Text>
        <Text
          onPress={() => navigation.navigate("Donations Made")}
          style={styles.subTitle}
          color={theme.colors.solidGray}
        >
          View All
        </Text>
      </Block>
      <Block style={styles.listContainer}>{renderDonationsMade()}</Block>
    </Block>
  );
};

export const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, marginTop: 10 },
  titleContainer: { flex: 0.2, justifyContent: "space-between" },
  title: { fontSize: 16, fontWeight: "700", textTransform: "capitalize" },
  subTitle: { fontSize: 15, fontWeight: "500" },
  listContainer: { flex: 1, marginTop: 8 },
  campaignContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.gray2,
    paddingTop: 10,
  },
});
