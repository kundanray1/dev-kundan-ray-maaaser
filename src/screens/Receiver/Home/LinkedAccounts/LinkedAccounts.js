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
  LinkedAccountsAndLinkedCard,
} from "../../../../components/Index.js";
import { Bottom } from "./Bottom.js";
import API from "./../../../../api/API";

const LinkedAccounts = ({ navigation, data, linkedAccounts }) => {
  const [amountFocus, setAmountFocus] = useState(false);
  const [accountData, setAccountData] = useState();
  const [refreshing, setRefreshing] = useState(false);
  let bs = React.createRef();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    linkedAccounts(API.user().clientid);
    setRefreshing(false);
  });
  useEffect(() => {
    if(data.linkedAccounts===null){
        linkedAccounts(API.user().clientid);
    }
  }, [data.linkedAccounts]);
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
                <FlatList
                  data={data.linkedAccounts.banksList}
                  showsVerticalScrollIndicator={true}
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
                  ListEmptyComponent={() => <Empty iconName="bank" title="You haven’t added any accounts yet."/>}
                    ListFooterComponent={() => (
                  <Block middle center style={{ marginBottom:120,flex: 0 }}>
                  </Block>
                )}
                ListFooterComponentStyle={{
                  paddingVertical:20,
                }}
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
                        image={require("../../../../assets/icons/ach.png")}
                        onPress={() => {
                          navigation.navigate("Withdraw Fund",{accountData:post.item})
                        }}
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
        image={require("../../../../assets/icons/add-m.png")}
        onPress={() => navigation.navigate("Link New Account")}
      />
      <Bottom bs={bs} accountData={accountData} navigation={navigation} />
      
    </>
  );
};

export default LinkedAccounts;
