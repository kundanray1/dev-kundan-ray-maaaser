import React from "react";
import { Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import Button from "./Button";
import { LinearGradient } from "expo-linear-gradient";
import UserIconComponent from "./../assets/icons/userIconComponent";
const WIDTH = Dimensions.get("window").width;

export default ReceiversDetail = ({
	profilePic,
	name,
	clientType,
	...props
}) => {
	return (
		<Block
			row
			style={[
				{
					paddingVertical: 5,
				},
			]}
		>
			<Block
				row
				style={{
					flex: 0.8,
					alignItems: "flex-start",
				}}
			>
				{profilePic == "" ? (
					<UserIconComponent height={"100%"} width={"80%"} />
				) : (
					<Image
						source={{ uri: profilePic }}
						style={{
							height: "100%",
							width: "80%",
							borderRadius: 30,
						}}
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
						width: WIDTH - 200,
					}}
					numberOfLines={1}
				>
					{name}
				</Text>
				<Text
					style={{ fontSize: 15, textTransform: "capitalize" }}
					color={theme.colors.solidGray}
				>
					{clientType === 1 ? "Individual" : "Organization"}
				</Text>
			</Block>
			<Block
				middle
				style={{
					flex: 1.5,
					alignItems: "flex-end",
				}}
			>
				<TouchableOpacity activeOpacity={0.8} {...props}>
					<LinearGradient
						colors={["#068DD3", "#0BB3F3"]}
						style={styles.button}
						start={{ x: 0, y: 1 }}
						end={{ x: 1, y: 0 }}
					>
						<Text
							color={theme.colors.white}
							style={{ fontSize: 12, fontWeight: "700" }}
						>
							Donate
						</Text>
					</LinearGradient>
				</TouchableOpacity>
			</Block>
		</Block>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 2,
		paddingVertical: 4,
		paddingHorizontal: 8,
		alignItems: "center",
	},
});
