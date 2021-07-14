import React,{useState} from "react";
import {
	Image,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	Modal,
	View,
	Dimensions,
	TextInput,
	Alert
} from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import Button from "./Button";
import { LinearGradient } from "expo-linear-gradient";
import UserIconComponent from "./../assets/icons/userIconComponent";
import moment from "moment";
import CampaignsEditIconComponent from "./../assets/icons/campaignEditIconComponent.js";
import CampaignsDeleteIconComponent from "./../assets/icons/campaignDeleteIconComponent.js";
import CampaignProto from "./../protos/campaign_pb";
import {updateCampaignCommentsStart,deleteCampaignCommentsStart} from "./../screens/Campaigns/CampaignComments/actions";
import { useDispatch } from "react-redux";

const WIDTH=Dimensions.get("window").width
export default CampaignCommentCard = ({
	commentId,
	refId,
	profilePic,
	name,
	comment,
	addedBy,
	date,
	loginData,
	...props
}) => {
	const [editedComment, setEditedComment] = useState(comment);
	const [editModalVisible, setEditModalVisible] = useState(false);
	const dispatch = useDispatch();

	const onSubmitDonateConfirmation = () => {
		const commentData = new CampaignProto.Comment();
		commentData.setCommentid(commentId);
		commentData.setDescription(editedComment);
		commentData.setRefid(refId);
		dispatch(updateCampaignCommentsStart(commentData));
	};
	const onSubmitDeleteConfirmation = () => {
		const commentData = new CampaignProto.Comment();
		dispatch(deleteCampaignCommentsStart(commentId));
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
				{ text: "Confirm", onPress:()=> onSubmitDeleteConfirmation() },
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
				<View style={styles.container}>
					<View
						style={[
							styles.modal,
							{ width: WIDTH - 40, height: "auto" },
						]}
					>
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
							<Button
								onPress={() => onSubmitDonateConfirmation()}
							>
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
		<>
		<Block
			style={[
				{
					borderBottomWidth: 0.6,
					paddingTop: 16,
					paddingBottom: 10,
					borderColor: theme.colors.gray2,
				},
			]}
		>
			<Block row center>
				{profilePic == "" ? (
					<UserIconComponent height={30} width={30} />
				) : (
					<Image
						source={{ uri: profilePic }}
						style={{ height: 30, width: 30, borderRadius: 30 }}
					/>
				)}

				<Text
					style={{
						fontSize: 14,
						fontWeight: "700",
						textTransform: "capitalize",
						marginLeft: 10,
					}}
				>
					{name}
				</Text>
				<Text
					style={{
						fontSize: 14,
						marginLeft: 10,
						color: "#5F6062",
					}}
				>
					{moment(date).format("DD MMM, YYYY")}{" "}
					{moment(date).format("hh:mm A")}
				</Text>
				<Block style={{ alignItems: "flex-end" }}>
					{loginData.user.account.accountid == addedBy && (
						<Block row>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => setEditModalVisible(true)}
						>
							<CampaignsEditIconComponent
								style={{
									marginRight: 10,
									marginTop: 10,
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => handleDelete()}
							>
								<CampaignsDeleteIconComponent
									style={{
										marginRight: 10,
										marginTop: 10,
									}}
								/>
					</TouchableOpacity>
				</Block>
					)}
				</Block>
			</Block>

			<Block
				style={{
					flex: 0,
				}}
			>
				<Text
					style={{ fontSize: 16, marginLeft: 40, color: "#5F6062" }}
				>
					{comment}
				</Text>
			</Block>
			
		</Block>
		{EditModal()}
		</>
	);
};

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
    justifyContent:"center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
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
