import React from "react";
import { Image, TouchableOpacity } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import UserIconComponent from "./../assets/icons/userIconComponent";
import NumberFormat from "react-number-format";

export default CampaignDonorCard = ({
	profilePic,
	name,
	amount,
	date,
	textColor,
	...props
}) => {
	return (
		<Block
			row
			style={{
				borderBottomWidth: 0.6,
				paddingVertical: 12,
				borderColor: theme.colors.gray2,
			}}
		>
			<Block
				row
				style={{
					alignItems: "flex-start",
				}}
			>
				{profilePic == "" ? (
					<UserIconComponent height={40} width={40} />
				) : (
					<Image
						source={{ uri: profilePic }}
						style={{ height: 40, width: 40, borderRadius: 30 }}
					/>
				)}
			</Block>
			<Block
				style={{
					flex: 5,
				}}
			>
				<Text
					style={{
						fontSize: 18,
						fontWeight: "700",
						textTransform: "capitalize",
					}}
				>
					{name}
				</Text>
				<Text
					style={{ fontSize: 14 }}
					color={theme.colors.solidGray}
				>
					{moment(date).format("DD MMM YYYY")}
				</Text>
			</Block>

			<Block
				middle
				style={{
					alignItems: "flex-end",
				}}
			>
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
			</Block>
		</Block>
	);
};
