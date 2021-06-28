import React, { useState } from "react";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Block, Text } from "../../../components/Index.js";
import * as theme from "../../../constants/theme.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import TransactionsMedium from "./TransactionsMedium";
import TransactionsType from "./TransactionsType";

export const Bottom = ({ bs }) => {
	const [fromDate, setFromDate] = useState(new Date());
	const [showFromDate, setShowFromDate] = useState(false);
	const [toDate, setToDate] = useState(new Date());
	const [showToDate, setShowToDate] = useState(false);

	const [transactionsMedium, setTransactionsMedium] = useState();
	const [transactionsType, setTransactionsType] = useState();

  const onChangeFromDate = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setShowFromDate(Platform.OS === "ios");
    setFromDate(currentDate);
    setShowFromDate(false);
  };
  const onChangeToDate = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setShowToDate(Platform.OS === "ios");
    setToDate(currentDate);
    setShowToDate(false);
  };

	let fall = new Animated.Value(1);
	const RenderContent = () => {
		return (
			<Block
				style={{
					flex: 0,
					paddingTop: 20,
					paddingBottom: 32,
					paddingHorizontal: 30,
					backgroundColor: "white",
				}}
			>
				<Block row center style={{ flex: 0 }}>
					<Block style={{ paddingVertical: 8 }}>
						<Text bold style={{ fontSize: 16, fontWeight: "500" }}>
							From
						</Text>
						<TouchableOpacity
							style={styles.customPicker}
							activeOpacity={0.8}
							onPress={() => setShowFromDate(true)}
						>
							<Block>
								<Text
									bold
									style={{
										fontSize: 16,
										color: theme.colors.solidGray,
									}}
								>
									{moment(fromDate).format("DD/MM/YYYY")}
								</Text>
							</Block>
							<Block style={{ alignItems: "flex-end" }}>
								<MaterialCommunityIcons
									name="calendar-month"
									size={20}
									color={theme.colors.primary2}
								/>
							</Block>
						</TouchableOpacity>
						{showFromDate && (
							<DateTimePicker
								testID="dateTimePicker"
								value={fromDate}
								mode="date"
								is24Hour={true}
								display="default"
								minimumDate={new Date()}
								textColor="red"
								onChange={onChangeFromDate}
							/>
						)}
					</Block>
				</Block>

				<Block row center style={{ flex: 0 }}>
					<Block style={{ paddingVertical: 8 }}>
						<Text bold style={{ fontSize: 16, fontWeight: "500" }}>
							To
						</Text>
						<TouchableOpacity
							style={styles.customPicker}
							activeOpacity={0.8}
							onPress={() => setShowToDate(true)}
						>
							<Block>
								<Text
									bold
									style={{
										fontSize: 16,
										color: theme.colors.solidGray,
									}}
								>
									{moment(toDate).format("DD/MM/YYYY")}
								</Text>
							</Block>
							<Block style={{ alignItems: "flex-end" }}>
								<MaterialCommunityIcons
									name="calendar-month"
									size={20}
									color={theme.colors.primary2}
								/>
							</Block>
						</TouchableOpacity>
						{showToDate && (
							<DateTimePicker
								testID="dateTimePicker"
								value={toDate}
								mode="date"
								is24Hour={true}
								display="default"
								minimumDate={new Date()}
								textColor="red"
								onChange={onChangeFromDate}
							/>
						)}
					</Block>
				</Block>
				<Block>
				<TransactionsMedium
				transactionsMedium={transactionsMedium}
				setTransactionsMedium={setTransactionsMedium}
				/>
				</Block>
				<Block>

				<TransactionsType
				transactionsType={transactionsType}
				setTransactionsType={setTransactionsType}
				/>
			</Block>

			</Block>
		);
	};

	return (
		<BottomSheet
			ref={bs}
			snapPoints={[400, 0]}
			borderRadius={10}
			renderHeader={() => (
				<Block
					style={{
						flex: 0,
						borderTopWidth: 1,
						borderColor: theme.colors.white,
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
	customPicker: {
		height: 28,
		flexDirection: "row",
		justifyContent: "space-between",
		borderColor: theme.colors.solidGray,
		alignItems: "center",
		borderBottomWidth: 1,
		paddingVertical: 6,
	},
});
