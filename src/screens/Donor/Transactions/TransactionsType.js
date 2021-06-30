import React, { useState, useCallback } from "react";
import {
	SafeAreaView,
	TouchableOpacity,
	StyleSheet,
	Modal,
	Dimensions,
	View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "./../../../constants/theme.js";
import { Block, Text } from "./../../../components/Index.js";
import {Type} from "./Dummy";
const WIDTH = Dimensions.get("window").width;
const TransactionsType = ({ transactionsType, setTransactionsType,setTransactionsTypeId }) => {
	const [
		transactionsTypeModalVisible,
		setTransactionsTypeModalVisible,
	] = useState(false);
	const onPressTransactionsTypeItem = useCallback(
		(item) => {
			setTransactionsType(item.label);
			setTransactionsTypeId(item.type)
			setTransactionsTypeModalVisible(false);
		},
		[setTransactionsType]
	);

	const RenderTransactionsTypeOptions = Type.map(
		(item, index) => (
			<TouchableOpacity
				key={index}
				onPress={() => onPressTransactionsTypeItem(item)}
				style={{ marginVertical: 2 }}
			>
				<Text bold style={{ paddingVertical: 4, fontSize: 18, color: theme.colors.solidGray, }}>
					{item.label}
				</Text>
			</TouchableOpacity>
		)
	);
	return (
		<Block style={{ flex: 0, paddingVertical: 8 }}>
			<Text bold style={{ fontSize: 14, fontWeight: "700" }}>
				Type
			</Text>
			<TouchableOpacity
				style={styles.customPicker}
				activeOpacity={0.8}
				onPress={() =>
					setTransactionsTypeModalVisible(
						!transactionsTypeModalVisible
					)
				}
			>
				<Block>
					<Text
						bold
						style={{
							fontSize: 16,
							
							 color:"#999999"
						}}
					>
						{transactionsType}
					</Text>
				</Block>
				<Block style={{ alignItems: "flex-end" }}>
					<AntDesign
						name="caretdown"
						size={16}
						color={theme.colors.solidGray}
					/>
				</Block>
			</TouchableOpacity>
			<Modal
				visible={transactionsTypeModalVisible}
				transparent={true}
				animationType="fade"
				statusBarTranslucent={true}
				onRequestClose={() =>
					setTransactionsTypeModalVisible(
						!transactionsTypeModalVisible
					)
				}
			>
				<View style={styles.container}>
					<View style={[styles.modal, { width: WIDTH - 30 }]}>
						{RenderTransactionsTypeOptions}
					</View>
				</View>
			</Modal>
		</Block>
	);
};

export default TransactionsType;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
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
	},
	option: {
		alignItems: "flex-start",
	},
	customPicker: {
		height: 28,
		flexDirection: "row",
		justifyContent: "space-between",
    borderColor:"#E7E7E7",
		alignItems: "center",
		borderBottomWidth: 1,
		paddingVertical: 6,
	},
});
