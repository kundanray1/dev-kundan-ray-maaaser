import React, { useState, useEffect } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ActivityIndicator,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  FloatingButton,
  ScheduleDonationCard,
} from "../../../../components/Index.js";
import { Bottom } from "./Bottom.js";
import API from "./../../../../api/API";
import AddIconComponent from "./../../../../assets/icons/addIconComponent";

const ScheduleDonation = ({
  navigation,
  data,
  loginData,
  scheduleDonation,
}) => {
  const [amountFocus, setAmountFocus] = useState(false);
  const [scheduleDonationData, setScheduleDonationData] = useState();
  const [refreshing, setRefreshing] = useState(false);
  let bs = React.createRef();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    scheduleDonation(loginData.user.account.accountid);
    setRefreshing(false);
  });
  useEffect(() => {
    scheduleDonation(loginData.user.account.accountid);
  }, []);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          bs.current.snapTo(1);
        }}
      >
        <SafeAreaView>
          <Block style={{ flex: 0 }}>
          
            {data.isLoading ? (
              <ActivityIndicator size="large" color={theme.colors.primary2} />
            ) : (
            <>
            <Block
                style={{ flex: 0, paddingVertical: 10, paddingHorizontal: 16 }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "700",
                  }}
                >
                  Scheduled Donation{" "}
                </Text>
              </Block>
              <FlatList
                data={data.scheduleDonation}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => {
                  return item.scheduletransactionid.toString();
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
                ListEmptyComponent={() => (
                  <Empty
                    iconName="transactions"
                    title="You haven’t scheduled any donations yet."
                  />
                )}
                ListFooterComponent={() => (
                  <Block middle center style={{ marginBottom:120,flex: 0 }}>
                  </Block>
                )}
                ListFooterComponentStyle={{
                  paddingVertical:20,
                }}
                renderItem={(post) => (
                  post.item.scheduletransactionstatus==2||post.item.scheduletransactionstatus==3?
                  <Pressable
                    style={{
                      paddingHorizontal: 16,
                      marginVertical: 4,
                    }}
                  >
                    <ScheduleDonationCard
                      receiverName={post.item.clientList[1].account.fullname}
                      profilePic={post.item.clientList[1].profilepic}
                      amount={post.item.amount}
                      startDate={post.item.scheduledetail.startdate}
                      scheduleType={post.item.scheduledetail.scheduletype}
                      scheduleTransactionStatus={post.item.scheduletransactionstatus}
                      onPress={()=>navigation.navigate("Details",{
                        "scheduleDonationReceiverDetail":post.item
                      })}
                    />
                  </Pressable>
                  :
                   <Pressable
                    style={{
                      paddingHorizontal: 16,
                      marginVertical: 4,
                    }}
                    onLongPress={() => {
                      bs.current.snapTo(0);
                      setScheduleDonationData(post.item);
                    }}
                    delayLongPress={500}
                  >
                    <ScheduleDonationCard
                      receiverName={post.item.clientList[1].account.fullname}
                      profilePic={post.item.clientList[1].profilepic}
                      amount={post.item.amount}
                      startDate={post.item.scheduledetail.startdate}
                      scheduleType={post.item.scheduledetail.scheduletype}
                      scheduleTransactionStatus={post.item.scheduletransactionstatus}
                      onPress={()=>navigation.navigate("Details",{
                        "scheduleDonationReceiverDetail":post.item
                      })}
                    />
                  </Pressable>

                )}
              />
              </>
            )}
          </Block>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <FloatingButton
        iconComponent={<AddIconComponent/>}
         onPress={() => navigation.navigate("Link Schedule Donation")}
      />
      <Bottom
        bs={bs}
        scheduleDonationData={scheduleDonationData}
        navigation={navigation}
      />
    </>
  );
};

export default ScheduleDonation;
