import React from "react";
import { FlatList, SafeAreaView,  } from "react-native";
import {
  Block,
  Text,
  Empty,
  LoadFundAndDonationMethodCard,
} from "../../../../components/Index.js";
import Dummy from "./Dummy.js";
import YellowBankIconComponent from "./../../../../assets/icons/yellowBankIconComponent";

const LoadFund = ({navigation}) => {
  return (
    <SafeAreaView >
      <Block style={{flex:0,paddingVertical:15,paddingHorizontal:16}}>
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
            iconComponent={post.item.image}
            label={post.item.label}
            onPress={()=>navigation.navigate(post.item.navigate)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default LoadFund;
