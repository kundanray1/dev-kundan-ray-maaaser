import React from "react";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Block, Text } from "../../components/Index.js";
import * as theme from "../../constants/theme.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from 'react-redux'
import { campaignsEditStart } from "./actions";
import CampaignProto from "./../../protos/campaign_pb";

export const Bottom = ({ navigation, bs, campaignData }) => {
	const dispatch = useDispatch()
	let fall = new Animated.Value(1);

	const handleDeleteConfirm = () => {
		bs.current.snapTo(1);
		// const updateData = new CampaignProto.Campaign();
		// updateData.setCampaignid(campaignData.campaignid);
  //   	updateData.setCampaignstatus(3);
	 //    dispatch(campaignsEditStart(updateData))
	};
	const handleEdit = () => {
		bs.current.snapTo(1);
		navigation.navigate("Start a sub campaign", { campaignData: campaignData} );
	};
	const handleDelete = () => {
		Alert.alert(
			"Account Deletion",
			"Are you sure you want to delete this account?",
			[
				{
					text: "Cancel",
					onPress: () => bs.current.snapTo(1),
					style: {
						textTransform: "capitalize",
						color: theme.colors.primary2,
					},
				},
				{ text: "Confirm", onPress:()=> handleDeleteConfirm() },
			],
			{
				cancelable: true,
			}
		);
	};
	const RenderContent = () => {
		return (
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
						onPress={() => handleEdit()}
						style={{ paddingHorizontal: 10 }}
					>
						<MaterialCommunityIcons
							name="pencil-circle"
							size={50}
							color={theme.colors.primary2}
						/>
						<Text
							center
							style={{ fontSize: 14, fontWeight: "700" }}
						>
							Edit
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handleDelete()}
						style={{ paddingHorizontal: 10 }}
					>
						<MaterialCommunityIcons
							name="delete-circle"
							size={50}
							color={theme.colors.red}
						/>
						<Text
							center
							style={{ fontSize: 14, fontWeight: "700" }}
						>
							Delete
						</Text>
					</TouchableOpacity>
				</Block>
			</Block>
		);
	};

	return (
		<BottomSheet
			ref={bs}
			snapPoints={[80, 0]}
			borderRadius={10}
			renderHeader={() => (
				<Block
					style={{
						flex: 0,
						borderTopWidth:1,
						borderColor: theme.colors.gray2,
					}}
				/>
			)}
			renderContent={RenderContent}
			initialSnap={1}
			callbackNode={fall}
			enabledGestureInteraction={false}
		/>
	);
};
const styles = StyleSheet.create({
	header: {
		borderWidth: 1,
		backgroundColor: "#FFFFFF",
		borderColor: theme.colors.black,
		paddingTop: 15,
		alignItems: "center",
	},
});
