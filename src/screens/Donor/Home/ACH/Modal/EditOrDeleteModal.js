import React from "react";
import {
	SafeAreaView,
	TouchableOpacity,
	View,
	Modal,
	StyleSheet,
	Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as theme from "constants/theme.js";
import { Text, Block } from "components/Index.js";

const EditOrDeleteModal = ({
	editOrDeleteModalVisible,
	setEditOrDeleteModalVisible,
	accountData,
	navigation,
	handleConfirm,
}) => {
	const handleStatus = () => {
		Alert.alert(
			"Delete Linked Account",
			"Are you sure you want to delete this linked account?",
			[
				{
					text: "Cancel",
					style: {
						textTransform: "capitalize",
						color: theme.colors.primary2,
					},
				},
				{ text: "Confirm", onPress: () => handleConfirm() },
			],
			{
				cancelable: true,
			}
		);
	};
	return (
		<SafeAreaView>
			<Modal
				visible={editOrDeleteModalVisible}
				transparent={true}
				animationType="fade"
				statusBarTranslucent={true}
				onRequestClose={() =>
					setEditOrDeleteModalVisible(!editOrDeleteModalVisible)
				}
			>
				<TouchableOpacity
					style={styles.modalContainer}
					activeOpacity={1}
					onPressOut={() =>
						setEditOrDeleteModalVisible(!editOrDeleteModalVisible)
					}
				>
					<View
						style={[
							styles.modal,
							{ width: "100%", paddingHorizontal: 18 },
						]}
					>
						<Block row middle style={styles.modalInnerContainer}>
							<Block
								row
								style={{
									flex: 0.6,
									justifyContent:
										accountData != undefined
											? accountData.bankstatus == 2
												? "center"
												: "space-between"
											: "space-between",
								}}
							>
								{accountData != undefined ? (
									accountData.bankstatus == 2 ? (
										<Block style={{ flex: 0 }} />
									) : (
										<TouchableOpacity
											onPress={() => {
												setEditOrDeleteModalVisible(
													false
												);
												navigation.navigate(
													"Link New Account",
													{
														account: accountData,
														screenName: "ACH",
													}
												);
											}}
											style={styles.icon}
										>
											<MaterialCommunityIcons
												name="pencil-circle"
												size={50}
												color={theme.colors.primary2}
											/>
											<Text
												center
												style={styles.modalText}
											>
												Edit
											</Text>
										</TouchableOpacity>
									)
								) : (
									<TouchableOpacity
										onPress={() => {
											setEditOrDeleteModalVisible(false);
											navigation.navigate(
												"Link New Account",
												{
													account: accountData,
													screenName: "ACH",
												}
											);
										}}
										style={styles.icon}
									>
										<MaterialCommunityIcons
											name="pencil-circle"
											size={50}
											color={theme.colors.primary2}
										/>
										<Text center 
										style={styles.modalText}
										>
											Edit
										</Text>
									</TouchableOpacity>
								)}

								<TouchableOpacity
									onPress={() => {
										setEditOrDeleteModalVisible(false);
										handleStatus();
									}}
									style={styles.icon}
								>
									{accountData != undefined ? (
										accountData.bankstatus == 2 ? (
											<MaterialCommunityIcons
												name="pencil-circle"
												size={50}
												color={theme.colors.primary2}
											/>
										) : (
											<MaterialCommunityIcons
												name="delete-circle"
												size={50}
												color={theme.colors.red}
											/>
										)
									) : (
										<MaterialCommunityIcons
											name="delete-circle"
											size={50}
											color={theme.colors.red}
										/>
									)}
									{accountData != undefined ? (
										<Text center style={styles.modalText}>
											{accountData.bankstatus == 2
												? "Enable"
												: "Delete"}
										</Text>
									) : (
										<Text center style={styles.modalText}>
											Delete
										</Text>
									)}
								</TouchableOpacity>
							</Block>
						</Block>
					</View>
				</TouchableOpacity>
			</Modal>
		</SafeAreaView>
	);
};

export default EditOrDeleteModal;

export const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		backgroundColor: "rgba(52, 52, 52, 0.8)",
	},
	modalInnerContainer: {
		flex: 0,
		paddingVertical: 6,
		backgroundColor: theme.colors.white,
	},
	modalText: {
		fontSize: 14,
		fontWeight: "700",
	},
	icon: { paddingHorizontal: 10 },
	modal: {
		borderColor: theme.colors.gray,
		backgroundColor: theme.colors.white,
		paddingVertical: 10,
	},
});
