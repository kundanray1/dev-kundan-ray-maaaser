import React from "react";
import { FlatList, SafeAreaView,  } from "react-native";
import {
  Block,
  Text,
  Empty,
  LoadFundAndDonationMethodCard,
  FloatingButton
} from "../../../../components/Index.js";
import Dummy from "./Dummy.js";
import DonateIconComponent from "./../../../../assets/icons/DonateIconComponent";

const LoadFund = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Block style={{flex:0,paddingVertical:18,paddingHorizontal:16}}>
        <Text style={{ fontSize: 18, fontWeight: "700",marginBottom:12 }}>Load Fund Methods </Text>
        <Text style={{ fontSize: 16}}>Choose the desired method for the load fund.</Text>
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
       <FloatingButton
        onPress={() => navigation.navigate("Donate")}
        iconComponent={<DonateIconComponent />}
      />
    </SafeAreaView>
  );
};

export default LoadFund;
