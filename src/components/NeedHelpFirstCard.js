import React from "react";
import {
	Dimensions,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block.js";
import Text from "./Text.js";
import PercentageBar from "./PercentageBar.js";
import NumberFormat from "react-number-format";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;


const NeedHelpFirstCard = ({ label,image,collectedAmount,targetAmount,...props }) => {
	const percentage=(collectedAmount*100)/targetAmount;
	return (
		<SafeAreaView style={{ flex: 1 ,marginRight:16}}>
				<Block style={{ flex: 0 }}>
					<ImageBackground
						style={{
							height: HEIGHT / 6,
							width: WIDTH-150,
							justifyContent: "flex-end",
							overflow: "hidden",
							borderRadius:6
						}}
						source={{
							uri: "https://storage.googleapis.com/maaser_resources/7b6029f28c154583af0adc5f3c5f74f9.jpg",
						}}
					>
						<Block
							row
							style={{
								flex: 0,
								paddingVertical: 4,
							}}
						>
							<TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"white",borderRadius:20,paddingHorizontal:4,marginLeft:6,marginBottom:2}}>
								<Text color="#5F6062" style={{fontSize:12}}>2 days left</Text>
							</TouchableOpacity>
						</Block>
					</ImageBackground>
				</Block>
				<Block
					style={{
						flex: 0,
						borderColor: theme.colors.gray2,
						paddingVertical: 12,
					}}
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "700",
							textTransform: "capitalize",
						}}
						color="#3B414B"
					>
						{label}
					</Text>

					<PercentageBar
						height={4}
						backgroundColor={"grey"}
						completedColor={theme.colors.primary2}
						percentage={`${percentage}%`}
					/>
					<Block row style={{ flex: 0 }}>
						<NumberFormat
							value={collectedAmount / 100}
							displayType={"text"}
							thousandSeparator={true}
							prefix={"$"}
							decimalScale={2}
							fixedDecimalScale={true}
							renderText={(formattedValue) => (
								<Text
									color={theme.colors.primary2}
									style={{
										fontSize: 14,
										fontWeight: "700",
										textTransform: "capitalize",
									}}
								>
									{formattedValue}
								</Text>
							)}
						/>

						<NumberFormat
							value={targetAmount / 100}
							displayType={"text"}
							thousandSeparator={true}
							prefix={"$"}
							decimalScale={2}
							fixedDecimalScale={true}
							renderText={(formattedValue) => (
								<Text
									color="#5F6062"
									style={{ fontSize: 14, fontWeight: "700" }}
								>
									{" "}
									raised from {formattedValue}
								</Text>
							)}
						/>
					</Block>
				</Block>
		</SafeAreaView>
	);
};

export default NeedHelpFirstCard;

const styles = StyleSheet.create({
	input: {
		fontSize: 16,
		backgroundColor: "#F0FBFF",
		color: theme.colors.solidGray,
		paddingHorizontal: 14,
		borderRadius: 40,
	},
	amountSection: {
		flex: 1,
		borderRadius: 40,
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 10,
		backgroundColor: "#F0FBFF",
	},
});
