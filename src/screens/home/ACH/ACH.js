import React, { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  FloatingButton,
  LinkedAccountsAndLinkedCard,
} from "../../../components/Index.js";
import Dummy from "./Dummy.js";

const ACH = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Block>
      <SafeAreaView>
        <Block style={{ flex: 0, marginTop: 10, paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 25, fontWeight: "700", paddingVertical: 2 }}>
            Linked Accounts{" "}
          </Text>
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
            <LinkedAccountsAndLinkedCard
              image={post.item.image}
              accountNo={post.item.accountNo}
              label={post.item.label}
              date={post.item.date}
            />
          )}
        />

      </SafeAreaView>
       <FloatingButton
          image={require("../../../assets/icons/add-m.png")}
          onPress={() => console.log("Load Fund")}
        />
    </Block>
  );
};

export default ACH;
