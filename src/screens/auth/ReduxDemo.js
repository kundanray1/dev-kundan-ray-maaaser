import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import * as theme from "./../../constants/theme.js";
import { Block, Text, Empty, Button } from "./../../components/Index.js";
import { Entypo } from "@expo/vector-icons";
import { getPosts } from "./../../store/actions/PostsActions";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

const ReduxDemo = ({ navigation, posts, auth }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(getPosts());
    setRefreshing(false);
  });
 console.log(posts)
  useEffect(() => {
    dispatch(getPosts());
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
      {posts.isloading ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.maroon} />
        </Block>
      ) : (
        <>
          <Text
            bold
            h2
            color={theme.colors.black}
            onPress={() => navigation.navigate("Add Notification")}
          >
            Add New Notification
          </Text>

          <FlatList
            data={posts.posts}
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
              <Item
                description={post.item.description}
                dateCreated={post.item.created_at}
              />
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const structuredSelector = createStructuredSelector({
  posts: (state) => state.posts,
  auth: (state) => state.auth,
});

const mapDispatchToProps = { getPosts };
export default connect(structuredSelector, mapDispatchToProps)(ReduxDemo);
