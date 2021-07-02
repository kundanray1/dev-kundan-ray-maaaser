import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import Button from "./Button";
import { LinearGradient } from "expo-linear-gradient";
import UserIconComponent from "./../assets/icons/userIconComponent";


export default ReceiversDetail = ({ profilePic, name,clientType, ...props }) => {
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
					flex: 1,
					alignItems: "flex-start",
				}}
			>
				{profilePic == "" ? (
                    <UserIconComponent height={45} width={45}/>
					
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
					justifyContent: "center",
				}}
			>
				<Text style={{ fontSize: 18, fontWeight: "700",textTransform:"capitalize" }}>{name}</Text>
				<Text
					style={{ fontSize: 14, fontWeight: "700" }}
					color="#5F6062"
				>
					{clientType === 1 ? "Individual" : "Organization"}
				</Text>
			</Block>
			<Block middle>
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
