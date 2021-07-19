import React from "react";
import { Image, TouchableOpacity } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import YellowBankIconComponent from "./../assets/icons/yellowBankIconComponent";
import CardIconComponent from "./../assets/icons/cardIconComponent";
import ManualDonationIconComponent from "./../assets/icons/ManualDonationIconComponent";
import NumberFormat from "react-number-format";

// import YellowBankIconComponent from "./../assets/icons/YellowBankIconComponent";

export default TransactionDetailCard = ({
	profilePic,
	data,
	amount,
	date,
	campaignTitle,
	textColor,
	transactionType,
	transactionMedium,
	navigation,
	...props
}) => {
	let transactionImage;
	let fullname;
	//load fund transactionType
	if (transactionType == 1) {
		transactionImage =
			transactionMedium == 1 ? (
				<YellowBankIconComponent />
			) : transactionMedium == 2 ? (
				<CardIconComponent />
			) : (
				<ManualDonationIconComponent />
			);

		fullname = data.clientList[0].account.fullname;
		//donate transactionType
	} else if (transactionType == 2) {
		transactionImage =
			transactionMedium == 1 ? (
				<YellowBankIconComponent />
			) : transactionMedium == 2 ? (
				<CardIconComponent />
			) : (
				<ManualDonationIconComponent />
			);

		fullname = data.clientList[1].account.fullname;
	} else if (transactionType == 3) {
		transactionImage =
			transactionMedium == 1 ? (
				<YellowBankIconComponent />
			) : transactionMedium == 2 ? (
				<CardIconComponent />
			) : (
				<ManualDonationIconComponent />
			);

		fullname = data.clientList[0].account.fullname;
	} else {
		transactionImage =
			transactionMedium == 1 ? (
				<YellowBankIconComponent />
			) : transactionMedium == 2 ? (
				<CardIconComponent />
			) : (
				<ManualDonationIconComponent />
			);

		fullname = data.clientList[1].account.fullname;
	}
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			style={{
				flexDirection:"row",
				paddingVertical: 16,
				borderBottomWidth: 1,
				paddingHorizontal: 6,
				borderColor: theme.colors.gray2,
			}}
			onPress={()=>navigation.navigate((transactionType == 2 || transactionType == 4 || transactionType == 5)?"Donation Details":(transactionType == 1)?"Load Fund Details":"Transactions",{details:data})}
		>
			<Block center middle>
				{transactionImage}
			</Block>
			<Block
				style={{
					flex: 4,
				}}
			>
				{transactionType == 1 ? (
					<Text style={{ fontSize: 16, fontWeight: "700" }}>
						Fund loaded by {fullname}
					</Text>
				) : (transactionType == 2 || transactionType == 4 || transactionType == 5) ? (
					<>
						<Text style={{ fontSize: 16, fontWeight: "700" }}>
							Donated to {fullname}
						</Text>

						{campaignTitle != undefined && (
							<Text style={{ fontSize: 16, fontWeight: "700" }}>
								{campaignTitle}
							</Text>
						)}
					</>
				) : transactionType == 3 ? (
					<Text style={{ fontSize: 16, fontWeight: "700" }}>
						Fund withdrawn by {fullname}
					</Text>
				) : (
					<Text style={{ fontSize: 16, fontWeight: "700" }}>
						Fund donated to {fullname}
					</Text>
				)}
				<Block row center style={{ flex: 0, paddingTop: 8 }}>
					<Text
						style={{ fontSize: 14, fontWeight: "700" }}
						color={theme.colors.solidGray}
					>
						{moment(date).format("DD MMM, YYYY")} at{" "}
						{moment(date).format("hh:mm A")}
					</Text>
				</Block>
			</Block>
			<Block
				middle
				style={{
					flex: 1,
					alignItems: "flex-end",
				}}
			>
				<TouchableOpacity style={{ marginVertical: 2 }} {...props}>
					<NumberFormat
						value={amount / 100}
						displayType={"text"}
						thousandSeparator={true}
						prefix={"$"}
						decimalScale={2}
						fixedDecimalScale={true}
						renderText={(formattedValue) => (
							<Text
								bold
								style={{
									paddingVertical: 4,
									fontSize: 18,
									fontSize: 16,
									fontWeight: "700",
								}}
								color={textColor}
							>
								{formattedValue}
							</Text>
						)}
					/>
				</TouchableOpacity>
			</Block>
		</TouchableOpacity>
	);
};
