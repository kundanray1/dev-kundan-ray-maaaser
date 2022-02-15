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
import { Video, AVPlaybackStatus } from "expo-av";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const NeedHelpFirstCard = ({ label,image,collectedAmount,targetAmount,...props }) => {
	const percentage=(collectedAmount*100)/targetAmount;
	return (
		<SafeAreaView style={{ flex: 1 ,margin:5}}>
		<TouchableOpacity activeOpacity={0.8} {...props}>
				{
					image.match(/\.(jpeg|jpg|gif|png|raw|gif)$/)!= null ?

				<Block style={{ flex: 0 }}>
					<ImageBackground
						style={{
							height: HEIGHT / 6,
							width: '100%',
							justifyContent: "flex-end",
							overflow: "hidden",
						}}
						source={{
							uri: image
						}}
					>
					</ImageBackground>
				</Block>

				:
				<Video
					style={{
							height: HEIGHT / 6,
							width: WIDTH-150,
							justifyContent: "flex-end",
							overflow: "hidden",
					}}
					source={{
						uri: image,
					}}
					useNativeControls
					resizeMode="contain"
					isLooping
				/>
			}
				<Block
					style={{
						flex: 0,
						borderColor: theme.colors.gray2,
						paddingVertical: 12,
					}}
				>
					<Text
						style={{
							fontSize: 15,
							fontWeight: "700",
							textTransform: "capitalize",
							width: WIDTH-180
						}}
						numberOfLines={1}
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
										fontSize: 13,
										textTransform: "capitalize",
										fontWeight:"700"
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
									style={{ fontSize: 13}}
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
