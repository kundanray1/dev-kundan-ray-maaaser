import React from "react";
import { Image, Dimensions } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block.js";
import Text from "./Text.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MembersIconComponent from "./../assets/icons/emptyMembersIconComponent.js";
import TransactionsIconComponent from "./../assets/icons/emptyTransactionsIconComponent.js";
import AccountsIconComponent from "./../assets/icons/blueBankIconComponent.js";
import CardsIconComponent from "./../assets/icons/emptyCardIconComponent.js";
import CommentsIconComponent from "./../assets/icons/emptyCommentsIconComponent.js";
import CampaignsIconComponent from "./../assets/icons/emptyCampaignsIconComponent.js";

const HEIGHT = Dimensions.get("window").height;
export default Empty = ({ iconName, title, dashboard}) => {
  return (
    <Block center style={{ marginTop:dashboard==0?20:(HEIGHT / 4) }}>
      {iconName == "accounts" ? (
        <AccountsIconComponent height={70} width={70} />
      ) : iconName == "cards" ? (
        <CardsIconComponent height={70} width={70} />
      ) : iconName == "donationsMade" ? (
        <TransactionsIconComponent height={70} width={70} />
      ) : iconName == "upcomingDonations" ? (
        <TransactionsIconComponent height={70} width={70} />
      ) : iconName == "receivers" ? (
        <MembersIconComponent height={70} width={70} />
      ) : iconName == "donors" ? (
        <MembersIconComponent height={70} width={70} />
      ) : iconName == "scheduleDonations" ? (
        <TransactionsIconComponent height={70} width={70} />
      ) : iconName == "members" ? (
        <MembersIconComponent height={70} width={70} />
      ) : iconName == "transactions" ? (
        <TransactionsIconComponent height={dashboard==0?45:70} width={dashboard==0?45:70} />
      ) : iconName == "donationsReceived" ? (
        <TransactionsIconComponent height={70} width={70} />
      ) : iconName == "withdraws" ? (
        <TransactionsIconComponent height={70} width={70} />
      ) : iconName == "comments" ? (
        <CommentsIconComponent height={70} width={70} />
      ) : iconName == "campaigns" ? (
        <CampaignsIconComponent height={70} width={70} />
      ) : iconName == "linkedAccounts" ? (
        <AccountsIconComponent height={70} width={70} />
      ) : (
        <Text
          color={theme.colors.gray}
          style={{ fontSize: 16, fontWeight: "700" }}
        >
          Sorry!
        </Text>
      )}
      <Text
        color={theme.colors.gray}
        style={{ fontSize: 16, fontWeight: "700", marginTop: 16 }}
      >
        {title}
      </Text>
    </Block>
  );
};
