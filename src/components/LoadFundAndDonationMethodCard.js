 import React from "react";
import { TouchableOpacity,Image } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import ArrowRightIconComponent from "../assets/icons/arrowRightIconComponent";

export default LoadFundAndDonationMethodCard = ({ iconComponent, label, ...props }) => {
	return (
		<TouchableOpacity
			activeOpacity={1}
			style={{
				paddingHorizontal: 16,
				marginVertical: 4,
			}}
			{...props}
		>
			<Block
				row
				style={{
					alignItems:"center",
					paddingVertical: 12,
					paddingHorizontal: 20,
					borderRadius: 3,
					shadowRadius: 3,
					elevation: 3,
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
				{iconComponent}
				</Block>
				<Block
					style={{
						flex: 4,
						marginLeft: 10,
						justifyContent: "center",
					}}
				>
					<Text style={{ fontSize: 16, fontWeight: "700" }}>
						{label}
					</Text>
				</Block>
				<Block
					style={{
						alignItems: "flex-end",
						justifyContent:"center",
					}}
				>
					<ArrowRightIconComponent/>
				</Block>
			</Block>
		</TouchableOpacity>
	);
};
