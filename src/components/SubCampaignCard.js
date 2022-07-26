import React from "react";
import { Image, TouchableOpacity, StyleSheet,Dimensions } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import Button from "./Button";
import PercentageBar from "./PercentageBar";
import NumberFormat from 'react-number-format';
import { LinearGradient } from "expo-linear-gradient";
import UserIconComponent from "./../assets/icons/userIconComponent";
const WIDTH = Dimensions.get("window").width;

export default SubCampaignCard = ({ profilePic, name, comment,subcampaignid,collectedAmount,targetAmount, ...props }) => {
	const percentage=(collectedAmount*100)/targetAmount;
	return (
		<TouchableOpacity
		activeOpacity={0.8}
			style={[
				{
					flex:1,
					borderBottomWidth: 0.6,
					paddingVertical: 12,
					borderColor: theme.colors.gray2,
				},
			]}
			{...props}
		>
			<Block row>
				<Block style={{ flex: 1}}>
					{profilePic == "" ? (
						<UserIconComponent height={"65%"} width={"70%"} />
					) : (
						<Image
							source={{ uri: profilePic }}
							style={{ height: "65%", width: "70%", borderRadius: 30 }}
						/>
					)}
				</Block>

				<Block style={{ flex: 5 }}>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "700",
							textTransform: "capitalize",
						width:WIDTH- 160}} numberOfLines={1}>
						{name}
					</Text>
					<PercentageBar
						height={6}
						backgroundColor={"grey"}
						completedColor={theme.colors.primary2}
			            percentage={percentage}
					/>
					<Block row style={{ flex: 0 }}>

					<NumberFormat
                    value={collectedAmount/100}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    renderText={formattedValue => <Text 	color={theme.colors.primary2} style={{ fontSize: 14, fontWeight: "700",textTransform: "capitalize",}}>{formattedValue}</Text>} 
                    />

                    <NumberFormat
                    value={targetAmount/100}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    renderText={formattedValue => <Text 	color="#5F6062" style={{ fontSize: 14}}>{" "}raised of {formattedValue}</Text>} 
                    />
					</Block>
				</Block>
			</Block>
		</TouchableOpacity>
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
