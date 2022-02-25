import React from "react";
import {
	Dimensions,
	ImageBackground,
	SafeAreaView,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import * as theme from "constants/theme.js";
import { Block, Text, PercentageBar } from "components/Index.js";
import NumberFormat from "react-number-format";
import { Video } from "expo-av";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const NeedHelpFirstCard = ({
	label,
	image,
	collectedAmount,
	targetAmount,
	...props
}) => {
	const percentage = (collectedAmount * 100) / targetAmount;
	return (
		<SafeAreaView style={styles.safeAreaContainer}>
			<TouchableOpacity activeOpacity={0.8} {...props}>
				{image.match(/\.(jpeg|jpg|gif|png|raw|gif)$/) != null ? (
					<Block style={{ flex: 0 }}>
						<ImageBackground
							style={styles.imageVideoBackgroundContainer}
							source={{
								uri: image,
							}}
						></ImageBackground>
					</Block>
				) : (
					<Video
						style={styles.imageVideoBackgroundContainer}
						source={{
							uri: image,
						}}
						useNativeControls
						resizeMode="contain"
						isLooping
					/>
				)}
				<Block style={styles.contentContainer}>
					<Text style={styles.label} numberOfLines={1}>
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
									style={[
										styles.amount,
										{
											color: theme.colors.primary2,
										},
									]}
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
									style={[
										styles.amount,
										{
											color: "#5F6062",
										},
									]}
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
export const styles = StyleSheet.create({
	safeAreaContainer: { flex: 1, marginRight: 16 },
	imageVideoBackgroundContainer: {
		height: HEIGHT / 6,
		width: WIDTH - 150,
		justifyContent: "flex-end",
		overflow: "hidden",
	},
	contentContainer: {
		flex: 0,
		borderColor: theme.colors.gray2,
		paddingVertical: 12,
	},
	label: {
		fontSize: 15,
		fontWeight: "700",
		textTransform: "capitalize",
		width: WIDTH - 180,
		color: "#3B414B",
	},
	amount: {
		fontSize: 13,
	},
});
