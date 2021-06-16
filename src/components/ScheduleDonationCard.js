import React from "react";
import { Image, TouchableOpacity, Pressable } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import moment from "moment";

export default ScheduleDonationCard = ({
	receiverName,
	amount,
	startDate,
	scheduleType,
	...props
}) => {
	let scheduleTypeString;
	if (scheduleType == 1) {
		scheduleTypeString = "One Time";
	} else if (scheduleType == 2) {
		scheduleTypeString = "Daily";
	} else if (scheduleType == 3) {
		scheduleTypeString = "Weekly";
	} else if (scheduleType == 4) {
		scheduleTypeString = "Monthly";
	} else if (scheduleType == 5) {
		scheduleTypeString = "Quaterly";
	} else if (scheduleType == 6) {
		scheduleTypeString = "Half Yearly";
	} else if (scheduleType == 7) {
		scheduleTypeString = "Yearly";
	} else {
		scheduleTypeString = "Nth Day";
	}
	return (
		<Block
			row
			style={{
				alignItems: "center",
				paddingVertical: 10,
				paddingHorizontal: 10,
				borderRadius: 4,
				shadowRadius: 4,
				elevation: 4,
				backgroundColor: theme.colors.white,
			}}
		>
			<Block
				row
				style={{
					flex: 1,
					alignItems: "flex-start",
				}}
			>
				<Image
					source={require("../assets/icons/image7.png")}
					style={{ height: 40, width: 40, borderRadius: 20 }}
				/>
			</Block>
			<Block
				style={{
					flex: 4,
					justifyContent: "center",
				}}
			>
				<Block row style={{ flex: 0 }}>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "700",
							textTransform: "capitalize",
						}}
					>
						{receiverName}
					</Text>
					<Text
						color={theme.colors.green}
						style={{ fontSize: 16, fontWeight: "700",marginLeft:15 }}
					>
						{"\u0024"}
						{amount}
					</Text>
				</Block>
				<Text
					style={{ fontSize: 12, fontWeight: "700" }}
					color={theme.colors.solidGray}
				>
					{moment(startDate).format("Do MMMM YYYY")}({scheduleTypeString})
				</Text>
			</Block>
			<TouchableOpacity
				activeOpacity={0.8}
				style={{
					flex: 1,
					alignItems: "flex-end",
					justifyContent: "center",
				}}
				{...props}
			>
				<Image
					source={require("../assets/icons/arrowRight.png")}
					style={{ height: 20, width: 20 }}
				/>
			</TouchableOpacity>
		</Block>
	);
};
