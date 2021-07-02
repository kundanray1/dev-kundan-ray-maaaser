import React from "react";
import { Image, TouchableOpacity } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserIconComponent from "./../assets/icons/userIconComponent";
import NumberFormat from "react-number-format";

// import YellowBankIconComponent from "./../assets/icons/YellowBankIconComponent";

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
				paddingVertical: 16,
				borderBottomWidth: 1,
				paddingHorizontal: 6,
				borderColor: theme.colors.gray2,
			}}
		>
			<Block center middle>
			 {profilePic == "" ? (
          <UserIconComponent height={45} width={45} />
        ) : (
          <Image
            source={{ uri: profilePic }}
            style={{ height: 45, width: 45, borderRadius: 30 }}
          />
        )}
			</Block>
			<Block
				style={{
					flex: 4,
				}}
			>
					<Text style={{ fontSize: 16, fontWeight: "700" }}>
						{name}
					</Text>
			
				<Block row center style={{ flex: 0, paddingTop: 8 }}>
					<Text
						style={{ fontSize: 14, fontWeight: "700" }}
						color={theme.colors.solidGray}
					>
						{moment(date).format("DD MMM YYYY")} at{" "}
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
						value={amount/100}
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
		</Block>
	);
};
