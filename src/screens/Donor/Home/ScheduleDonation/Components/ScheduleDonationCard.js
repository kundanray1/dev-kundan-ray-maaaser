import React from "react";
import { Image, TouchableOpacity,StyleSheet } from "react-native";
import * as theme from "constants/theme.js";
import { Block, Text } from "components/Index.js";
import moment from "moment";
import { ArrowRightIcon, UserIcon } from "assets/icons/Index.js";
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
			style={styles.cardContainer}
			{...props}
		>
			<Block
				row
				style={{
					alignItems: "flex-start",
				}}
			>
				{profilePic !== "" ? (
					<Image source={{ uri: profilePic }} style={styles.image} />
				) : (
					<UserIcon height={40} width={40} />
				)}
			</Block>
			<Block
				style={{
					flex: 4,
				}}
			>
				<Block row style={{ justifyContent: "space-between" }}>
					<Text style={styles.receiverName} numberOfLines={1}>
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
								style={styles.amount}
							>
								{formattedValue}
							</Text>
						)}
					/>
				</Block>
				<Block center row style={{ justifyContent: "space-between" }}>
					<Text style={styles.date}>
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
			<Block style={styles.arrowRightIcon}>
				<ArrowRightIcon />
			</Block>
		</TouchableOpacity>
	);
};

export const styles = StyleSheet.create({
	cardContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 8,
		paddingHorizontal: 10,
		borderRadius: 3,
		shadowRadius: 3,
		elevation: 3,
		backgroundColor: theme.colors.white,
	},
	image: { height: 40, width: 40, borderRadius: 30 },
	receiverName: {
		fontSize: 16,
		fontWeight: "700",
		textTransform: "capitalize",
		width: 120,
	},
	amount: {
		fontSize: 16,
		fontWeight: "700",
		marginLeft: 15,
	},
	date: { fontSize: 14, color: theme.colors.solidGray },
	arrowRightIcon: {
		flex: 0.5,
		alignItems: "flex-end",
		justifyContent: "center",
	},
});
