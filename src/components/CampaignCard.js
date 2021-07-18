import React, { useState } from "react";
import {
	SafeAreaView,
	Modal,
	View,
	Image,
	TouchableOpacity,
	Pressable,
	Dimensions,
	StyleSheet,
	ImageBackground,
	Alert,
	TouchableWithoutFeedback,
} from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import HorizontalDotsIconComponent from "./../assets/icons/HorizontalDotsIconComponent.js";
import CampaignsEditIconComponent from "./../assets/icons/campaignEditIconComponent.js";
import PercentageBar from "./PercentageBar.js";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { campaignsEditStart } from "./../screens/Campaigns/actions";
import { subCampaignsEditStart } from "./../screens/Campaigns/SubCampaigns/actions";
import CampaignProto from "./../protos/campaign_pb";
import moment from "moment";
import TimeRemainingIconComponent from "./../assets/icons/TimeRemainingIconComponent";
import { campaignId } from "./../screens/Campaigns/actions";
import { subCampaignId } from "./../screens/Campaigns/CampaignSubCampaign/actions";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

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
	const [editModalVisible, setEditModalVisible] = useState(false);
	const handleCloseConfirm = () => {
		if (mycampaign == "subcampaign") {
			const updateData = new CampaignProto.SubCampaign();
			updateData.setSubcampaignid(campaignDetailData.subcampaignid);
			updateData.setSubcampaignstatus(2);
			dispatch(subCampaignsEditStart(updateData));
		} else {
			const updateData = new CampaignProto.Campaign();
			updateData.setCampaignid(campaignDetailData.campaignid);
			updateData.setCampaignstatus(2);
			dispatch(campaignsEditStart(updateData));
		}
	};

	const handleDisableConfirm = () => {
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
		if (mycampaign == "subcampaign") {
			dispatch(subCampaignId(campaignDetailData.subcampaignid));
			navigation.navigate("Start a sub campaign", {
				campaignDetailData: campaignDetailData,
			});
		} else {
			dispatch(campaignId(campaignDetailData.campaignid));
			navigation.navigate("Campaign Details", {
				screen: "Campaign Details",
				params: { editEnable: true },
			});
		}
	};
	const EditModal = () => (
		<SafeAreaView>
			<Modal
				visible={editModalVisible}
				transparent={true}
				animationType="fade"
				statusBarTranslucent={true}
				onRequestClose={() => setEditModalVisible(false)}
			>
				<TouchableOpacity
					style={styles.container}
					activeOpacity={1}
					onPressOut={() => setEditModalVisible(false)}
				>
					<TouchableWithoutFeedback>
						<View
							style={[
								styles.modal,
								{ width: 100, marginTop: HEIGHT / 5 },
							]}
						>
							<TouchableOpacity
								activeOpacity={0.8}
								style={{
									paddingVertical: 12,
								}}
								onPress={() => {
									DisableWarning();
									setEditModalVisible(false);
								}}
							>
								<Text
									style={{
										color: "#5F6062",
										fontWeight: "700",
										fontSize: 16,
									}}
								>
									Disable
								</Text>
							</TouchableOpacity>
							<Block
								style={{
									flex: 0,
									borderBottomWidth: 1,
									borderColor: "#F8F8F8",
								}}
							/>
							<TouchableOpacity
								activeOpacity={0.8}
								style={{ paddingVertical: 12 }}
								onPress={() => {
									CloseWarning();
									setEditModalVisible(false);
								}}
							>
								<Text
									style={{
										color: "#5F6062",
										fontWeight: "700",
										fontSize: 16,
									}}
								>
									Close
								</Text>
							</TouchableOpacity>
						</View>
					</TouchableWithoutFeedback>
				</TouchableOpacity>
			</Modal>
		</SafeAreaView>
	);

	const CloseWarning = () => {
		Alert.alert(
			"Close Campaign",
			"Are you sure you want to close this campaign?",
			[
				{
					text: "Cancel",
					style: {
						textTransform: "capitalize",
						color: theme.colors.primary2,
					},
				},
				{ text: "Confirm", onPress: () => handleCloseConfirm() },
			],
			{
				cancelable: true,
			}
		);
	};

	const DisableWarning = () => {
		Alert.alert(
			"Disable Campaign",
			"Are you sure you want to disable this campaign?",
			[
				{
					text: "Cancel",
					style: {
						textTransform: "capitalize",
						color: theme.colors.primary2,
					},
				},
				{ text: "Confirm", onPress: () => handleDisableConfirm() },
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
					shadowRadius: 1,
					elevation: 2.5,
					borderRadius: 1,
				}}
				{...props}
			>
				<Block style={{ flex: 0 }}>
					<ImageBackground
						style={{
							height: HEIGHT / 3.5,
							width: "100%",
							borderRadius: 6,
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
									<CampaignsEditIconComponent
										style={{
											marginRight: 10,
											marginTop: 10,
										}}
									/>
								</TouchableOpacity>
								{campaignstatus !== 2 && (
									<TouchableOpacity
										activeOpacity={0.8}
										onPress={() =>
											setEditModalVisible(true)
										}
									>
										<HorizontalDotsIconComponent
											style={{
												marginRight: 10,
												marginTop: 10,
											}}
										/>
									</TouchableOpacity>
								)}
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
						paddingLeft: 10,
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
							<Block style={{ flex: 0, paddingRight: 10 }}>
								<PercentageBar
									height={4}
									backgroundColor={"grey"}
									completedColor={theme.colors.primary2}
									percentage={
										(collectedAmount * 100) / targetAmount
									}
								/>
							</Block>
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

					<Block
						row
						style={{
							flex: 0,
							overflow: "hidden",
							paddingTop: 12,
						}}
					>
						<Block
							row
							style={{
								paddingBottom: 16,
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
									{moment(date).format("DD MMM, YYYY")}
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
						</Block>

						<Block>
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
											backgroundColor: "#DE4C3C",
											paddingVertical: 6,
											borderTopLeftRadius: 6,
											paddingHorizontal: 36,
										}}
										color="white"
									>
										Closed
									</Text>
								) : (
									<Text
										style={{
											fontSize: 14,
											fontWeight: "700",
											textTransform: "capitalize",
											backgroundColor: "#C4C4C4",
											paddingVertical: 6,
											borderTopLeftRadius: 6,
											paddingHorizontal: 36,
										}}
										color="white"
									>
										Disabled
									</Text>
								)}
							</Block>
						</Block>
					</Block>
				</Block>
			</TouchableOpacity>
			{EditModal()}
		</Block>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "flex-end",
		// justifyContent: "center",
		paddingHorizontal: 24,
		// backgroundColor: "rgba(52, 52, 52, 0.8)",
	},
	modal: {
		borderRadius: 2,
		borderColor: theme.colors.gray,
		backgroundColor: theme.colors.white,
		paddingHorizontal: 12,
	},
});
