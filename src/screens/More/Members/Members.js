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
import { Bottom } from "./Bottom.js";

const Members = ({ navigation, data, loginData, members }) => {
  const [refreshing, setRefreshing] = useState(false);
  let bs = React.createRef();
 
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    members(loginData.user.clientid);
    setRefreshing(false);
  });
 
  useEffect(() => {
    members(loginData.user.clientid);
    
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
                  Added Members{" "}
                </Text>
              </Block>
                <FlatList
                  data={[]}
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
                  ListEmptyComponent={<Empty iconName="account-group" title="You haven’t added any members yet." />}
                  ListFooterComponent={() => (
                    <Block style={{ marginVertical:100,
                     flex: 0 }} />

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
        image={require("../../../assets/icons/add-m.png")}
        onPress={() => navigation.navigate("Add New Member")}
      />
      <Bottom bs={bs}  navigation={navigation} />
       
    </>
  );
};

export default Members;
