import React, { useState, useEffect } from "react";
import {
  RefreshControl,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import * as theme from "./../../constants/theme.js";
import { Block, Text, Empty,Button } from "./../../components/Index.js";
import { Entypo } from "@expo/vector-icons";
import { fetchPosts } from "./../../store/actions/PostsActions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const ReduxDemo = ({ fetchPosts, data }) => {

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchPosts();
    setRefreshing(false);
  });
  console.log(data.status)
  useEffect(() => {
     if(data.status=='loading')fetchPosts();
  }, []);

  const Item = ({ description, dateCreated }) => {
    return (
      <Block
        style={{
          paddingHorizontal: 15,
          marginTop: 10,
        }}
      >
        <Block style={{ backgroundColor: "#8b0000", borderRadius: 10 }}>
          <Block
            row
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              justifyContent: "space-between",
            }}
          >
            <Entypo name="megaphone" color={theme.colors.white} size={28} />
            <Block>
              <Text bold paragraph color={theme.colors.white}>
                {description}
              </Text>
            </Block>
          </Block>
          <Block
            row
            style={{
              paddingVertical: 5,
              paddingHorizontal: 20,
              justifyContent: "flex-end",
            }}
          >
            <Text bold color={theme.colors.white}>
              {dateCreated}
            </Text>
          </Block>
        </Block>
      </Block>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.status=='loading' ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.maroon} />
        </Block>
      ) : (
        <FlatList
          data={data.posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          ListEmptyComponent={() => <Empty title="notifications" />}
          refreshControl={
            <RefreshControl
              colors={[theme.colors.maroon]}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          renderItem={(post) => (
            <Item description={post.item.description} dateCreated={post.item.created_at} />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const structuredSelector = createStructuredSelector({
  data: (state) => state.posts,
});

const mapDispatchToProps = { fetchPosts };
export default connect(structuredSelector, mapDispatchToProps)(ReduxDemo);
