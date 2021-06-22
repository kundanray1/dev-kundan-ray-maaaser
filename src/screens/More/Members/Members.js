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
  MemberDetailCard,
} from "../../../components/Index.js";
import { Bottom } from "./Bottom.js";
import Dummy from "./Dummy.js";


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
                  data={Dummy}
                  showsVerticalScrollIndicator={true}
                  keyExtractor={(item) => {
                    return item.id.toString();
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
                     
            <MemberDetailCard
              profilePic={post.item.profilePic}
              name={post.item.name}
              email={post.item.email}
              onPress={()=>console.log("Pressed")}
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
