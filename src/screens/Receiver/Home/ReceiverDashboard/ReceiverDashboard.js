import React, { useState, useEffect } from "react";
import {
  FlatList,
  TouchableOpacity,
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
  DonorsDetail,
} from "../../../../components/Index.js";
import Dummy from "./Dummy.js";
import API from "./../../../../api/API";
import LocalDB from "./../../../../api/LocalStorage";

import { FontAwesome5 } from "@expo/vector-icons";
const DonorReceiver = ({
  navigation,
  data,
  loginData,
  donationReceivedData,
  donorsData,
  receiverDashboard,
  balance,
  donationReceived,
  donors,
}) => {
  const fullName = loginData.user.account.fullname.split(" ")[0];
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    balance(loginData.user.account.accountid);
    donationReceived(loginData.user.account.accountid);
    donors(), setRefreshing(false);
  });
  useEffect(() => {
    if (
      donationReceivedData.donationReceived == null ||
      data.donationDashboard == null ||
      donorsData.donors == null
    ) {
      balance(loginData.user.account.accountid);
      donationReceived(loginData.user.account.accountid);
      donors();
    }
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ||
      donationReceivedData.isLoading ||
      donorsData.isLoading ? (
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
              <TouchableOpacity
              activeOpacity={0.8}
                style={{
                  flex: 0,
                  alignItems: "flex-end",
                  paddingHorizontal: 16,
                }}
              >
                <Image
                  source={require("../../../../assets/icons/bellIcon.png")}
                  style={{ height: 30, width: 30,marginBottom:10,marginRight:10 }}
                />
              </TouchableOpacity>
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
                  <Block
                    style={{
                      flex: 1,
                    }}
                  >
                    <Image
                      source={require("../../../../assets/icons/user.png")}
                      style={{ height: 40, width: 40, marginRight: 10 }}
                    />
                  </Block>
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
                      onPress={() => navigation.navigate("Linked Accounts")}
                      // onPress={() =>  API.removeTokens()}
                    >
                      <Text
                        color={theme.colors.white}
                        style={{ fontSize: 16, fontWeight: "700" }}
                      >
                        Withdraw
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
            <Block style={{ paddingHorizontal: 20, flex: 1 }}>
              <Block row style={{ flex: 0.2, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Donation Received
                </Text>
                <Text
                  onPress={() => navigation.navigate("Donation Received")}
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
                  data={donationReceivedData.donationReceived
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
                        You don't have made any donation received yet.
                      </Text>
                    </Block>
                  )}
                  renderItem={(post) =>
                    post.item.clientList[1] != undefined ? (
                      <DonationsDetail
                        profilePic={require("../../../../assets/icons/user.png")}
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

            <Block style={{ paddingHorizontal: 20, flex: 2 }}>
              <Block row style={{ flex: 0.1, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>Donors</Text>
                <Text
                  onPress={() => navigation.navigate("Donors")}
                  style={{ fontSize: 16, fontWeight: "500" }}
                  color={theme.colors.solidGray}
                >
                  View All
                </Text>
              </Block>
              <Block style={{ flex: 1 }}>
                <FlatList
                  data={donorsData.donors.clientsList.slice(0, 8)}
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
                  ListEmptyComponent={() => (
                    <Empty
                      iconName="account-group"
                      title="No donors avaialble!"
                    />
                  )}
                  renderItem={(post) => (
                    <DonorsDetail
                      profilePic={require("../../../../assets/icons/user.png")}
                      name={post.item.account.fullname}
                      clientType={post.item.clienttype}
                    />
                  )}
                />
              </Block>
            </Block>
          </Block>
        </>
      )}
    </SafeAreaView>
  );
};

export default DonorReceiver;
