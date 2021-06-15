import React, { useState, useEffect, useRef } from "react";
import {
	Image,
	View,
	StyleSheet,
	KeyboardAvoidingView,
	TouchableOpacity,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
	Button,
	Block,
	Text,
	CustomActivityIndicator,
} from "../../../components/Index.js";
import { TextInput } from "react-native-gesture-handler";
import AccountProto from "./../../../protos/account_pb";

export default Verification = ({
	navigation,
	data,
	forgotPasswordData,
	verification,
	forgotPassword,
}) => {
	const [accountId, setAccountId] = useState(false);
	const [internalValue, setInternalValue] = useState("");
	let textInput = useRef(null);
	const lengthInput = 6;
	const onChangeText = (value) => {
		setInternalValue(value);
	};
	const onSubmitVerification = () => {
		const verificationData = new AccountProto.AccountVerification();
		verificationData.setRefid(forgotPasswordData.forgotPassword.refid);
		verificationData.setCode(internalValue);
		verification(verificationData);
	};

	const onSubmitResend = () => {
		console.log(forgotPasswordData.emailPhone);
		forgotPassword(forgotPasswordData.emailPhone);
	};

	useEffect(() => {
		if (data.verification !== null) {
			if (data.verification.success) {
				console.log("verifiaction success", data.code.array[4]);
				navigation.navigate("Create New Password");
			}
		}
	}, [data]);

	return (
		<Block style={{ marginVertical: 60 }}>
			<Block style={{ flex:0,alignItems: "center" }}>
				<Image
					source={require("../../../assets/icons/logo.png")}
					style={{ height: 100, width: 100 }}
				/>
				<Text
				center
				style={{ paddingTop: 20, fontSize: 18, fontWeight: "700" }}
				color={theme.colors.black}
			>
				Verification
			</Text>
			<Text
				center
				style={{
					paddingHorizontal: 22,
					paddingVertical:20,
					fontSize: 15,
				}}
				color={theme.colors.gray}
			>
				Enter the verification code that we just sent on your email.
			</Text>
			</Block>
			

			<KeyboardAvoidingView
				keyboardVerticalOffset={50}
				behavior="padding"
				style={styles.containerAvoidingView}
			>
				<TextInput
					ref={(input) => (textInput = input)}
					onChangeText={onChangeText}
					autoFocus={true}
					style={{ width: 0, height: 0 }}
					value={internalValue}
					maxLength={lengthInput}
					returnKeyType="done"
					keyboardType="numeric"
				/>

				<TouchableOpacity
					style={styles.containerInput}
					onPress={() => textInput.focus()}
					activeOpacity={1}
				>
					{Array(lengthInput)
						.fill()
						.map((data, index) => (
							<View
								key={index}
								style={[
									styles.cellView,
									{
										borderBottomColor:
											index === internalValue.length
												? theme.colors.primary2
												: theme.colors.primary,
									},
								]}
							>
								<Text
									bold
									style={styles.cellText}
									color={theme.colors.solidGray}
								>
									{internalValue && internalValue.length > 0
										? internalValue[index]
										: ""}
								</Text>
							</View>
						))}
				</TouchableOpacity>
				<Block style={{ flex: 0, paddingTop: 25, paddingBottom: 15 }}>
					<Button
						full
						onPress={onSubmitVerification}
						disabled={internalValue.length == 6 ? false : true}
					>
						{data.loading ? (
							<Block row>
								<CustomActivityIndicator
									isLoading={data.isLoading}
									label="Requesting..."
								/>
							</Block>
						) : (
							<Text button style={{ fontSize: 18 }}>
								Send
							</Text>
						)}
					</Button>
				</Block>
			</KeyboardAvoidingView>
			<TouchableOpacity
				style={{ paddingHorizontal: 25, alignItems: "flex-start" }}
				onPress={onSubmitResend}
			>
				<Text bold color={theme.colors.solidGray}>
					If you didn't receive a code!{" "}
					<Text h4 color={theme.colors.primary2}>
						Resend
					</Text>
				</Text>
			</TouchableOpacity>
		</Block>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerAvoidingView: {
		alignItems: "center",
		padding: 10,
	},
	containerInput: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	cellView: {
		width: 40,
		margin: 5,
		alignItems: "center",
		justifyContent: "center",
		borderBottomWidth: 1,
		borderColor: theme.colors.solidGray,
	},
	cellText: {
		textAlign: "center",
		fontSize: 18,
	},
});
