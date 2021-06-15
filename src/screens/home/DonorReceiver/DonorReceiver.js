import React,{useEffect} from "react";
import {
  FlatList,
  SafeAreaView,
  Image,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  DonationsDetail,
  Button,
  FloatingButton,
  ReceiversDetail,
} from "../../../components/Index.js";
import Dummy from "./Dummy.js";

const DonorReceiver = ({ navigation,data, loginData, balance }) => {
  const fullName = loginData.user.account.fullname.split(" ")[0];
  console.log(data);
  useEffect(() => {
    balance(loginData.user.account.accountid);
  }, [data.balance.balanceamount]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
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
              source={require("../../../assets/images/backgroundColor.png")}
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
                  <Block
                    style={{
                      flex: 1,
                    }}
                  >
                    <Image
                      source={require("../../../assets/icons/user.png")}
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
                      onPress={() => navigation.navigate("Load Fund")}
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
                      {data.balance.balanceamount}
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
                  data={Dummy}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item) => {
                    return item.id.toString();
                  }}
                  ListEmptyComponent={() => <Empty title="No data" />}
                  renderItem={(post) => (
                    <DonationsDetail
                      profilePic={post.item.profilePic}
                      name={post.item.name}
                      amount={post.item.amount}
                      date={post.item.date}
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
                <FlatList
                  data={Dummy}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item) => {
                    return item.id.toString();
                  }}
                  ItemSeparatorComponent={() => (
                    <Block style={{ marginTop: 2 }} />
                  )}
                  ListEmptyComponent={() => <Empty title="No data" />}
                  renderItem={(post) => (
                    <DonationsDetail
                      profilePic={post.item.profilePic}
                      name={post.item.name}
                      amount={post.item.amount}
                      date={post.item.date}
                      textColor={theme.colors.green}
                    />
                  )}
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
                  data={Dummy}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item) => {
                    return item.id.toString();
                  }}
                  ItemSeparatorComponent={() => (
                    <Block style={{ marginTop: 2 }} />
                  )}
                  ListEmptyComponent={() => <Empty title="No data" />}
                  renderItem={(post) => (
                    <ReceiversDetail
                      profilePic={post.item.profilePic}
                      name={post.item.name}
                      onPress={() => navigation.navigate("Donate")}
                    />
                  )}
                />
              </Block>
            </Block>
          </Block>

          <FloatingButton
            image={require("../../../assets/icons/donate.png")}
            onPress={() => navigation.navigate("Donate")}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default DonorReceiver;
