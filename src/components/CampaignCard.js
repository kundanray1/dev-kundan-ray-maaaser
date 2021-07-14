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
import HorizontalDotsIconComponent from "./../assets/icons/HorizontalDotsIconComponent.js";
import CampaignsDeleteIconComponent from "./../assets/icons/campaignDeleteIconComponent.js";
import PercentageBar from "./PercentageBar.js";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { campaignsEditStart } from "./../screens/Campaigns/actions";
import { subCampaignsEditStart } from "./../screens/Campaigns/SubCampaigns/actions";
import CampaignProto from "./../protos/campaign_pb";
import moment from "moment";
import TimeRemainingIconComponent from "./../assets/icons/TimeRemainingIconComponent";

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
	date,
	...props
}) => {
	const dispatch = useDispatch();

	const handleDeleteConfirm = () => {
		console.log(campaignstatus);
		if (mycampaign == "subcampaign") {
			const updateData = new CampaignProto.SubCampaign();
			updateData.setSubcampaignid(campaignDetailData.subcampaignid);
			updateData.setSubcampaignstatus(3);
			dispatch(subCampaignsEditStart(updateData));
		} else {
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
			"Campaign Disable",
			"Are you sure you want to disable this campaign?",
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
		<Block style={{ flex: 0, paddingHorizontal: 16 }}>
			<TouchableOpacity
				activeOpacity={1}
				style={{
					shadowRadius: 3,
					elevation: 3,
					borderRadius:6
				}}
				{...props}
			>
				<Block style={{ flex: 0 }}>
					<ImageBackground
						style={{
							height: HEIGHT / 4,
							width: "100%",
					      borderRadius:6

						}}
						source={{ uri: image }}
					>
						{mycampaign == "mycampaign" ||
						mycampaign == "subcampaign" ? (
							<Block row style={{ justifyContent: "flex-end" }}>
								<TouchableOpacity
									activeOpacity={0.8}
									onPress={() => handleEdit()}
								>
									<HorizontalDotsIconComponent
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
					</ImageBackground>
				</Block>

				<Block
					style={{
						flex: 0,
						borderColor: theme.colors.gray2,
						paddingTop: 8,
						paddingBottom: 16,
						paddingHorizontal: 10,
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
											raised of {formattedValue}
										</Text>
									)}
								/>
							</Block>
						</>
					)}
					{date != undefined && (
						<Block
							row
							style={{
								flex: 0,
								overflow: "hidden",
								paddingTop: 12,
							}}
						>
							<TimeRemainingIconComponent
								height={38}
								width={38}
							/>
							<Block column>
								<Text
									color="#5F6062"
									style={{
										fontSize: 18,
										fontWeight: "700",
										textTransform: "capitalize",
										marginLeft: 10,
									}}
								>
									{moment(date).format("DD MMM YYYY")}
								</Text>
								<Text
									style={{
										fontSize: 16,
										marginLeft: 10,
										color: "#5F6062",
									}}
								>
									Created date
								</Text>
							</Block>
							{campaignstatus != undefined && (
								<Block
									style={{
										justifyContent: "flex-end",
										alignItems: "flex-end",
									}}
								>
									{campaignstatus == 1 ? (
										<Block style={{ flex: 0 }} />
									) : campaignstatus == 2 ? (
										<Text
											style={{
												fontSize: 14,
												fontWeight: "700",
												textTransform: "capitalize",
												backgroundColor: "red",
												paddingHorizontal: 6,
												paddingVertical: 2,
												borderRadius: 30,
												marginRight: 8,
												marginBottom: 8,
											}}
											color="white"
										>
											Close
										</Text>
									) : (
										<Text
											style={{
												fontSize: 14,
												fontWeight: "700",
												textTransform: "capitalize",
												backgroundColor: "#C4C4C4",
												paddingHorizontal: 6,
												paddingVertical: 2,
												borderRadius: 30,
												marginRight: 8,
												marginBottom: 8,
											}}
											color="white"
										>
											Disabled
										</Text>
									)}
								</Block>
							)}
						</Block>
					)}
				</Block>
			</TouchableOpacity>
		</Block>
	);
};
