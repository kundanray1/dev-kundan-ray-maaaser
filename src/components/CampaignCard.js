import React from "react";
import {
	Image,
	TouchableOpacity,
	Pressable,
	Dimensions,
	ImageBackground,
	Alert,
} from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import CampaignsEditIconComponent from "./../assets/icons/campaignEditIconComponent.js";
import CampaignsDeleteIconComponent from "./../assets/icons/campaignDeleteIconComponent.js";
import PercentageBar from "./PercentageBar.js";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { campaignsEditStart } from "./../screens/Campaigns/actions";
import { subCampaignsEditStart } from "./../screens/Campaigns/SubCampaigns/actions";
import CampaignProto from "./../protos/campaign_pb";

const HEIGHT = Dimensions.get("window").height;
export default CampaignCard = ({
	label,
	navigation,
	image,
	mycampaign,
	campaignDetailData,
	targetAmount,
	collectedAmount,
	campaignstatus,
	...props
}) => {
	const dispatch = useDispatch();

	const handleDeleteConfirm = () => {
		console.log(campaignstatus);
		if(mycampaign == "subcampaign"){
		const updateData = new CampaignProto.SubCampaign();
		updateData.setSubcampaignid(campaignDetailData.subcampaignid);
		updateData.setSubcampaignstatus(3);
		dispatch(subCampaignsEditStart(updateData));
		}else{
		const updateData = new CampaignProto.Campaign();
		updateData.setCampaignid(campaignDetailData.campaignid);
		updateData.setCampaignstatus(3);
		dispatch(campaignsEditStart(updateData));
		}
	};

	const handleEdit = () => {
		navigation.navigate("Link New Account", {
			campaignDetailData: campaignDetailData,
		});
	};
	const handleDelete = () => {
		Alert.alert(
			"Campaign Deletion",
			"Are you sure you want to delete this campaign?",
			[
				{
					text: "Cancel",
					style: {
						textTransform: "capitalize",
						color: theme.colors.primary2,
					},
				},
				{ text: "Confirm", onPress: () => handleDeleteConfirm() },
			],
			{
				cancelable: true,
			}
		);
	};

	return (
		<TouchableOpacity
			activeOpacity={1}
			style={{ paddingHorizontal: 16, paddingVertical: 6 }}
			{...props}
		>
			<Block style={{ flex: 0 }}>
				<ImageBackground
					style={{
						height: HEIGHT / 4,
						width: "100%",
					}}
					source={{ uri: image }}
				>
					{mycampaign == "mycampaign" || mycampaign == "subcampaign" ? (
							<Block row style={{justifyContent:"flex-end"}}>
								<TouchableOpacity
									activeOpacity={0.8}
									onPress={() => handleEdit()}
								>
									<CampaignsEditIconComponent
										style={{
											marginRight: 10,
											marginTop: 10,
										}}
									/>
								</TouchableOpacity>
								<TouchableOpacity
									activeOpacity={0.8}
									onPress={() => handleDelete()}
								>
									<CampaignsDeleteIconComponent
										style={{
											marginRight: 10,
											marginTop: 10,
										}}
									/>
								</TouchableOpacity>
							</Block>
					) : (
						<Block style={{ flex: 0 }} />
					)}

					{campaignstatus != undefined && (
						<Block
							style={{
								justifyContent: "flex-end",
								alignItems: "flex-end",
							}}
						>
							{campaignstatus == 1 ? (
								<Text
									style={{
										fontSize: 14,
										fontWeight: "700",
										textTransform: "capitalize",
										backgroundColor: theme.colors.green,
										paddingHorizontal: 6,
										paddingVertical: 2,
										borderRadius:30,
										marginRight:8,
										marginBottom:8
									}}
									color="white"
								>
									Open
								</Text>
							) : campaignstatus == 2 ? (
								<Text
									style={{
										fontSize: 14,
										fontWeight: "700",
										textTransform: "capitalize",
										backgroundColor: "white",
										paddingHorizontal: 6,
										paddingVertical: 2,
										borderRadius:30,
										marginRight:8,
										marginBottom:8

									}}
									color="#3B414B"
								>
									Close
								</Text>
							) : (
								<Text
									style={{
										fontSize: 14,
										fontWeight: "700",
										textTransform: "capitalize",
										backgroundColor: "red",
										paddingHorizontal: 6,
										paddingVertical: 2,
										borderRadius:30,
										marginRight:8,
										marginBottom:8
									}}
									color="white"
								>
									Disabled
								</Text>
							)}
						</Block>
					)}
				</ImageBackground>
			</Block>

			<Block
				style={{
					flex: 0,
					borderBottomWidth: 0.5,
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
				{targetAmount != undefined && collectedAmount != undefined && (
					<>
						<PercentageBar
							height={4}
							backgroundColor={"grey"}
							completedColor={theme.colors.primary2}
							percentage={
								(collectedAmount * 100) / targetAmount
							}
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
				)}
			</Block>
		</TouchableOpacity>
	);
};
