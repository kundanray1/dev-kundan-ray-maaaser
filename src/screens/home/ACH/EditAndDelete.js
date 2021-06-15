import React from "react";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Block, Text } from "../../../components/Index.js";
import * as theme from "../../../constants/theme.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Bottom = ({ navigation, bs, accountData }) => {
	let fall = new Animated.Value();
	const handleDeleteConfirm = () => {
		console.log("Confirm Delete Presssed");
	};
	const handleEdit = () => {
		console.log("handleEdit");
		navigation.navigate("Link New Account", { account: accountData });
	};
	const handleDelete = () => {
		Alert.alert(
			"Account Deletion",
			"Are you sure you want to delete this account?",
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
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
					backgroundColor: "#E8E8E8",
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
