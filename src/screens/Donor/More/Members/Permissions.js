import React, { useState, useCallback,useEffect } from "react";
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

const Permissions = ({ setSelectedData, selectedData, permissionsListData }) => {

	const [permissionsModalVisible, setPermissionsModalVisible] = useState(
		false
	);
	const [data, setData] = useState(permissionsListData.map(v => ({...v, checked: false})));
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
			<Text bold style={{ fontSize: 14, fontWeight: "700",paddingVertical:10 }}>
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
								key={index}
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
									<View style={[styles.checkBox]} key={index}>
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
