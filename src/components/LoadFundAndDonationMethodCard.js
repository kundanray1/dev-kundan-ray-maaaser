import React from "react";
import { Image, TouchableOpacity } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
export default LoadFundAndDonationMethodCard = ({ image, label, ...props }) => {
	return (
		<Block
			activeOpacity={0.8}
			style={{
				paddingHorizontal: 16,
				marginVertical: 4,
			}}
		>
			<Block
				row
				style={{
					alignItems:"center",
					paddingVertical: 6,
					paddingHorizontal: 20,
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
						source={image}
						style={{ height: 45, width: 45, marginRight: 10 }}
					/>
				</Block>
				<Block
					style={{
						flex: 4,
						marginLeft: 10,
						justifyContent: "center",
					}}
				>
					<Text style={{ fontSize: 18, fontWeight: "700" }}>
						{label}
					</Text>
				</Block>
				<TouchableOpacity
					activeOpacity={0.8}
					style={{
						flex: 1,
						alignItems: "flex-end",
						justifyContent:"center",
					}}
					{...props}
				>
					<Image
						source={require("../assets/icons/arrowRight.png")}
						style={{ height: 20, width: 20}}
					/>
				</TouchableOpacity>
			</Block>
		</Block>
	);
};
