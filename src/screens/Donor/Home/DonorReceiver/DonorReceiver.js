import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  Image,
  ImageBackground,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  DonationsDetail,
  Button,
  FloatingButton,
  ReceiversDetail,
} from "../../../../components/Index.js";
import Dummy from "./Dummy.js";
import API from "./../../../../api/API";
import DonateIconComponent from "./../../../../assets/icons/DonateIconComponent";
import UserIconComponent from "./../../../../assets/icons/userIconComponent";
import LocalDB from "./../../../../api/LocalStorage";

import { FontAwesome5 } from "@expo/vector-icons";
const DonorReceiver = ({
  navigation,
  data,
  loginData,
  donationsMadeData,
  upcomingDonationsData,
  receiversData,
  balance,
  upcomingDonations,
  donationsMade,
  receivers,
}) => {
  const fullName = loginData.user.account.fullname.split(" ")[0];
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    balance(loginData.user.account.accountid);
    upcomingDonations(loginData.user.account.accountid);
    donationsMade(loginData.user.account.accountid);
    receivers(), setRefreshing(false);
  });
  useEffect(() => {
    if (
      upcomingDonationsData.upcomingDonations == null ||
      donationsMadeData.donationsMade == null ||
      data.donationReceivers == null ||
      receiversData.receivers == null
    ) {
      balance(loginData.user.account.accountid);
      upcomingDonations(loginData.user.account.accountid);
      donationsMade(loginData.user.account.accountid);
      receivers();
    }
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ||
      upcomingDonationsData.isLoading ||
      donationsMadeData.isLoading ||
      receiversData.isLoading ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.primary2} />
        </Block>
      ) : (
        <>
          <Block
            style={{
              flex: 0.26,
            }}
          >
            <ImageBackground
              style={{
                height: "90%",
                width: "100%",
                flex: 1,
                justifyContent: "flex-end",
              }}
              imageStyle={{
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              source={require("../../../../assets/images/backgroundColor.png")}
            >
              <Block
                style={{
                  flex: 0.5,
                  paddingHorizontal: 16,
                }}
              >
                <Block
                  row
                  center
                  style={{
                    paddingHorizontal: 20,
                    borderRadius: 4,
                    shadowRadius: 4,
                    elevation: 4,
                    backgroundColor: theme.colors.white,
                  }}
                >
                  {loginData.user.profilepic == "" ? (
                    <UserIconComponent height={45} width={45}/>
                  ) : (
                    <Image
                      source={{ uri: loginData.user.profilepic }}
                      style={{ height: 50, width: 50, borderRadius: 30 }}
                    />
                  )}
                  <Block
                    style={{
                      flex: 4,
                      marginLeft: 6,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "700",
                        textTransform: "capitalize",
                      }}
                    >
                      Hi, {fullName}!
                    </Text>
                    <Button
                      style={{ height: 30, width: 100, marginTop: 4 }}
                      onPress={() => navigation.navigate("Load Fund")}
                      // onPress={() =>  API.removeTokens()}
                    >
                      <Text
                        color={theme.colors.white}
                        style={{ fontSize: 16, fontWeight: "700" }}
                      >
                        Load Fund
                      </Text>
                    </Button>
                  </Block>

                  <Block
                    style={{
                      flex: 2,
                    }}
                  >
                    <Text
                      center
                      color={theme.colors.solidGray}
                      style={{ fontSize: 16, fontWeight: "700" }}
                    >
                      Balance
                    </Text>
                    <Text center style={{ fontSize: 24, fontWeight: "700" }}>
                      {"\u0024"}
                      {data.balance}
                    </Text>
                  </Block>
                </Block>
              </Block>
            </ImageBackground>
          </Block>

          <Block style={{ flex: 0.7, marginTop: 10 }}>
            <Block style={{ paddingHorizontal: 20, paddingTop: 10 }}>
              <Block row style={{ flex: 0.2, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Upcoming Donations
                </Text>
                <Text
                  onPress={() => navigation.navigate("Upcoming Donations")}
                  style={{ fontSize: 16, fontWeight: "500" }}
                  color={theme.colors.solidGray}
                >
                  View All
                </Text>
              </Block>
              <Block style={{ flex: 1 }}>
                <FlatList
                  data={upcomingDonationsData.upcomingDonations.slice(0, 2)}
                  refreshControl={
                    <RefreshControl
                      colors={[theme.colors.primary2]}
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item) => {
                    return item.scheduletransactionid.toString();
                  }}
                  ListEmptyComponent={() => (
                    <Block center style={{ marginTop: 30 }}>
                      <FontAwesome5
                        name="box-open"
                        size={45}
                        color={theme.colors.gray}
                      />
                      <Text
                        color={theme.colors.gray}
                        style={{ fontSize: 16, fontWeight: "700" }}
                      >
                        You don't have any donations made data.
                      </Text>
                    </Block>
                  )}
                  renderItem={(post) => (
                    <DonationsDetail
                      profilePic={post.item.clientList[1].profilepic}
                      name={post.item.clientList[1].account.fullname}
                      amount={post.item.amount}
                      date={post.item.createdat}
                      textColor={theme.colors.black}
                    />
                  )}
                />
              </Block>
            </Block>

            <Block style={{ paddingHorizontal: 20 }}>
              <Block row style={{ flex: 0.2, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Donations Made
                </Text>
                <Text
                  onPress={() => navigation.navigate("Donations Made")}
                  style={{ fontSize: 16, fontWeight: "500" }}
                  color={theme.colors.solidGray}
                >
                  View All
                </Text>
              </Block>
              <Block style={{ flex: 1 }}>
                <Text
                  style={{ fontSize: 16, fontWeight: "700" }}
                  color={theme.colors.primary2}
                >
                  Recent
                </Text>

                <FlatList
                  data={donationsMadeData.donationsMade
                    .filter((transaction) => {
                      return transaction.transactiontype === 2;
                    })
                    .slice(0, 2)}
                  refreshControl={
                    <RefreshControl
                      colors={[theme.colors.primary2]}
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item) => {
                    return item.transactionid.toString();
                  }}
                  ItemSeparatorComponent={() => (
                    <Block style={{ marginTop: 2 }} />
                  )}
                  ListEmptyComponent={() => (
                    <Block center style={{ marginTop: 30 }}>
                      <FontAwesome5
                        name="box-open"
                        size={45}
                        color={theme.colors.gray}
                      />
                      <Text
                        color={theme.colors.gray}
                        style={{ fontSize: 16, fontWeight: "700" }}
                      >
                        You don't have any donations made data.
                      </Text>
                    </Block>
                  )}
                  renderItem={(post) =>
                    post.item.clientList[1] != undefined ? (
                      <DonationsDetail
                        profilePic={post.item.clientList[1].profilepic}
                        name={post.item.clientList[1].account.fullname}
                        amount={post.item.amount}
                        date={post.item.createdat}
                        textColor={theme.colors.green}
                      />
                    ) : (
                      <Block style={{ paddingHorizontal: 18 }} />
                    )
                  }
                />
              </Block>
            </Block>

            <Block style={{ paddingHorizontal: 20 }}>
              <Block row style={{ flex: 0.2, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Receivers
                </Text>
                <Text
                  onPress={() => navigation.navigate("Receivers")}
                  style={{ fontSize: 16, fontWeight: "500" }}
                  color={theme.colors.solidGray}
                >
                  View All
                </Text>
              </Block>
              <Block style={{ flex: 1 }}>
                <FlatList
                  data={receiversData.receivers.clientsList.slice(0, 2)}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item) => {
                    return item.clientid.toString();
                  }}
                  ItemSeparatorComponent={() => (
                    <Block style={{ marginTop: 2 }} />
                  )}
                  refreshControl={
                    <RefreshControl
                      colors={[theme.colors.primary2]}
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  renderItem={(post) => (
                    <ReceiversDetail
                      profilePic={post.item.profilepic}
                      name={post.item.account.fullname}
                      clientType={post.item.clienttype}
                      onPress={() => navigation.navigate("Donate")}
                    />
                  )}
                />
              </Block>
            </Block>
          </Block>

          <FloatingButton
            image={require("../../../../assets/icons/donate.png")}
            onPress={() => navigation.navigate("Donate")}
          iconComponent={<DonateIconComponent/>}

          />
        </>
      )}
    </SafeAreaView>
  );
};

export default DonorReceiver;
