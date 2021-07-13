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
  Empty,
  FloatingButton,
  LinkedAccountsAndLinkedCard,
} from "../../../../components/Index.js";
import { Bottom } from "./Bottom.js";
import API from "./../../../../api/API";
import AddIconComponent from "./../../../../assets/icons/addIconComponent";
import BlueBankIconComponent from "./../../../../assets/icons/blueBankIconComponent";

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
              <Block style={{flex:0,marginTop:26}}>
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
                  ListEmptyComponent={() => <Empty iconName="linkedAccounts" title="You haven’t added any accounts yet."/>}
                    ListFooterComponent={() => (
                  <Block middle center style={{ marginBottom:120,flex: 0 }}>
                  </Block>
                )}
                ListFooterComponentStyle={{
                  paddingVertical:20,
                }}
                  renderItem={(post) => (
                     post.item.bankstatus==1&&
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
                        iconComponent={<BlueBankIconComponent width={40} height={40} style={{alignItems:"center"}}/>}
                        onPress={() => {
                          navigation.navigate("Withdraw Fund",{accountData:post.item})
                        }}
                      />
                    </Pressable>
                  )}
                />
            </Block>

                </>
              )}

            </Block>
          </SafeAreaView>
      </TouchableWithoutFeedback>
      <FloatingButton
        iconComponent={<AddIconComponent/>}
        onPress={() => navigation.navigate("Link New Account",{screenName:"Linked Accounts"})}
      
      />
      <Bottom bs={bs} accountData={accountData} navigation={navigation} />
      
    </>
  );
};

export default LinkedAccounts;
