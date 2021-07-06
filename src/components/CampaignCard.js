import React from "react";
import { Image, TouchableOpacity, Pressable } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import moment from "moment";
import ArrowRightIconComponent from "../assets/icons/arrowRightIconComponent";

export default CampaignCard = ({ label, image, ...props }) => {
	return (
		<Block style={{paddingHorizontal:16}}>
			<Block style={{flex:0}}>
				{/*{image !== "" ? (
					<Image
						source={{ uri: image }}
						style={{ height: 45, width: 45, borderRadius: 30 }}
					/>
				) : (
					<ArrowRightIconComponent height={45} width={45} />
				)}*/}
				<Image
						source={image}
						style={{ height: 200, width: "100%", borderRadius: 30 }}
					/>
			</Block>

			<Block style={{flex:0,borderBottomWidth:1,borderColor: theme.colors.gray2,paddingVertical:8}}>
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
		</Block>
	);
};
