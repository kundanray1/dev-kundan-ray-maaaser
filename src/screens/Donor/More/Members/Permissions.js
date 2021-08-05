import React, { useState, useCallback } from "react";
import {
	StyleSheet,
	TouchableOpacity,
	View,
	Image,
	ScrollView,
	Modal,
	Dimensions,
	TouchableWithoutFeedback,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import { Text } from "../../../../components/Index.js";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
const WIDTH = Dimensions.get("window").width;

const CheckBox = ({ isChecked, onPress, size = 15 }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			{isChecked ? (
				<MaterialCommunityIcons
					name="checkbox-marked"
					ScrollView
					size={24}
					color={theme.colors.primary2}
				/>
			) : (
				<MaterialCommunityIcons
					name="checkbox-blank-outline"
					size={24}
					color={theme.colors.solidGray}
				/>
			)}
		</TouchableOpacity>
	);
};

const CheckBoxWithoutSquare = ({ isChecked, onPress, size = 20 }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			{isChecked ? (
				<MaterialCommunityIcons
					name="checkbox-marked"
					size={24}
					color={theme.colors.primary2}
				/>
			) : (
				<MaterialCommunityIcons
					name="checkbox-blank-outline"
					size={24}
					color={theme.colors.solidGray}
				/>
			)}
		</TouchableOpacity>
	);
};

const PERMISSIONS = [
	{
		permissionId: "08787dba615d46bc84eb29ba89587388",
		permission: "balance.write",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "16ace4c74660470088ee05855eefc650",
		permission: "transaction.admin",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "1795bcc57240455d91f23ff19a464c1a",
		permission: "card.admin",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "1da1ab9ee10e4db9a81e1c9668829109",
		permission: "client.admin",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "290fddff73a7436a8d55cba5e7494444",
		permission: "employee.admin",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "2a653f9c88bb4d7caebd5aaf9c92f269",
		permission: "sub.campaign.write",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "31b3981bf43d4021be11d9d8823850e9",
		permission: "user.admin",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "398dce804e894be3a83e2c419a7f0b82",
		permission: "sub.campaign.admin",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "3dabb5eb953041cab30aaeafb20b9d52",
		permission: "balance.admin",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "44856957439f40d99f01bdbba6125000",
		permission: "user.write",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "4d73561d457940539aa2c53338aa8776",
		permission: "employee.write",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "4e35f55ed4864fbf8f77f07cb10efa4e",
		permission: "transaction.read",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "52d20eca4350439184fc62827cb209a0",
		permission: "comment.write",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "552e789779694363a9eb76ba7d63dd4b",
		permission: "bank.read",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "55974a38a62f4f199dfebbd621588f32",
		permission: "balance.read",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "55a1c25855c64afabca6842a00e77853",
		permission: "card.write",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "5d9069614b12420b9a69e774204f1aea",
		permission: "client.write",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "6070d5b1d0524199a0ad345326cb21b3",
		permission: "bank.admin",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "64832a8f607e41f7982ac654d1cf7efd",
		permission: "campaign.read",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "7f7b59ba3dde43699e529393c34a6822",
		permission: "campaign.write",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "8971bcc1895e42149cdbb642cbd68089",
		permission: "schedule.transaction.admin",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "9b427a9118254a56bf870090db0f7cc7",
		permission: "card.read",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "9dcdab6dd6614794aedd06216ace3bf5",
		permission: "bank.write",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "acdf24b3bc124ec097b454f2059344ec",
		permission: "schedule.transaction.write",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "af67905689664fc1bcfa37340f41a51b",
		permission: "schedule.transaction.read",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "b146bf05cc624aa492f6b3c9c4d9e7bb",
		permission: "transaction.write",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "b56fcfdc564a4d198b1456e8188f321d",
		permission: "user.read",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "bdd7d438e21648e2afcf095aff3ec2f3",
		permission: "client.read",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "c467d6e18804434983952da2f916ddc9",
		permission: "campaign.admin",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "c564ed3817934fa68993f63df2aa2ff8",
		permission: "comment.admin",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "c9c58d9d2ad54ef8a6cf2f2c012f67ec",
		permission: "employee.read",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "ee806893dbb9451e95ee7480350901d7",
		permission: "sub.campaign.read",
		createdAt: "1627471341229",
		checked: false,
	},
	{
		permissionId: "feaab7569e4845f991656ab431a1e350",
		permission: "comment.read",
		createdAt: "1627471341229",
		checked: false,
	},
];

const Permissions = ({ setSelectedData, selectedData }) => {
	const [permissionsModalVisible, setPermissionsModalVisible] = useState(
		false
	);
	const [data, setData] = useState(PERMISSIONS);
	const [isChecked, setIsChecked] = useState(true);
	const [selectAll, setSelectAll] = useState(
		data.filter((item) => item.checked).length === data.length
	);
	const checkAll = () => {
		let newValue =
			data.filter((item) => item.checked).length === data.length;
		let temp = data.map((item) => {
			return { ...item, checked: !newValue };
		});
		setSelectedData(data);
		setData(temp);
	};
	const checkOne = (newValue, index) => {
		let temp = data.map((item, i) => {
			return index === i ? { ...item, checked: newValue } : item;
		});
		setData(temp);
		setSelectedData(data);
		setIsChecked(!isChecked);
	};

	const onFinish = useCallback((data) => {
		setSelectedData(data);
	});

	return (
		<View style={[styles.checkContainer]}>
			<Text bold style={{ fontSize: 14, fontWeight: "700" }}>
				Permissions
			</Text>
			<TouchableOpacity
				style={styles.customPicker}
				activeOpacity={0.8}
				onPress={() =>
					setPermissionsModalVisible(!permissionsModalVisible)
				}
			>
				<Block row style={{ flexWrap: "wrap" }}>
					{selectedData
						.filter((item) => {
							return item.checked == true;
						})
						.slice(0, 2)
						.map((item, index) => (
							<Block
								style={{
									flex: 0,
									backgroundColor: "#DCF5FF",
									borderRadius: 5,
									marginRight: 6,
									marginBottom: 4,
									paddingVertical: 4,
									paddingHorizontal: 12,
								}}
							>
								<Text
									style={{ fontSize: 12, fontWeight: "700" }}
									color="#0BB3F3"
								>
									{item.permission}
								</Text>
							</Block>
						))}
					{selectedData
						.filter((item) => {
							return item.checked == true;
						}).length > 2 && 
						<Block
							style={{
								flex: 0,
								backgroundColor: "#DCF5FF",
								borderRadius: 5,
								marginRight: 6,
								marginBottom: 4,
								paddingVertical: 4,
								paddingHorizontal: 12,
							}}
						>
							<Text
								style={{ fontSize: 12, fontWeight: "700" }}
								color="#0BB3F3"
							>
								+
								{selectedData.filter((item) => {
									return item.checked == true;
								}).length - 2}
							</Text>
						</Block>
					}
				</Block>
				<Block style={{flex:0.1, alignItems: "flex-end" }}>
					<AntDesign
						name="caretdown"
						size={16}
						color={theme.colors.solidGray}
					/>
				</Block>
			</TouchableOpacity>

			<Modal
				visible={permissionsModalVisible}
				transparent={true}
				animationType="fade"
				statusBarTranslucent={true}
				onRequestClose={() => {
					onFinish(data);
					setPermissionsModalVisible(false);
				}}
			>
				<TouchableOpacity
					style={styles.container}
					activeOpacity={1}
					onPressOut={() => {
						onFinish(data);
						setPermissionsModalVisible(false);
					}}
				>
					<TouchableWithoutFeedback>
						<View style={[styles.modal, { width: WIDTH - 30 }]}>
							<TouchableOpacity
								style={[styles.checkBox]}
								onPress={checkAll}
							>
								<CheckBox
									isChecked={
										data.filter((item) => item.checked)
											.length === data.length
									}
									onPress={checkAll}
									size={20}
								/>
								<Text style={[styles.checkText]}>
									Select All
								</Text>
							</TouchableOpacity>
							<ScrollView style={{ marginBottom: 10 }}>
								{data.map((item, index) => (
									<View style={[styles.checkBox]}>
										<TouchableOpacity
											style={{
												flex: 1,
												flexDirection: "row",
											}}
											activeOpacity={0.8}
											onPress={() =>
												checkOne(!item.checked, index)
											}
										>
											<CheckBoxWithoutSquare
												isChecked={item.checked}
												onPress={() =>
													checkOne(
														!item.checked,
														index
													)
												}
											/>
											<View
												style={{
													flex: 0,
													backgroundColor: "#DCF5FF",
													borderRadius: 5,
													marginLeft: 6,
													marginBottom: 4,
													paddingVertical: 4,
													paddingHorizontal: 12,
												}}
											>
												<Text
													style={{
														fontSize: 12,
														fontWeight: "700",
														color: "#0BB3F3",
													}}
												>
													{item.permission}
												</Text>
											</View>
										</TouchableOpacity>
									</View>
								))}
							</ScrollView>
						</View>
					</TouchableWithoutFeedback>
				</TouchableOpacity>
			</Modal>
		</View>
	);
};

export default Permissions;

const styles = StyleSheet.create({
	checkBox: {
		flexDirection: "row",
	},
	checkText: {
		marginLeft: 10,
		fontSize: 14,
		fontWeight: "700",
		color: "black",
	},
	underline: {
		textDecorationLine: "underline",
		fontSize: 13,
		fontWeight: "normal",
		color: "black",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		paddingVertical: "2%",
	},
	modal: {
		borderRadius: 4,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 4,
		elevation: 4,
		backgroundColor: theme.colors.white,
		borderRadius: 3,
		padding: 10,
		height: "20%",
	},
	option: {
		alignItems: "flex-start",
	},
	customPicker: {
		height: 28,
		flexDirection: "row",
		justifyContent: "space-between",
		borderColor: "#E7E7E7",
		alignItems: "center",
		borderBottomWidth: 1,
		paddingVertical: 8,
	},
});
