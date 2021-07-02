import React from "react";
import { Image, TouchableOpacity, Pressable } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import moment from "moment";
import ArrowRightIconComponent from "../assets/icons/arrowRightIconComponent";

export default LinkedAccountsAndLinkedCard = ({
	label,
	accountNo,
	date,
	iconComponent,
	...props
}) => {
	return (
			<Block
				row
				style={{
					alignItems:"center",
					paddingVertical: 12,
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
				{iconComponent}
				</Block>
				<Block
					style={{
						flex: 4,
						marginLeft: 10,
						justifyContent: "center",
					}}
				>
					{label ? (
						<>
							<Text
								style={{
									fontSize: 16,
									fontWeight: "700",
									textTransform: "capitalize",
								}}
							>
								{label}
							</Text>
							<Text
								style={{ fontSize: 12, fontWeight: "700" }}
								color={theme.colors.solidGray}
							>
								{accountNo}
							</Text>
						</>
					) : (
						<>
							<Text
								style={{
									fontSize: 16,
									fontWeight: "700",
									textTransform: "capitalize",
								}}
							>
								**** **** **** {accountNo}
							</Text>
							<Text
								style={{ fontSize: 12, fontWeight: "700" }}
								color={theme.colors.solidGray}
							>

							Expires {moment(date).format('MM/YYYY')}
							</Text>
						</>
					)}
				</Block>
				<TouchableOpacity
					activeOpacity={0.8}
					style={{
						flex: 1,
						alignItems: "flex-end",
						justifyContent: "center",
					}}
					{...props}
				>
					
					<ArrowRightIconComponent/>
				</TouchableOpacity>
			</Block>
	);
};
