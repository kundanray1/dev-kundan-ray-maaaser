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
  MemberDetailCard,
} from "../../../../components/Index.js";
import API from "./../../../../api/API";
import AddIconComponent from "./../../../../assets/icons/addIconComponent";


const Members = ({ navigation, data,loginData, members }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [accountData, setAccountData] = useState();

  let bs = React.createRef();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    members(loginData.user.account.accountid);
    setRefreshing(false);
  });

  useEffect(() => {
    if(data.members==null){
    members(loginData.user.account.accountid);
    }
  }, [data.members]);
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
                  style={{
                    flex: 0,
                    paddingVertical: 10,
                    paddingHorizontal: 16,
                  }}
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
                  data={data.members.employeesList}
                  showsVerticalScrollIndicator={true}
                  keyExtractor={(item) => {
                    return item.employeeid.toString();
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
                  ListEmptyComponent={
                    <Empty
                      iconName="members"
                      title="You haven’t added any members yet."
                    />
                  }
                  ListFooterComponent={() => (
                    <Block
                      middle
                      center
                      style={{ marginBottom: 120, flex: 0 }}
                    ></Block>
                  )}
                  ListFooterComponentStyle={{
                    paddingVertical: 20,
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
                        profilePic={post.item.profilepic}
                        name={post.item.account.fullname}
                        email={post.item.account.email}
                        onPress={() => console.log("Pressed")}
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
        onPress={() => navigation.navigate("Add New Member")}
      />
      <Bottom bs={bs} accountData={accountData} navigation={navigation} />
      
    </>
  );
};

export default Members;
