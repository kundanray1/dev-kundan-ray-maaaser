import React from "react";
import { Image, TouchableOpacity,Dimensions } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import YellowBankIconComponent from "./../assets/icons/yellowBankIconComponent";
import CardIconComponent from "./../assets/icons/cardIconComponent";
import ManualDonationIconComponent from "./../assets/icons/ManualDonationIconComponent";
import NumberFormat from "react-number-format";
const WIDTH = Dimensions.get("window").width;

export default ReceiverTransactionDetailCard = ({
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
				<YellowBankIconComponent height={30} width={30}/>
			) : transactionMedium == 2 ? (
				<CardIconComponent height={33} width={27}/>
			) : (
				<ManualDonationIconComponent />
			);

		fullname = data.clientList[0].account.fullname;
		//donate transactionType
	} else if (transactionType == 2) {
		transactionImage =
			transactionMedium == 1 ? (
				<YellowBankIconComponent height={30} width={30} />
			) : transactionMedium == 2 ? (
				<CardIconComponent />
			) : (
				<ManualDonationIconComponent />
			);

		fullname = data.clientList[0].account.fullname;
	} else if (transactionType == 3) {
		transactionImage =
			transactionMedium == 1 ? (
				<YellowBankIconComponent height={30} width={30}/>
			) : transactionMedium == 2 ? (
				<CardIconComponent />
			) : (
				<ManualDonationIconComponent />
			);

		fullname = data.clientList[0].account.fullname;
	} else {
		transactionImage =
			transactionMedium == 1 ? (
				<YellowBankIconComponent height={30} width={30}/>
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
				paddingVertical: 14,
				borderBottomWidth: 1,
				paddingHorizontal: 6,
				borderColor: theme.colors.gray2,
			}}
			onPress={()=>navigation.navigate(transactionType == 1?"Load Fund Details":transactionType == 2?"Donation Details":transactionType == 3?"Withdrawn Details":"Donation Details",{details:data})}
		>
			<Block middle center>
				{transactionImage}
			</Block>
			<Block
				style={{
					flex: 4,
				}}
			>
				{transactionType == 1 ? (
					<Text style={{ fontSize: 14, fontWeight: "700", width: WIDTH-200}} numberOfLines={1}>
						Fund loaded by {fullname}
					</Text>
				) : (transactionType == 2 || transactionType == 4 || transactionType == 5) ? (
					<>
						<Text style={{ fontSize: 14, fontWeight: "700", width: WIDTH-200}} numberOfLines={1}>
							Donated by {fullname}
						</Text>

						{campaignTitle != undefined && (
							<Text
						style={{ fontSize: 14, fontWeight: "700" , width: WIDTH-200}}
						color={theme.colors.solidGray}
						 numberOfLines={1}
					>
								{campaignTitle}
							</Text>
						)}
					</>
				) : transactionType == 3 ? (
					<Text style={{ fontSize: 14, fontWeight: "700", width: WIDTH-200}} numberOfLines={1}>
						Fund withdrawn by {fullname}
					</Text>
				) : (
					<Text style={{ fontSize: 14, fontWeight: "700", width: WIDTH-200}} numberOfLines={1}>
						Fund donated to {fullname}
					</Text>
				)}
				<Block row center style={{ flex: 0, paddingTop: 4 }}>
					<Text
						style={{ fontSize: 13}}
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
					flex: 1.6,
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
									fontSize: 14,
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
