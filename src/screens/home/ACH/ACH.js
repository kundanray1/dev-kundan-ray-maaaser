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
  LinkedAccountsAndLinkedCard,
} from "../../../components/Index.js";
import { LoadFund } from "./LoadFund.js";
import { Bottom } from "./Bottom.js";
import Animated from "react-native-reanimated";

const ACH = ({ navigation, data, loginData, ACH,loadAmount }) => {
  const [amountFocus, setAmountFocus] = useState(false);
  const [accountData, setAccountData] = useState();
  const [refreshing, setRefreshing] = useState(false);
  let bs = React.createRef();
  let bs1 = React.createRef();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    ACH(loginData.user.clientid);
    setRefreshing(false);
  });
  useEffect(() => {
    ACH(loginData.user.clientid);
    if(data.loadAmount.success){
          bs.current.snapTo(1);
          bs1.current.snapTo(1);
    }
    
  }, [data.loadAmount]);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          bs.current.snapTo(1);
          bs1.current.snapTo(1);
        }}
      >
        <Animated.View
          style={{
            opacity: Animated.add(
              0.4,
              Animated.multiply(new Animated.Value(1), 1.0)
            ),
          }}
        >
          <SafeAreaView>
            <Block style={{ flex: 0 }}>
              <Block
                style={{ flex: 0, paddingVertical: 10, paddingHorizontal: 16 }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "700",
                  }}
                >
                  Linked Accounts{" "}
                </Text>
              </Block>
              {data.isLoading ? (
                <ActivityIndicator size="large" color={theme.colors.primary2} />
              ) : (
                <FlatList
                  data={data.ACH.banksList}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item) => {
                    return item.bankid.toString();
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
                  ListEmptyComponent={() => <Empty title="data" />}
                  ListFooterComponent={() => (
                    <Block style={{ marginVertical: 40, flex: 0 }} />
                  )}
                  renderItem={(post) => (
                    <Pressable
                      style={{
                        paddingHorizontal: 16,
                        marginVertical: 4,
                      }}
                      onLongPress={() => {
                        bs.current.snapTo(0);
                        setAccountData(post.item);
                      }}
                      delayLongPress={500}
                    >
                      <LinkedAccountsAndLinkedCard
                        accountNo={post.item.accountnumber}
                        label={post.item.bankname}
                        date={post.item.createdat}
                        onPress={() => {
                          bs.current.snapTo(1);
                          bs1.current.snapTo(0);
                          setAccountData(post.item);
                        }}
                      />
                    </Pressable>
                  )}
                />
              )}
            </Block>
          </SafeAreaView>
        </Animated.View>
      </TouchableWithoutFeedback>
      <FloatingButton
        image={require("../../../assets/icons/add-m.png")}
        onPress={() => navigation.navigate("Link New Account")}
      />
      <Bottom bs={bs} accountData={accountData} navigation={navigation} />
       <LoadFund
        bs1={bs1}
        amountFocus={amountFocus}
        setAmountFocusTrue={()=>setAmountFocus(true)}
        setAmountFocusFalse={()=>setAmountFocus(false)}
        accountData={accountData}
      />
    </>
  );
};

export default ACH;
