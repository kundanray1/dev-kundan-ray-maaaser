import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  RefreshControl,
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
import AddIconComponent from "./../../../../assets/icons/addIconComponent";
import CardIconComponent from "./../../../../assets/icons/cardIconComponent";

const Card = ({ navigation, data, card,loginData,linkNewCardData }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [cardData, setCardData] = useState();
  let bs = React.createRef();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    card();
    setRefreshing(false);
  });
   useEffect(() => {
        card();
  }, [data.cardUpdateStatus,linkNewCardData.linkNewCard]);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          bs.current.snapTo(1);
        }}
      >
        <SafeAreaView>
        
          {data.isLoading ? (
            <ActivityIndicator size="large" color={theme.colors.primary2} />
          ) : (
          <>
            <Block
            style={{ flex: 0, paddingVertical: 10, paddingHorizontal: 16 }}
          >
            <Text
              style={{ fontSize: 22, fontWeight: "700", paddingVertical: 2 }}
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
              ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
              ListEmptyComponent={() => <Empty  iconName="cards" title="You haven’t added any accounts yet."/>}
                ListFooterComponent={() => (
                  <Block middle center style={{ marginBottom:120,flex: 0 }}>
                  </Block>
                )}
                ListFooterComponentStyle={{
                  paddingVertical:20,
                }}
              renderItem={(post) => (
                post.item.cardstatus==1&&
                <Pressable
                  style={{
                    paddingHorizontal: 16,
                    marginVertical: 4,
                  }}
                  onLongPress={() => {
                    bs.current.snapTo(0);
                    setCardData(post.item);
                  }}
                  delayLongPress={500}
                >
                  <LinkedAccountsAndLinkedCard
                    accountNo={post.item.cardnumber}
                    date={post.item.expirydate}
                    iconComponent={<CardIconComponent/>}
                    onPress={() => {
                          navigation.navigate("Card Load Fund",{cardData:post.item})
                        }}
                  />
                </Pressable>
              )}
            />
            </>
          )}
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <FloatingButton
        iconComponent={<AddIconComponent/>}
        onPress={() => navigation.navigate("Link New Card")}
      />
      <Bottom bs={bs} cardData={cardData} loginData={loginData} navigation={navigation} />
    </>
  );
};

export default Card;
