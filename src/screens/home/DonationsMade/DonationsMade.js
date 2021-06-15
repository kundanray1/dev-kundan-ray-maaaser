import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Empty,DonationsDetail } from "../../../components/Index.js";
import Dummy from './Dummy.js';

const DonationsMade = () => {
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.black} />
        </Block>
      ) : (
      <Block style={{flex:0,marginTop:6}}>
        <FlatList
          data={Dummy}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
          ListEmptyComponent={() => <Empty title="No data" />}
          renderItem={(post) => (
            <Block style={{paddingHorizontal:18}}>

            <DonationsDetail
              profilePic={post.item.profilePic}
              name={post.item.name}
              amount={post.item.amount}
              date={post.item.date}
              textColor={theme.colors.green}
            />
            </Block>
          )}
        />
      </Block>

      )}
    </SafeAreaView>
  );
};

export default DonationsMade;