import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import Button from "./Button";
import { LinearGradient } from "expo-linear-gradient";
import UserIconComponent from "./../assets/icons/userIconComponent";

export default CampaignCommentCard = ({ profilePic, name,comment, ...props }) => {
	return (
		<Block
			style={[
				{
					borderBottomWidth:1,
					paddingVertical:16,
					borderColor:theme.colors.gray2,
				},
			]}
		>

			<Block
			row
			center
			>
				{profilePic == "" ? (
                    <UserIconComponent height={45} width={45}/>
					
				) : (
					<Image
						source={{ uri: profilePic }}
						style={{ height: 45, width: 45, borderRadius: 30 }}
					/>
				)}
				
				<Text style={{ fontSize: 18, fontWeight: "700",textTransform:"capitalize",marginLeft:10 }}>{name}</Text>
			</Block>

			<Block
				style={{
					flex:0
				}}
			>
				<Text style={{ fontSize: 16,marginLeft:55,color:"#5F6062" }}>{comment}</Text>
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
