import React from "react";
import { Image, TouchableOpacity, Pressable } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import moment from "moment";
import ArrowRightIconComponent from "../assets/icons/arrowRightIconComponent";
import UserIconComponent from "../assets/icons/userIconComponent";
import NumberFormat from "react-number-format";

export default ScheduleDonationCard = ({
	receiverName,
	amount,
	startDate,
	scheduleType,
	scheduleTransactionStatus,
	profilePic,
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
	let status =
		scheduleTransactionStatus == 1
			? "SCHEDULING"
			: scheduleTransactionStatus == 2
			? "DISABLED"
			: "CANCELLED";

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={{
				flexDirection: "row",
				alignItems: "center",
				paddingVertical: 12,
				paddingHorizontal: 20,
				borderRadius: 3,
				shadowRadius: 3,
				elevation: 3,
				backgroundColor: theme.colors.white,
			}}
			{...props}
		>
			<Block
				row
				style={{
					flex: 1,
					alignItems: "flex-start",
				}}
			>
				{profilePic !== "" ? (
					<Image
						source={{ uri: profilePic }}
						style={{ height: 45, width: 45, borderRadius: 30 }}
					/>
				) : (
					<UserIconComponent height={45} width={45} />
				)}
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
						width: 120}} numberOfLines={1}>
						{receiverName}
					</Text>
					<NumberFormat
						value={amount / 100}
						displayType={"text"}
						thousandSeparator={true}
						prefix={"$"}
						decimalScale={2}
						fixedDecimalScale={true}
						renderText={(formattedValue) => (
							<Text
								color={theme.colors.green}
								style={{
									fontSize: 16,
									fontWeight: "700",
									marginLeft: 15,
								}}
							>
								{formattedValue}
							</Text>
						)}
					/>
				</Block>
				<Block center row style={{ flex: 0,paddingVertical:4 }}>
					<Text
						style={{ fontSize: 14 }}
						color={theme.colors.solidGray}
					>
						{moment(startDate).format("DD MMM, YYYY")}
					</Text>

					<Block
						style={{
							flex: 0,
							marginLeft: 10,
							backgroundColor:
								status == "SCHEDULING"
									? theme.colors.schedulingBackground
									: status == "DISABLED"
									? "#FFD8D3"
									: status == "CANCELLED"
									? theme.colors.cancelledBackground
									: theme.colors.schedulingBackground,
							paddingVertical: 2,
							paddingHorizontal: 8,
						}}
					>
						<Text
							style={{
								fontSize: 13,
							}}
							color={
								status == "SCHEDULING"
									? theme.colors.schedulingText
									: status == "DISABLED"
									? "#DE4C3C"
									: status == "CANCELLED"
									? theme.colors.cancelledText
									: theme.colors.schedulingText
							}
						>
							{status}
						</Text>
					</Block>
				</Block>
			</Block>
			<Block
				style={{
					flex: 0.5,
					alignItems: "flex-end",
					justifyContent: "center",
				}}
			>
				<ArrowRightIconComponent />
			</Block>
		</TouchableOpacity>
	);
};
