import React, { useState } from "react";
import { ActivityIndicator,FlatList, SafeAreaView, Image } from "react-native";
import * as theme from "../../../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  SearchBar,
  LoadFundAndDonationMethodCard,
} from "../../../../../components/Index.js";
import Dummy from "./Dummy.js";

const ScanQRCode = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView >
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
            onPress={()=>navigation.navigate(post.item.navigate)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ScanQRCode;
