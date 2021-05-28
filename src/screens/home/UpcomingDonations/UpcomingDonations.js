import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Text, Empty } from "../../../components/Index.js";
import Dummy from './Dummy.js';

const UpcomingDonations = () => {
  const [loading, setLoading] = useState(false);

  const Item = ({ profilePic,name,amount,date }) => {
    return (
      <Block style={{ paddingHorizontal: 20 }}>
        <Block
          row
          style={{
            paddingVertical: 5,
            borderRadius: 5,
            backgroundColor: theme.colors.white,
          }}
        >
          <Block
            row
            style={{
              flex:1,
              alignItems: "flex-start",
            }}
          >
            <Image
              source={profilePic}
              style={{ height: 38, width: 38, marginRight: 10 }}
            />
           
          </Block>
           <Block style={{
              flex:4,
            }}>
            <Text style={{fontSize:18,fontWeight:"700"}}>{name}</Text>
            <Text style={{fontSize:14,fontWeight:"700"}} color={theme.colors.solidGray}>{date}</Text>
            </Block>
          <Block
            middle
            style={{
              flex:1,
              alignItems: "flex-end",
            }}
          >
            <Text style={{fontSize:16,fontWeight:"700"}}> {"\u0024"} {amount}</Text>

          </Block>
        </Block>
      </Block>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.black} />
        </Block>
      ) : (
        <FlatList
          data={Dummy}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
          ListEmptyComponent={() => <Empty title="No data" />}
          renderItem={(post) => (
            <Item
              profilePic={post.item.profilePic}
              name={post.item.name}
              amount={post.item.amount}
              date={post.item.date}
              textColor={theme.colors.black}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default UpcomingDonations;