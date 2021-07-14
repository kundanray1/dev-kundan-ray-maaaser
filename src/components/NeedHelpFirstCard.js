import React from "react";
import {
	Dimensions,
	ImageBackground,
	SafeAreaView,
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
		<TouchableOpacity activeOpacity={0.8} {...props}>
				<Block style={{ flex: 0 }}>
					<ImageBackground
						style={{
							height: HEIGHT / 6,
							width: WIDTH-150,
							justifyContent: "flex-end",
							overflow: "hidden",
							// borderRadius:6
						}}
						source={{
							uri: image
						}}
					>
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
						percentage={percentage}
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
									raised of {formattedValue}
								</Text>
							)}
						/>
					</Block>
				</Block>
				</TouchableOpacity>
		</SafeAreaView>
	);
};

export default NeedHelpFirstCard;
