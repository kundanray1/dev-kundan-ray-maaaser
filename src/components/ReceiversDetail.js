import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import Button from "./Button";
import { LinearGradient } from "expo-linear-gradient";

export default ReceiversDetail = ({ profilePic, name,...props }) => {
	return (
			<Block
				row
				style={[{
					paddingVertical: 5,
					borderRadius: 5,
					backgroundColor: theme.colors.white,
				}]}
				
			>
				<Block
					row
					style={{
						flex: 1,
						alignItems: "flex-start",
					}}
				>
					<Image
						source={profilePic}
						style={{ height: 40, width: 40, marginRight: 10 }}
					/>
				</Block>
				<Block
					style={{
						flex: 4,
						justifyContent: "center",
					}}
				>
					<Text style={{ fontSize: 18, fontWeight: "700" }}>
						{name}
					</Text>
				</Block>
				<Block
					middle
				>
					<TouchableOpacity
					    activeOpacity={0.8}
						{...props}
					>
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
