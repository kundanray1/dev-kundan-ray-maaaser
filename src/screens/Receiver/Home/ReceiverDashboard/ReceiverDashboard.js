import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  Image,
  ImageBackground,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Dimensions,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  DonationsDetail,
  Button,
  DonorsDetail,
  NeedHelpFirstCard,
} from "../../../../components/Index.js";
import API from "./../../../../api/API";
import NumberFormat from "react-number-format";
import UserIconComponent from "./../../../../assets/icons/userIconComponent";
import BellIconComponent from "./../../../../assets/icons/bellIconComponent";
const HEIGHT = Dimensions.get("window").height;
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
  receiverProfileData,
  receiverProfile,
  campaigns,
  campaignsData
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    balance(loginData.user.account.accountid);
    donationReceived(loginData.user.account.accountid);
    campaigns(loginData.user.account.accountid);
    donors(), setRefreshing(false);
  });
  useEffect(() => {
    if (receiverProfileData.receiverProfile == null) {
      receiverProfile(loginData.user.account.accountid);
      balance(loginData.user.account.accountid);
      donationReceived(loginData.user.account.accountid);
      campaigns(loginData.user.account.accountid);
      donors();
    }
  }, []);
  const renderDonationsReceived = () => {
    return donationReceivedData.donationReceived
      .filter((transaction) => {
        return transaction.transactiontype === 2;
      })
      .slice(0, 2)
      .map((item, index) => {
        return item.clientList[1] != undefined ? (
          <DonationsDetail
            key={index}
            profilePic={item.clientList[0].profilepic}
            name={item.clientList[0].account.fullname}
            amount={item.amount}
            date={item.createdat}
            textColor={theme.colors.green}
          />
        ) : (
          <Block style={{ paddingHorizontal: 18 }} />
        );
      });
  };

  const renderDonors = () => {
    return donorsData.donors.clientsList.slice(0, 8).map((item, index) => {
      return (
        <DonorsDetail
          key={index}
          profilePic={item.profilepic}
          name={item.account.fullname}
          clientType={item.clienttype}
        />
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ||
      donationReceivedData.isLoading ||
      donorsData.isLoading ||
      receiverProfileData.isLoading || 
       campaignsData.isLoading  ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.primary2} />
        </Block>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl
              colors={[theme.colors.primary2]}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <Block>
            <ImageBackground
              style={{
                height: "95%",
                width: "100%",
              }}
              imageStyle={{
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              source={require("../../../../assets/images/backgroundColor.png")}
            >
              <Block
                style={{
                  paddingHorizontal: 16,
                  flex: 0,
                  marginTop: HEIGHT / 10,
                }}
              >
                <Block
                  row
                  center
                  style={{
                    flex: 0,
                    paddingHorizontal: 20,
                    paddingVertical: 16,
                    borderRadius: 4,
                    shadowRadius: 4,
                    elevation: 4,
                    backgroundColor: theme.colors.white,
                  }}
                >
                  {receiverProfileData.receiverProfile.profilepic == "" ? (
                    <UserIconComponent height={45} width={45} />
                  ) : (
                    <Image
                      source={{ uri: receiverProfileData.receiverProfile.profilepic }}
                      style={{ height: 50, width: 50, borderRadius: 30 }}
                    />
                  )}
                  <Block
                    style={{
                      marginLeft: 6,
                      flex: 0,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "700",
                        textTransform: "capitalize",
                        color: theme.colors.solidGray,
                      }}
                    >
                      Hi,{" "}
                      {
                        receiverProfileData.receiverProfile.account.fullname.split(
                          " "
                        )[0]
                      }
                      !
                    </Text>
                    <Button
                      style={{ height: 30, width: 100, marginTop: 4 }}
                      onPress={() => navigation.navigate("Linked Accounts")}
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
                      style={{ fontSize: 18, fontWeight: "700" }}
                    >
                      Balance
                    </Text>

                    <NumberFormat
                      value={data.balance / 100}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      renderText={(formattedValue) => (
                        <Text
                          center
                          style={{
                            fontSize: 20,
                            fontWeight: "700",
                            color: theme.colors.solidGray,
                          }}
                        >
                          {formattedValue}
                        </Text>
                      )}
                    />
                  </Block>
                </Block>
              </Block>
            </ImageBackground>
          </Block>

          <Block style={{ paddingHorizontal: 20, paddingTop: 10 }}>
            <Block row style={{ flex: 0.2, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>
                Need to help first
              </Text>
              <Text
                onPress={() => navigation.navigate("Campaigns")}
                style={{ fontSize: 16, fontWeight: "500" }}
                color={theme.colors.solidGray}
              >
                View All
              </Text>
            </Block>
            <Block
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: theme.colors.gray2,
                paddingTop: 10,
              }}
            >
              <FlatList
                data={campaignsData.campaigns.campaignsList}
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
                keyExtractor={(item, index) => {
                  return index.toString();
                }}
                ItemSeparatorComponent={() => (
                  <Block style={{ marginTop: 2 }} />
                )}
                ListEmptyComponent={() => (
                  <Empty
                    iconName="campaigns"
                    dashboard={0}
                    title="You don't have any campaigns data."
                  />
                )}
                renderItem={(post) => 
                  <NeedHelpFirstCard 
                    image={post.item.thumbnailurl}
                    label={post.item.title}
                    collectedAmount={post.item.collectedamount}
                    targetAmount={post.item.targetamount}
                    onPress={()=>navigation.navigate("Campaign Details",{"campaignData":post.item})}
                    />

                  }
              />
            </Block>
          </Block>

          <Block style={{ paddingHorizontal: 20, paddingTop: 10 }}>
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
            <Block style={{ flex: 1 }}>{renderDonationsReceived()}</Block>
          </Block>

          <Block style={{ paddingHorizontal: 20, paddingBottom: 40 }}>
            <Block row style={{ flex: 0.2, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>Donors</Text>
              <Text
                onPress={() => navigation.navigate("Donors")}
                style={{ fontSize: 16, fontWeight: "500" }}
                color={theme.colors.solidGray}
              >
                View All
              </Text>
            </Block>
            <Block style={{ flex: 1 }}>{renderDonors()}</Block>
          </Block>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default DonorReceiver;
