import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import {
  Block,
  Empty,
  LoadFundAndDonationMethodCard,
} from "../../../../../components/Index.js";
import Dummy from "./Dummy.js";

const ScanQRCode = ({navigation}) => {
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
