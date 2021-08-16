import React, { useState, useEffect, useRef } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ActivityIndicator,
  Pressable,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  FloatingButton,
  MemberDetailCard,
  ErrorMessage,
} from "../../../../components/Index.js";
import AddIconComponent from "./../../../../assets/icons/addIconComponent";
import Permissions from "./Permissions";
import PermissionProto from "./../../../../protos/permission_pb";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";

const WIDTH = Dimensions.get("window").width;

const Members = ({
  navigation,
  data,
  loginData,
  members,
  addMemberData,
  permissionsAssign,
  permissionsAssignClear,
  permissionsListStart,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [assignError, setAssignError] = useState(false);
  const [accountData, setAccountData] = useState();
  const [selectedData, setSelectedData] = useState([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    members(loginData.user.account.accountid);
    setRefreshing(false);
  });

  useEffect(() => {
    if (data.permissionsAssign != null) {
      if (data.permissionsAssign.success) {
        permissionsAssignClear();
      }
    } else {
      members(loginData.user.account.accountid);
      permissionsListStart();
    }
  }, [data.permissionsAssign, addMemberData.addMember]);

  const modalizeRef = useRef();

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onSubmitApply = () => {
    if (selectedData.length > 0) {
      var filterResult = selectedData.filter((item) => {
        return item.checked == true;
      });
      const permissionProto = new PermissionProto.PermissionAssignReq();
      const permissionsList = [];
      filterResult.map(function (assign) {
        const permissionAssign = new PermissionProto.PermissionAssign();
        permissionAssign.setPermissionid(assign.permissionid);
        permissionsList.push(permissionAssign);
      });
      // assign
      permissionProto.setPermissionassignsList(permissionsList);
      permissionProto.setAccountid(accountData.account.accountid);
      permissionsAssign(permissionProto);
      setAssignError(false);
      setSelectedData([]);
      modalizeRef.current?.close();
    } else {
      setAssignError(true);
    }
  };

  return (
    <>
      <SafeAreaView>
        <Block style={{ flex: 0 }}>
          {data.isLoading || data.isPermissionsListLoading ? (
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
                  style={{ fontSize: 18, fontWeight: "700", marginBottom: 12 }}
                >
                  {" "}
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
                    onLongPress={() => {}}
                    delayLongPress={500}
                  >
                    <MemberDetailCard
                      profilePic={post.item.profilepic}
                      permissionsList={post.item.permissionsList}
                      name={post.item.account.fullname}
                      email={post.item.account.email}
                      onPress={() => {
                        setAccountData(post.item);
                        onOpen();
                      }}
                    />
                  </Pressable>
                )}
              />
            </>
          )}
        </Block>
        <Portal>
          <Modalize
            ref={modalizeRef}
            snapPoint={180}
            modalHeight={180}
            withHandle={false}
          >
            <View style={{ width: "100%", paddingHorizontal: 18 }}>
              <Block
                style={{ flex: 0, alignItems: "center", paddingVertical: 10 }}
              >
                <Block
                  style={{
                    flex: 0,
                    backgroundColor: "#E2E2E2",
                    width: WIDTH - 280,
                    borderRadius: 10,
                    paddingVertical: 2,
                  }}
                />
              </Block>
              <Permissions
                setSelectedData={setSelectedData}
                selectedData={selectedData}
                permissionsListData={data.permissionsList}
              />
              <ErrorMessage
                error={"Please assign a permission value"}
                visible={assignError}
              />
              <Button style={{ marginTop: 8 }} onPress={onSubmitApply}>
                <Text button style={{ fontSize: 18 }}>
                  Assign
                </Text>
              </Button>
            </View>
          </Modalize>
        </Portal>
      </SafeAreaView>
      <FloatingButton
        iconComponent={<AddIconComponent />}
        onPress={() => navigation.navigate("Add New Member")}
      />
    </>
  );
};

export default Members;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modal: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    paddingVertical: 10,
  },
  customPicker: {
    height: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#E7E7E7",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 6,
  },
});
