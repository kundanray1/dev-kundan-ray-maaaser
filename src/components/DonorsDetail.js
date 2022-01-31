import React from "react";
import { Image, TouchableOpacity, StyleSheet,Dimensions } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import Button from "./Button";
import UserIconComponent from "./../assets/icons/userIconComponent";
const WIDTH = Dimensions.get("window").width;

export default DonorsDetail = ({ profilePic, name, clientType, ...props }) => {
	return (
		<Block
			row
			style={[
				{
					paddingVertical: 5,
					borderRadius: 5,
					backgroundColor: theme.colors.white,
				},
			]}
		>
				<Block
				row
				style={{
					flex:1,
					alignItems: "flex-start",
				}}
			>
				{profilePic == "" ? (
					<UserIconComponent height={"100%"} width={"70%"} />
				) : (
					<Image
						source={{ uri: profilePic }}
						style={{ height:"100%", width:"70%", borderRadius: 30 }}
					/>
				)}
			</Block>
			<Block
				style={{
					flex: 6,
				}}
			>
				<Text
					style={{
						fontSize: 14,
						fontWeight: "700",
						textTransform: "capitalize",
					 width: WIDTH-200,
          }} numberOfLines={1}>
					{name}
				</Text>
				<Text
					style={{ fontSize: 13, textTransform: "capitalize" }}
					color={theme.colors.solidGray}
				>
					{clientType === 1 ? "Individual" : "Organization"}
				</Text>
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
