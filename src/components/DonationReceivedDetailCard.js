import React from "react";
import { Image, TouchableOpacity, Dimensions } from "react-native";
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

export default DonationReceivedDetailCard = ({
	profilePic,
	data,
	fullname,
	amount,
	date,
	textColor,
	...props
}) => {
	let campaignSubCampaignTitle;
	//load fund transactionType
	if (data.campaign !== undefined) {
		campaignSubCampaignTitle = data.campaign.title;
	} else if (data.subcampaign !== undefined) {
		campaignSubCampaignTitle = data.subcampaign.campaign.title;
	} else {
		campaignSubCampaignTitle = "Not available";
	}
	return (
		<Block
			style={{
				flexDirection: "row",
				paddingVertical: 14,
				borderBottomWidth: 1,
				paddingHorizontal: 6,
				borderColor: theme.colors.gray2,
			}}
		>
			<Block middle center>
				{profilePic == "" ? (
					<UserIconComponent height={"100%"} width={"70%"} />
				) : (
					<Image
						source={{ uri: profilePic }}
						style={{
							height: 40,
							width: 40,
							borderRadius: 30,
						}}
					/>
				)}
			</Block>
			<Block
				style={{
					flex: 4,
				}}
			>
				<Text
					style={{
						fontSize: 14,
						fontWeight: "700",
						width: WIDTH - 200,
					}}
					numberOfLines={1}
				>
					Fund donated by {fullname}
				</Text>

				{(data.campaign !== undefined ||
					data.subcampaign !== undefined) && (
					<Text
						style={{
							fontSize: 14,
							fontWeight: "700",
							width: WIDTH - 200,
						}}
						color={theme.colors.solidGray}
						numberOfLines={1}
					>
						{campaignSubCampaignTitle}
					</Text>
				)}
				<Block row center style={{ flex: 0, paddingTop: 4 }}>
					<Text
						style={{ fontSize: 13 }}
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
				<Block style={{ marginVertical: 2 }}>
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
				</Block>
			</Block>
		</Block>
	);
};
