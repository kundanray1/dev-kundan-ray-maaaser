import React, { useState } from "react";
import { ActivityIndicator,FlatList, SafeAreaView, Image } from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  SearchBar,
  LoadFundAndDonationMethodCard,
} from "../../../components/Index.js";
import Dummy from "./Dummy.js";

const LoadFund = () => {
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView >
      <Block style={{flex:0,marginTop:10,paddingHorizontal:16}}>
        <Text style={{ fontSize: 22, fontWeight: "700",paddingVertical:2 }}>Load Fund Methods </Text>
        <Text style={{ fontSize: 16,paddingVertical:2}}>Choose the desired method for the load fund.</Text>
      </Block>
      <FlatList
        data={Dummy}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
        ListEmptyComponent={() => <Empty title="No data" />}
        renderItem={(post) => (
          <LoadFundAndDonationMethodCard
            image={post.item.image}
            label={post.item.label}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default LoadFund;
