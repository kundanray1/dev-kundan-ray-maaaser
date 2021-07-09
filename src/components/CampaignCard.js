import React from "react";
import {
	Image,
	TouchableOpacity,
	Pressable,
	Dimensions,
	ImageBackground,
} from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import CampaignsEditIconComponent from "./../assets/icons/campaignEditIconComponent.js";
import CampaignsDeleteIconComponent from "./../assets/icons/campaignDeleteIconComponent.js";
import PercentageBar from "./PercentageBar.js";
import NumberFormat from "react-number-format";

const HEIGHT = Dimensions.get("window").height;
export default CampaignCard = ({
	label,
	image,
	targetAmount,
	collectedAmount,
	...props
}) => {
	
	return (
		<TouchableOpacity
			activeOpacity={1}
			style={{ paddingHorizontal: 16 }}
			{...props}
		>
			<Block style={{ flex: 0 }}>
				<ImageBackground
					style={{
						height: HEIGHT / 4,
						width: "100%",
						alignItems: "flex-end",
						borderRadius: 6,
						overflow: "hidden",
					}}
					source={{ uri: image }}
				>
					<Block
						row
						style={{
							flex: 0,

							paddingVertical: 4,
						}}
					>
						<TouchableOpacity activeOpacity={0.8}>
							<CampaignsEditIconComponent
								style={{ marginRight: 10, marginTop: 10 }}
							/>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={0.8}>
							<CampaignsDeleteIconComponent
								style={{ marginRight: 10, marginTop: 10 }}
							/>
						</TouchableOpacity>
					</Block>
				</ImageBackground>
			</Block>

			<Block
				style={{
					flex: 0,
					borderBottomWidth: 1,
					borderColor: theme.colors.gray2,
					paddingVertical: 8,
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
				{targetAmount != undefined && collectedAmount != undefined ? (
					<>
						<PercentageBar
							height={4}
							backgroundColor={"grey"}
							completedColor={theme.colors.primary2}
							percentage={`${(collectedAmount * 100) / targetAmount}%`}
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
										style={{
											fontSize: 14,
											fontWeight: "700",
										}}
									>
										{" "}
										raised from {formattedValue}
									</Text>
								)}
							/>
						</Block>
					</>
				) : (
					<Block style={{ flex: 0 }} />
				)}
			</Block>
		</TouchableOpacity>
	);
};
