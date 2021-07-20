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
  TouchableWithoutFeedback,
  Pressable,
  Alert
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
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const CampaignComments = ({
  navigation,
  data,
  loginData,
  campaignComments,
  postCampaignComments,
  updateCampaignComments,
  deleteCampaignComments,
  campaignId,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [commentData, setCommentData] = useState();
  const [comment, setComment] = useState();
  const [editedComment, setEditedComment] = useState();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaignComments(campaignId);
    setRefreshing(false);
  });

  useEffect(() => {
    campaignComments(campaignId);
  }, [
    data.postCampaignComments,
    data.updateCampaignComments,
    data.deleteCampaignComments,
  ]);

  const onSubmitDonateConfirmation = () => {
    const commentProtoData = new CampaignProto.Comment();
    commentProtoData.setDescription(comment);
    commentProtoData.setRefid(campaignId);
    postCampaignComments(commentProtoData);
  };

  const onSubmitDonateUpdateConfirmation = () => {
    const commentProtoData = new CampaignProto.Comment();
    commentProtoData.setCommentid(commentData.commentid);
    commentProtoData.setDescription(editedComment);
    commentProtoData.setRefid(commentData.refid);
    updateCampaignComments(commentProtoData);
  };

  const onSubmitDeleteConfirmation = () => {
    deleteCampaignComments(commentData.commentid);
  };
  const handleDelete = () => {
    Alert.alert(
      "Comment Deletion",
      "Are you sure you want to delete this comment?",
      [
        {
          text: "Cancel",
          style: {
            textTransform: "capitalize",
            color: theme.colors.primary2,
          },
        },
        { text: "Confirm", onPress: () => onSubmitDeleteConfirmation() },
      ],
      {
        cancelable: true,
      }
    );
  };
  const EditModal = () => (
    <SafeAreaView>
      <Modal
        visible={editModalVisible}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}
        onRequestClose={() => setEditModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() => setEditModalVisible(false)}
        >
          <TouchableWithoutFeedback>
            <View style={[styles.modal, { width: WIDTH - 40, height: "auto" }]}>
              <Text
                center
                style={{
                  fontSize: 18,
                  paddingTop: 26,
                  paddingBottom: 10,
                  fontWeight: "700",
                  color: theme.colors.primary2,
                }}
              >
                Edit Comment
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  paddingVertical: 10,
                  fontWeight: "500",
                }}
              >
                Comment
              </Text>
              <TextInput
                style={styles.commentInput}
                onChangeText={(values) => setEditedComment(values)}
                value={editedComment}
                placeholder="Praying for them."
                keyboardType="default"
                multiline
                numberOfLines={8}
              />
              <Block
                style={{
                  flex: 0,
                  paddingTop: 24,
                  paddingBottom: 24,
                }}
              >
                <Button onPress={() => {
                  setEditModalVisible(false)
                  onSubmitDonateUpdateConfirmation()
                }}>
                  <Text button style={{ fontSize: 18 }}>
                    Edit
                  </Text>
                </Button>
              </Block>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );

  const ConfirmationMessage = () => (
    <SafeAreaView>
      <Modal
        visible={confirmationMessageVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setConfirmationSuccessfulVisible(!confirmationMessageVisible)
        }
      >
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            backgroundColor: "rgba(52, 52, 52, 0.8)",
          }}
          activeOpacity={1}
          onPressOut={() =>
            setConfirmationSuccessfulVisible(!confirmationMessageVisible)
          }
        >
          <TouchableWithoutFeedback>
            <View
              style={[styles.modal, { width: "100%", paddingHorizontal: 18 }]}
            >
              <Block
                row
                middle
                style={{
                  flex: 0,
                  paddingVertical: 6,
                  backgroundColor: theme.colors.white,
                }}
              >
                <Block
                  row
                  style={{
                    flex: 0.6,
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setConfirmationSuccessfulVisible(false);
                      setEditModalVisible(true);
                    }}
                    style={{ paddingHorizontal: 10 }}
                  >
                    <MaterialCommunityIcons
                      name="pencil-circle"
                      size={50}
                      color={theme.colors.primary2}
                    />
                    <Text center style={{ fontSize: 14, fontWeight: "700" }}>
                      Edit
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setConfirmationSuccessfulVisible(false)
                      handleDelete();
                    }}
                    style={{ paddingHorizontal: 10 }}
                  >
                    <MaterialCommunityIcons
                      name="delete-circle"
                      size={50}
                      color={theme.colors.red}
                    />
                    <Text center style={{ fontSize: 14, fontWeight: "700" }}>
                      Delete
                    </Text>
                  </TouchableOpacity>
                </Block>
              </Block>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );

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
              renderItem={(post) =>
                loginData.user.account.accountid == post.item.addedby ? (
                  <Pressable
                    style={{
                      paddingHorizontal: 18,
                    }}
                    onLongPress={() => {
                      setConfirmationSuccessfulVisible(true);
                      setCommentData(post.item);
                      setEditedComment(post.item.description)
                    }}
                    delayLongPress={500}
                  >
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
                  </Pressable>
                ) : (
                  <Block
                    style={{
                      paddingHorizontal: 18,
                    }}
                  >
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
                )
              }
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
                  style={{
                    fontSize: 16,
                    marginRight: 10,
                    fontWeight: "700",
                    color: "#0BB3F3",
                  }}
                >
                  Post
                </Text>
              </TouchableOpacity>
            </Block>
          </Block>
        </>
      )}
      {EditModal()}
      {ConfirmationMessage()}
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
    backgroundColor: "rgba(52, 52, 52, 0.8)",
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
