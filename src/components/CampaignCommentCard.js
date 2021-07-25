import React, { useState } from "react";
import {
	Image,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	Modal,
	View,
	Dimensions,
	TextInput,
	Alert,
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
import {
	updateCampaignCommentsStart,
	deleteCampaignCommentsStart,
} from "./../screens/Campaigns/CampaignComments/actions";
import { useDispatch } from "react-redux";

const WIDTH = Dimensions.get("window").width;
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
	return (
		<>
			<Block
				style={[
					{
						borderBottomWidth: 0.6,
						paddingTop: 16,
						paddingBottom: 10,
						borderColor: "#F0EDF1",
					},
				]}
			>
				<Block row center>
					{profilePic == "" ? (
						<UserIconComponent height={35} width={35} />
					) : (
						<Image
							source={{ uri: profilePic }}
							style={{ height: 35, width: 35, borderRadius: 30 }}
						/>
					)}

					<Text
						style={{
							fontSize: 14,
							fontWeight: "700",
							textTransform: "capitalize",
							marginLeft: 8,
							width:WIDTH- 240,
					}}
					numberOfLines={1}>
						{name}
						{loginData.user.account.accountid == addedBy && "(Me)"}
					</Text>
					<Text
						style={{
							fontSize: 14,
							marginLeft: 10,
							color: "#5F6062",
						}}
					>
						{moment(date).format("DD MMM, YYYY")} at{" "}
						{moment(date).format("hh:mm A")}
					</Text>
				</Block>

				<Block
					style={{
						flex: 0,
					}}
				>
					<Text
						style={{
							fontSize: 16,
							marginLeft: 44,
							color: "#5F6062",
						}}
					>
						{comment}
					</Text>
				</Block>
			</Block>
		</>
	);
};

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
