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
import AddIconComponent from "./../../../../assets/icons/addIconComponent";
import CardIconComponent from "./../../../../assets/icons/cardIconComponent";
import PaymentProto from "./../../../../protos/payment_pb";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Card = ({
  navigation,
  data,
  card,
  loginData,
  linkNewCardData,
  cardUpdateStatusStart,
}) => {
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [cardData, setCardData] = useState();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    card();
    setRefreshing(false);
  });
  useEffect(() => {
    card();
  }, [data.cardUpdateStatus, linkNewCardData.linkNewCard]);

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
                      cardData != undefined
                        ? cardData.cardstatus == 2
                          ? "center"
                          : "space-between"
                        : "space-between",
                  }}
                >
                  {cardData != undefined ? (
                    cardData.cardstatus == 2 ? (
                      <Block style={{ flex: 0 }} />
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          setConfirmationSuccessfulVisible(false);
                          navigation.navigate("Link New Card", {
                            card: cardData,
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
                        handleStatus();
                      }}
                      style={{ paddingHorizontal: 10 }}
                    >
                      <MaterialCommunityIcons
                        name="delete-circle"
                        size={50}
                        color={theme.colors.red}
                      />
                      <Text center style={{ fontSize: 14, fontWeight: "700" }}>
                        Disable
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
                    {cardData != undefined ? (
                      cardData.cardstatus == 2 ? (
                        <MaterialCommunityIcons
                          name="pencil-circle"
                          size={50}
                          color={theme.colors.primary2}
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name="delete-circle"
                          size={50}
                          color={theme.colors.red}
                        />
                      )
                    ) : (
                      <MaterialCommunityIcons
                        name="delete-circle"
                        size={50}
                        color={theme.colors.red}
                      />
                    )}

                    {cardData != undefined ? (
                      <Text center style={{ fontSize: 14, fontWeight: "700" }}>
                        {cardData.cardstatus == 2 ? "Enable" : "Disable"}
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
    const linkNewCardData = new PaymentProto.Card();

    linkNewCardData.setCardid(cardData.cardid);
    linkNewCardData.setRefid(cardData.refid);
    linkNewCardData.setCardstatus(cardData.cardstatus == 2
        ? PaymentProto.Card.CardStatus.ACTIVE_CARD
        : PaymentProto.Card.CardStatus.INACTIVE_CARD);
    linkNewCardData.setAccountid(loginData.user.account.accountid);
    linkNewCardData.setCardnumber(cardData.cardnumber);
    linkNewCardData.setCardholdername(cardData.cardholdername);
    linkNewCardData.setCvc(cardData.cvc);
    linkNewCardData.setExpirydate(new Date().getTime());
    cardUpdateStatusStart(linkNewCardData);
  };

  const handleStatus = () => {
    Alert.alert(
      "Update card status",
      "Are you sure you want to update this card status?",
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
                Linked Cards{" "}
              </Text>
            </Block>
            <FlatList
              data={data.card}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => {
                return item.cardid.toString();
              }}
              refreshControl={
                <RefreshControl
                  colors={[theme.colors.primary2]}
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
              ListEmptyComponent={() => (
                <Empty iconName="cards" title="You don't have any data." />
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
                    setCardData();
                    setConfirmationSuccessfulVisible(true);
                    setCardData(post.item);
                  }}
                  delayLongPress={500}
                >
                  <LinkedAccountsAndLinkedCard
                    accountNo={post.item.cardnumber}
                    date={post.item.expirydate}
                    status={post.item.cardstatus}
                    iconComponent={<CardIconComponent />}
                    onPress={() => {
                      navigation.navigate("Card Load Fund", {
                        cardData: post.item,
                      });
                    }}
                  />
                </Pressable>
              )}
            />
          </>
        )}
      </SafeAreaView>
      <FloatingButton
        iconComponent={<AddIconComponent />}
        onPress={() => navigation.navigate("Link New Card")}
      />
      {ConfirmationMessage()}
    </>
  );
};

export default Card;

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
