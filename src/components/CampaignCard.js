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

const HEIGHT = Dimensions.get("window").height;
export default CampaignCard = ({ label, image,routeCampaignData, ...props }) => {
	return (
		<TouchableOpacity activeOpacity={1} style={{ paddingHorizontal: 16 }} {...props}>
			<Block style={{ flex: 0 }}>
				<ImageBackground
					style={{
						height: HEIGHT / 4,
						width: "100%",
						alignItems: "flex-end",
						borderRadius:6,
						overflow:"hidden"
					}}
					source={{ uri: "https://storage.googleapis.com/maaser_resources/7b6029f28c154583af0adc5f3c5f74f9.jpg" }}
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
			</Block>
		</TouchableOpacity>
	);
};
