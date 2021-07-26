import React, { useState, useEffect } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ActivityIndicator,
  Pressable,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  FloatingButton,
  LinkedAccountsAndLinkedCard,
} from "../../../../components/Index.js";
import API from "./../../../../api/API";
import AddIconComponent from "./../../../../assets/icons/addIconComponent";
import BlueBankIconComponent from "./../../../../assets/icons/blueBankIconComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PaymentProto from "./../../../../protos/payment_pb";

const ACH = ({
  navigation,
  data,
  loginData,
  ACH,
  route,
  linkNewAccountData,
  ACHUpdateStatusStart,
}) => {
  const [accountData, setAccountData] = useState();
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    ACH(loginData.user.clientid);
    setRefreshing(false);
  });
  useEffect(() => {
    ACH(loginData.user.clientid);
  }, [data.ACHUpdateStatus, linkNewAccountData.linkNewAccount]);

  const ConfirmationMessage = () => (
    <SafeAreaView>
      <Modal
        visible={confirmationMessageVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setConfirmationSuccessfulVisible(!confirmationMessageVisible)
        }
      >
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            backgroundColor: "rgba(52, 52, 52, 0.8)",
          }}
          activeOpacity={1}
          onPressOut={() =>
            setConfirmationSuccessfulVisible(!confirmationMessageVisible)
          }
        >
          <TouchableWithoutFeedback>
            <View
              style={[styles.modal, { width: "100%", paddingHorizontal: 18 }]}
            >
              <Block
                row
                middle
                style={{
                  flex: 0,
                  paddingVertical: 6,
                  backgroundColor: theme.colors.white,
                }}
              >
                <Block
                  row
                  style={{
                    flex: 0.6,
                    justifyContent:
                      accountData != undefined
                        ? accountData.bankstatus == 2
                          ? "center"
                          : "space-between"
                        : "space-between",
                  }}
                >
                  {accountData != undefined ? (
                    accountData.bankstatus == 2 ? (
                      <Block style={{ flex: 0 }} />
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          setConfirmationSuccessfulVisible(false);
                          navigation.navigate("Link New Account", {
                            account: accountData,
                            screenName: "ACH",
                          });
                        }}
                        style={{ paddingHorizontal: 10 }}
                      >
                        <MaterialCommunityIcons
                          name="pencil-circle"
                          size={50}
                          color={theme.colors.primary2}
                        />
                        <Text
                          center
                          style={{ fontSize: 14, fontWeight: "700" }}
                        >
                          Edit
                        </Text>
                      </TouchableOpacity>
                    )
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setConfirmationSuccessfulVisible(false);
                        navigation.navigate("Link New Account", {
                          account: accountData,
                          screenName: "ACH",
                        });
                      }}
                      style={{ paddingHorizontal: 10 }}
                    >
                      <MaterialCommunityIcons
                        name="pencil-circle"
                        size={50}
                        color={theme.colors.primary2}
                      />
                      <Text center style={{ fontSize: 14, fontWeight: "700" }}>
                        Edit
                      </Text>
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity
                    onPress={() => {
                      setConfirmationSuccessfulVisible(false);
                      handleStatus();
                    }}
                    style={{ paddingHorizontal: 10 }}
                  >
                   {accountData != undefined ? (
                        accountData.bankstatus == 2 ? <MaterialCommunityIcons
                      name="pencil-circle"
                        size={50}
                        color={theme.colors.primary2}
                    /> : <MaterialCommunityIcons
                      name="delete-circle"
                      size={50}
                      color={theme.colors.red}
                    />
                    ) : (
                     <MaterialCommunityIcons
                      name="delete-circle"
                      size={50}
                      color={theme.colors.red}
                    />
                    )}

                    {accountData != undefined ? (
                      <Text center style={{ fontSize: 14, fontWeight: "700" }}>
                        {accountData.bankstatus == 2 ? "Enable" : "Disable"}
                      </Text>
                    ) : (
                      <Text center style={{ fontSize: 14, fontWeight: "700" }}>
                        Disable
                      </Text>
                    )}
                  </TouchableOpacity>
                </Block>
              </Block>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
  const handleConfirm = () => {
    const updateData = new PaymentProto.Bank();
    updateData.setBankid(accountData.bankid);
    updateData.setBankname(accountData.bankname);
    updateData.setAccountholdername(accountData.accountholdername);
    updateData.setAccountnumber(accountData.accountnumber);
    updateData.setRoutingnumber(accountData.routingnumber);
    updateData.setBankstatus(
      accountData.bankstatus == 2
        ? PaymentProto.Bank.BankStatus.ACTIVE_STATUS
        : PaymentProto.Bank.BankStatus.INACTIVE_STATUS
    );
    ACHUpdateStatusStart(updateData);
  };

  const handleStatus = () => {
    Alert.alert(
      "Update account status",
      "Are you sure you want to update this account status?",
      [
        {
          text: "Cancel",
          style: {
            textTransform: "capitalize",
            color: theme.colors.primary2,
          },
        },
        { text: "Confirm", onPress: () => handleConfirm() },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <>
      <SafeAreaView>
        <Block style={{ flex: 0 }}>
          {data.isLoading ? (
            <ActivityIndicator size="large" color={theme.colors.primary2} />
          ) : (
            <>
              <Block
                style={{ flex: 0, paddingVertical: 14, paddingHorizontal: 16 }}
              >
                <Text
                  style={{
                    fontSize: 18,
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
                ListEmptyComponent={() => (
                  <Empty iconName="accounts" title="You don't have any data." />
                )}
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
                      marginVertical: 6,
                    }}
                    onLongPress={() => {
                      setAccountData();
                      setConfirmationSuccessfulVisible(true);
                      setAccountData(post.item);
                    }}
                    delayLongPress={500}
                  >
                    <LinkedAccountsAndLinkedCard
                      accountNo={post.item.accountnumber}
                      label={post.item.bankname}
                      status={post.item.bankstatus}
                      iconComponent={
                        <BlueBankIconComponent
                          width={40}
                          height={40}
                          style={{ alignItems: "center" }}
                        />
                      }
                      onPress={() => {
                        navigation.navigate("ACH Load Fund", {
                          accountData: post.item,
                        });
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
        onPress={() =>
          navigation.navigate("Link New Account", { screenName: "ACH" })
        }
      />
      {ConfirmationMessage()}
    </>
  );
};

export default ACH;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modal: {
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
