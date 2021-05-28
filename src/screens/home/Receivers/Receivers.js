import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Text, Empty,SearchBar,ReceiversDetail } from "../../../components/Index.js";
import Dummy from './Dummy.js';

const Receivers = () => {
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.black} />
        </Block>
      ) : (
    <Block  style={{ paddingHorizontal: 20 }}>
    <SearchBar />
        <FlatList
          data={Dummy}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
          ListEmptyComponent={() => <Empty title="No data" />}
          renderItem={(post) => (
            <ReceiversDetail
              profilePic={post.item.profilePic}
              name={post.item.name}
            />
          )}
        />
        </Block>
      )}
    </SafeAreaView>
  );
};

export default Receivers;