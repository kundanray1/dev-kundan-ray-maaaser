import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Modal,
  View,
  FlatList,
  SafeAreaView,
  RefreshControl,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Empty,
  CampaignCommentCard,
  Text,
  Button,
  CustomActivityIndicator,
} from "../../../components/Index.js";
import API from "./../../../api/API";
import { Dummy } from "./Dummy";
import { Formik } from "formik";
import { ManualValidationSchema } from "./../../../utility/ValidationSchema.js";
import CampaignProto from "./../../../protos/campaign_pb";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const CampaignComments = ({
  navigation,
  data,
  loginData,
  campaignComments,
  postCampaignComments,
  campaignId,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [comment, setComment] = useState();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaignComments(campaignId);
    setRefreshing(false);
  });

  useEffect(() => {
    campaignComments(campaignId);
  }, [data.postCampaignComments,data.updateCampaignComments,data.deleteCampaignComments]);

  const onSubmitDonateConfirmation = () => {
    const commentData = new CampaignProto.Comment();
    commentData.setDescription(comment);
    commentData.setRefid(campaignId);
    postCampaignComments(commentData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} />
      ) : (
        <>
          <Block style={{ flex: 0, marginTop: 6 }}>
            <FlatList
              data={data.campaignComments.commentsList}
              showsVerticalScrollIndicator={true}
              keyExtractor={(item) => {
                return item.commentid.toString();
              }}
              refreshControl={
                <RefreshControl
                  colors={[theme.colors.primary2]}
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
              ListEmptyComponent={() => (
                <Empty iconName="comments" title="No comments yet." />
              )}
              ListFooterComponent={() => (
                <Block style={{ marginVertical: 40, flex: 0 }} />
              )}
              renderItem={(post) => (
                <Block style={{ paddingHorizontal: 18 }}>
                  <CampaignCommentCard
                    commentId={post.item.commentid}
                    refId={post.item.refid}
                    profilePic={post.item.profilepicture}
                    name={post.item.fullname}
                    comment={post.item.description}
                    date={post.item.createdat}
                    addedBy={post.item.addedby}
                    loginData={loginData}
                  />
                </Block>
              )}
            />
          </Block>

          <Block
            style={{
              paddingHorizontal: 18,
              backgroundColor: "white",
              justifyContent: "flex-end",
              bottom: 0,
              paddingVertical: 10,
              position: "absolute",
              width: "100%",
            }}
          >
            <Block style={styles.commentSection}>
              <Block style={{ flex: 6 }}>
                <TextInput
                  style={styles.input}
                  onChangeText={(values) => setComment(values)}
                  placeholder="write something"
                  placeholderTextColor={theme.colors.solidGray}
                  keyboardType="default"
                  multiline={true}
                  maxHeight={80}
                />
              </Block>
              <TouchableOpacity
                activeOpacity={1}
                style={{ flex: 1 }}
                onPress={() => onSubmitDonateConfirmation()}
              >
                <Text
                  center
                  style={{ fontSize: 16, fontWeight: "700", color: "#0BB3F3" }}
                >
                  Post
                </Text>
              </TouchableOpacity>
            </Block>
          </Block>
        </>
      )}
    </SafeAreaView>
  );
};

export default CampaignComments;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    backgroundColor: "#F0FBFF",
    color: theme.colors.solidGray,
    paddingHorizontal: 14,
    borderRadius: 40,
  },
  commentSection: {
    flex: 1,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#F0FBFF",
  },
  modal: {
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  commentInput: {
    fontSize: 16,
    fontWeight: "400",
    color: theme.colors.solidGray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    textAlignVertical: "top",
  },
});
