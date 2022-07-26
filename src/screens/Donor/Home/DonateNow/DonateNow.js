import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import {
  Block,
  Text,
  Empty,
  LoadFundAndDonationMethodCard,
} from "../../../../components/Index.js";
import Dummy from "./Dummy.js";

const DonateNow = ({navigation}) => {
  return (
    <SafeAreaView >
       <Block style={{flex:0,paddingVertical:18,paddingHorizontal:16}}>
        <Text style={{ fontSize: 18, fontWeight: "700",marginBottom:12 }}>Donation Methods  </Text>
        <Text style={{ fontSize: 16}}>Choose the desired methods for the donation.</Text>
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
            iconComponent={post.item.image}
            label={post.item.label}
            onPress={()=>navigation.navigate(post.item.navigate)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default DonateNow;
