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
import AddIconComponent from "./../../../../assets/icons/addIconComponent";
import BlueBankIconComponent from "./../../../../assets/icons/blueBankIconComponent";

const ACH = ({ navigation, data,loginData, ACH }) => {
  const [amountFocus, setAmountFocus] = useState(false);
  const [accountData, setAccountData] = useState();
  const [refreshing, setRefreshing] = useState(false);
  let bs = React.createRef();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    ACH(loginData.user.clientid);
    setRefreshing(false);
  });
  useEffect(() => {
    if(data.ACH===null){
        ACH(loginData.user.clientid);
    }
  }, [data.ACH]);
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
                  Linked Accounts{" "}
                </Text>
              </Block>
                <FlatList
                  data={data.ACH.banksList}
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
                  ListEmptyComponent={() => <Empty iconName="accounts" title="You haven’t added any accounts yet."/>}
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
                        iconComponent={<BlueBankIconComponent width={40} height={40} style={{alignItems:"center"}}/>}
                        onPress={() => {
                          navigation.navigate("ACH Load Fund",{accountData:post.item})
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
        iconComponent={<AddIconComponent/>}
        onPress={() => navigation.navigate("Link New Account",{screenName:"ACH"})}
      />
      <Bottom bs={bs} accountData={accountData} navigation={navigation} />
      
    </>
  );
};

export default ACH;
