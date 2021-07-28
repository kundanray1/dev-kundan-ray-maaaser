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
import PinLocationIconComponent from "./../assets/icons/PinLocationIconComponent";
import { campaignId } from "./../screens/Campaigns/actions";
import { subCampaignId } from "./../screens/Campaigns/CampaignSubCampaign/actions";
import getCountryISO2 from "country-iso-3-to-2";
import country  from "../constants/country.json";

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
	countryCode,
	...props
}) => {
	const dispatch = useDispatch();
	const [editModalVisible, setEditModalVisible] = useState(false);
	const countryName = country.find(item => item.code == getCountryISO2(countryCode));

	const handleOpenConfirm = () => {
		if (mycampaign == "subcampaign") {
			const updateData = new CampaignProto.SubCampaign();
			updateData.setSubcampaignid(campaignDetailData.subcampaignid);
			updateData.setSubcampaignstatus(1);
			dispatch(subCampaignsEditStart(updateData));
		} else {
			const updateData = new CampaignProto.Campaign();
			updateData.setCampaignid(campaignDetailData.campaignid);
			updateData.setCampaignstatus(1);
			dispatch(campaignsEditStart(updateData));
		}
	};

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
	const ConfirmationMessage = () => (
		<SafeAreaView>
			<Modal
				visible={editModalVisible}
				transparent={true}
				animationType="slide"
				statusBarTranslucent={true}
				onRequestClose={() => setEditModalVisible(!editModalVisible)}
			>
				<TouchableOpacity
					style={styles.container}
					activeOpacity={1}
					onPressOut={() => setEditModalVisible(!editModalVisible)}
				>
					<TouchableWithoutFeedback>
						<View
							style={[
								styles.modal,
								{ width: "100%", paddingHorizontal: 18 },
							]}
						>
							<Block
								style={{
									flex: 0,
									alignItems: "center",
									paddingVertical: 10,
								}}
							>
								<Block
									style={{
										flex: 0,
										backgroundColor: "#E2E2E2",
										width: WIDTH - 280,
										borderRadius: 10,
										paddingVertical: 2,
									}}
								/>
							</Block>
							<Block
								style={{
									flex: 0,
									flexDirection: "column",
									paddingBottom: 16,
								}}
							>
								{/*1 open---Close/Disable
							2 close---Don't show options
							3 Disable---Close/Open*/}
								{campaignstatus == 3 ? (
									<TouchableOpacity
										activeOpacity={0.8}
										onPress={() => {
											OpenWarning();
											setEditModalVisible(false);
										}}
										style={{ paddingVertical: 6 }}
									>
										<Text
											style={{
												fontWeight: "700",
												fontSize: 16,
												paddingVertical: 4,
											}}
										>
											Open
										</Text>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										activeOpacity={0.8}
										onPress={() => {
											DisableWarning();
											setEditModalVisible(false);
										}}
										style={{ paddingVertical: 6 }}
									>
										<Text
											style={{
												fontWeight: "700",
												fontSize: 16,
												paddingVertical: 4,
											}}
										>
											Disable
										</Text>
									</TouchableOpacity>
								)}
								<TouchableOpacity
									activeOpacity={0.8}
									onPress={() => {
										CloseWarning();
										setEditModalVisible(false);
									}}
									style={{ paddingVertical: 6 }}
								>
									<Text
										style={{
											fontWeight: "700",
											fontSize: 16,
										}}
									>
										Close
									</Text>
								</TouchableOpacity>
							</Block>

							<Block
								center
								style={{
									flex: 0,
									borderTopWidth: 1,
									borderColor: "#F0EDF1",
								}}
							>
								<TouchableOpacity
									activeOpacity={0.8}
									style={{ paddingVertical: 12 }}
									onPress={() => setEditModalVisible(false)}
								>
									<Text
										center
										style={{
											fontWeight: "700",
											fontSize: 14,
											color: theme.colors.primary2,
										}}
									>
										Cancel
									</Text>
								</TouchableOpacity>
							</Block>
						</View>
					</TouchableWithoutFeedback>
				</TouchableOpacity>
			</Modal>
		</SafeAreaView>
	);

	const OpenWarning = () => {
		Alert.alert(
			"Open Campaign",
			"Are you sure you want to open this campaign?",
			[
				{
					text: "Cancel",
					style: {
						textTransform: "capitalize",
						color: theme.colors.primary2,
					},
				},
				{ text: "Confirm", onPress: () => handleOpenConfirm() },
			],
			{
				cancelable: true,
			}
		);
	};

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
					shadowRadius: 2,
					elevation: 2,
					borderRadius: 2,
					// borderWidth:2,
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
						color="#3B414B"
						style={{
							fontSize: 16,
							fontWeight: "700",
							textTransform: "capitalize",
							width: WIDTH - 80,
						}}
						numberOfLines={1}
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
					<Block row style={{paddingVertical:8}}>
						<PinLocationIconComponent height={"100%"} width={"5%"} />
						<Text
							style={{
								fontSize: 14,
								fontWeight: "700",
								marginLeft: 6,
							}}
							color={theme.colors.solidGray}
						>
							{countryName.name}
						</Text>
					</Block>
					<Block
						row
						style={{
							flex: 0,
							overflow: "hidden",
						}}
					>
						<Block
							row
							style={{
								paddingBottom: 16,
							}}
						>
							<TimeRemainingIconComponent
								height={HEIGHT / 22}
								width={WIDTH / 12}
							/>
							<Block column style={{ flex: 0 }}>
								<Text
									color="#5F6062"
									style={{
										fontSize: 14,
										fontWeight: "700",
										textTransform: "capitalize",
										marginLeft: 10,
									}}
								>
									{moment(date).format("DD MMM, YYYY")}
								</Text>
								<Text
									style={{
										fontSize: 13,
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
											fontSize: 13,
											fontWeight: "700",
											textTransform: "capitalize",
											backgroundColor: "#DE4C3C",
											paddingVertical: 5,
											borderTopLeftRadius: 6,
											paddingHorizontal: 32,
										}}
										color="white"
									>
										Closed
									</Text>
								) : (
									<Text
										style={{
											fontSize: 13,
											fontWeight: "700",
											textTransform: "capitalize",
											backgroundColor: "#C4C4C4",
											paddingVertical: 5,
											borderTopLeftRadius: 6,
											paddingHorizontal: 32,
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
			{ConfirmationMessage()}
		</Block>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		backgroundColor: "rgba(52, 52, 52, 0.8)",
	},
	modal: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderColor: theme.colors.gray,
		backgroundColor: theme.colors.white,
		paddingVertical: 10,
	},
	customPicker: {
		height: 28,
		flexDirection: "row",
		justifyContent: "space-between",
		borderColor: "#E7E7E7",
		alignItems: "center",
		borderBottomWidth: 1,
		paddingVertical: 6,
	},
});
