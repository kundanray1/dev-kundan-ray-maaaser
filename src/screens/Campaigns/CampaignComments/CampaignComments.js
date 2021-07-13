import React, { useState, useEffect } from "react";
import { ActivityIndicator,Dimensions,Modal,View, FlatList, SafeAreaView, RefreshControl,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Empty, CampaignCommentCard,Text,Button } from "../../../components/Index.js";
import API from "./../../../api/API";
import {Dummy} from "./Dummy";
import { Formik } from "formik";
import { ManualValidationSchema } from "./../../../utility/ValidationSchema.js";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;


const CampaignComments = ({ navigation, data, campaignDonors,campaignId }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [comment, setComment] = useState();
  const [
    editModalVisible,
    setEditModalVisible,
  ] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaignDonors(API.user().account.accountid);
    setRefreshing(false);
  });
  
  // useEffect(() => {
  //   if (data.campaignDonors == null) {
  //     campaignDonors(API.user().account.accountid);
  //   }
  // }, []);

  const onSubmitDonateConfirmation=()=>{

  }
  const EditModal = () => (
    <SafeAreaView>
      <Modal
        visible={editModalVisible}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 40,height:"auto" }]}>
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
          onChangeText={(value)=>setComment(value)}
          value={comment}
          placeholder="Praying for them."
          keyboardType="default"
          multiline
          numberOfLines={8}
        />
        <Block style={{flex:0,paddingTop:24,paddingBottom:24}}>
         <Button onPress={() => onSubmitDonateConfirmation()} >
            <Text button style={{ fontSize: 18 }}>
              Edit
            </Text>
          </Button>
        </Block>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Block style={{ flex: 0, marginTop: 6 }}>
          <FlatList
            data={[]}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item) => {
              return item.id.toString();
            }}
            refreshControl={
              <RefreshControl
                colors={[theme.colors.primary2]}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
            ListEmptyComponent={() => (
              <Empty
                iconName="comments"
                title="No comments yet."
              />
            )}
            ListFooterComponent={() => (
              <Block style={{ marginVertical: 40, flex: 0 }} />
            )}
            renderItem={(post) =>
                <Block style={{ paddingHorizontal: 18 }}>
                  <CampaignCommentCard
                    profilePic={post.item.profilepic}
                    name={post.item.name}
                    comment={post.item.comment}
                  />
                </Block>
              }
          />
        </Block>
         <Block style={{ paddingHorizontal: 18,backgroundColor:"white",justifyContent:"flex-end",bottom:0,paddingVertical:10,position:"absolute",width:"100%"}}>
           <Block style={styles.commentSection}>
              <Block style={{flex:6}}>
                <TextInput
                  style={styles.input}
                  placeholder="write something"
                  placeholderTextColor={theme.colors.solidGray}
                  keyboardType="default"
                  multiline={true}
                  maxHeight={80}
                />
                </Block>
              <TouchableOpacity  activeOpacity={1} style={{flex:1}}>
                  <Text
                  center
                  style={{ fontSize: 16, fontWeight: "700", color: "#0BB3F3" }}
                >
                  Post
                </Text>
                </TouchableOpacity>
              </Block>
        </Block>
          {EditModal()}
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
    borderRadius:40,

  },
  commentSection: {
    flex: 1,
    borderRadius:40,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical:10,
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
    justifyContent:"center"
  },
   commentInput: {
    fontSize: 16,
    fontWeight: "400",
    color: theme.colors.solidGray,
    paddingHorizontal: 8,
    paddingVertical:4,
    borderWidth:1,
    textAlignVertical:"top",
  },
});
