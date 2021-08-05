import React, { useState, useEffect } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ActivityIndicator,
  Pressable,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
import API from "./../../../../api/API";
import AddIconComponent from "./../../../../assets/icons/addIconComponent";
import Permissions from "./Permissions";
import PermissionProto from "./../../../../protos/permission_pb";

const WIDTH = Dimensions.get("window").width;

const Members = ({
  navigation,
  data,
  loginData,
  members,
  addMemberData,
  permissionsAssign,
  permissionsAssignClear,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [assignError, setAssignError] = useState(false);
  const [accountData, setAccountData] = useState();
  const [selectedData, setSelectedData] = useState([]);
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
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
    }else{
      members(loginData.user.account.accountid);
    }
  }, [data.permissionsAssign,addMemberData.addMember]);

  const onSubmitApply = () => {
    if (selectedData.length > 0) {
      var filterResult = selectedData.filter((item) => {
        return item.checked == true;
      });
      const permissionProto = new PermissionProto.PermissionAssignReq();
      const permissionsList = [];
      filterResult.map(function (assign) {
        const permissionAssign = new PermissionProto.PermissionAssign();
        permissionAssign.setPermissionid(assign.permissionId);
        permissionsList.push(permissionAssign);
      });
      // assign
      permissionProto.setPermissionassignsList(permissionsList);
      permissionProto.setAccountid(accountData.account.accountid);
      permissionsAssign(permissionProto);
      setConfirmationSuccessfulVisible(false);
      setAssignError(false);
      setSelectedData([]);
    } else {
      setAssignError(true);
    }
  };

  const ConfirmationMessage = () => (
    <SafeAreaView>
      <Modal
        visible={confirmationMessageVisible}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}
        onRequestClose={() => setConfirmationSuccessfulVisible(false)}
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() => setConfirmationSuccessfulVisible(false)}
        >
          <TouchableWithoutFeedback>
            <View
              style={[styles.modal, { width: "100%", paddingHorizontal: 18 }]}
            >
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
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );

  return (
    <>
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
                        setConfirmationSuccessfulVisible(true);
                      }}
                    />
                  </Pressable>
                )}
              />
            </>
          )}
        </Block>
      </SafeAreaView>
      <FloatingButton
        iconComponent={<AddIconComponent />}
        onPress={() => navigation.navigate("Add New Member")}
      />
      {ConfirmationMessage()}
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
