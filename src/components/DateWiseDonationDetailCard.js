import React from "react";
import { Image, TouchableOpacity,Dimensions } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserIconComponent from "./../assets/icons/userIconComponent";
import NumberFormat from "react-number-format";

// import YellowBankIconComponent from "./../assets/icons/YellowBankIconComponent";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
export default DateWiseDonationDetailCard = ({
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
				paddingVertical: 12,
				borderBottomWidth: 1,
				borderColor: "#F0EDF1",
			}}
		>
			<Block
				row
				style={{
					alignItems: "flex-start",
					flex:0.8,
				}}
			>
				{profilePic == "" ? (
					<UserIconComponent height={"100%"} width={"80%"} />
				) : (
					<Image
						source={{ uri: profilePic }}
						style={{height: "100%", width: "80%", borderRadius: 30 }}
					/>
				)}
			</Block>
			<Block
				style={{
					flex: 3.5,
				}}
			>
				<Text
					style={{
						fontSize: 16,
						fontWeight: "700",
						textTransform: "capitalize",
					 width: 220}} numberOfLines={1}>
					{name}
				</Text>
				<Text style={{ fontSize: 15 }} color={theme.colors.solidGray}>
					{moment(date).format("DD MMM, YYYY")} at{" "}
					{moment(date).format("hh:mm A")}
				</Text>
			</Block>
			<Block
				middle
				style={{
					flex: 1.5,
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
