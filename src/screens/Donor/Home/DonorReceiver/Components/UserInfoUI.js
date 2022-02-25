import React from "react";
import {
	Image,
	StyleSheet,
	ImageBackground,
} from "react-native";
import * as theme from "constants/theme.js";
import {HEIGHT} from "constants/theme.js";
import {
	Block,
	Text,
	Button,
	} from "components/Index.js";
import {  UserIcon } from "assets/icons/Index.js";
import NumberFormat from "react-number-format";
export default UserInfoUI = ({ profileData, navigation, data }) => {
	return (
		<ImageBackground
			style={styles.imageBackgroundContainer}
			imageStyle={styles.imageBackground}
			source={require("assets/images/backgroundColor.png")}
		>
			<Block style={styles.imageBackgroundInnerContainer}>
				<Block row style={styles.imageBackgroundContentContainer}>
					<Block
						style={{
							flex: 1,
						}}
					>
						{profileData.profile.profilepic == "" ? (
							<UserIcon height={"65%"} width={"75%"} />
						) : (
							<Image
								source={{
									uri: profileData.profile.profilepic,
								}}
								style={styles.image}
							/>
						)}
					</Block>
					<Block
						style={{
							flex: 3,
						}}
					>
						<Text style={styles.userInfoText}>
							Hi,{" "}
							{profileData.profile.account.fullname.split(" ")[0]}
							!
						</Text>
						<Button
							style={styles.loadFundButton}
							onPress={() => navigation.navigate("Load Fund")}
						>
							<Text
								color={theme.colors.white}
								style={styles.loadFundText}
							>
								Load Fund
							</Text>
						</Button>
					</Block>

					<Block
						style={{
							flex: 2.5,
						}}
					>
						<Text
							center
							color={theme.colors.solidGray}
							style={styles.label}
						>
							Balance
						</Text>

						<NumberFormat
							value={data.balance / 100}
							displayType={"text"}
							thousandSeparator={true}
							prefix={"$"}
							decimalScale={2}
							fixedDecimalScale={true}
							renderText={(formattedValue) => (
								<Text center style={styles.balance}>
									{formattedValue}
								</Text>
							)}
						/>
					</Block>
				</Block>
			</Block>
		</ImageBackground>
	);
};

export const styles = StyleSheet.create({
	imageBackgroundContainer: {
		flex: 1,
		height: "95%",
		width: "100%",
	},
	imageBackground: {
		borderBottomLeftRadius: 40,
		borderBottomRightRadius: 40,
	},
	imageBackgroundInnerContainer: {
		paddingHorizontal: 16,
		flex: 0,
		marginTop: HEIGHT / 10,
	},
	imageBackgroundContentContainer: {
		flex: 0,
		paddingHorizontal: 20,
		paddingTop: 22,
		paddingBottom: 18,
		borderRadius: 4,
		shadowRadius: 4,
		elevation: 4,
		backgroundColor: theme.colors.white,
	},
	image: {
		height: "65%",
		width: "75%",
		borderRadius: 30,
	},
	userInfoText: {
		fontSize: 18,
		fontWeight: "700",
		textTransform: "capitalize",
		color: theme.colors.solidGray,
		marginBottom: 6,
	},
	loadFundButton: { height: 26, width: "70%" },
	loadFundText: { fontSize: 14, fontWeight: "700" },
	label: { fontSize: 16, marginBottom: 6 },
	balance: {
		fontSize: 16,
		fontWeight: "700",
		color: theme.colors.solidGray,
	},
});
