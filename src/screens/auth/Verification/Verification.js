import React, { useState, useEffect, useRef } from "react";
import {
	Image,
	View,
	StyleSheet,
	KeyboardAvoidingView,
	TouchableOpacity,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Button, Block, Text,CustomActivityIndicator } from "../../../components/Index.js";
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
		<Block style={{ marginTop: 20 }}>
			<Block center style={{ flex: 0 }}>
				<Image
					source={require("../../../assets/icons/logo.png")}
					style={{ height: 100, width: 100 }}
				/>
				<Text
					bold
					center
					style={{ marginTop: 6, fontSize: 18 }}
					color={theme.colors.black}
				>
					Verification
				</Text>

				<Text
					center
					style={{ marginTop: 6, padding: 5 }}
					color={theme.colors.gray}
				>
					Enter your email address or phone number and we’ll send you
					instructions on how to change your password.
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
								<Text bold style={styles.cellText}>
									{internalValue && internalValue.length > 0
										? internalValue[index]
										: ""}
								</Text>
							</View>
						))}
				</TouchableOpacity>

				<Button
					full
					style={{
						marginTop: 12,
						marginBottom: 12,
					}}
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
			</KeyboardAvoidingView>
			<TouchableOpacity
				style={{ paddingHorizontal: 25 }}
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
		paddingVertical: 11,
		width: 40,
		margin: 5,
		alignItems: "center",
		justifyContent: "center",
		borderBottomWidth: 1.5,
	},
	cellText: {
		textAlign: "center",
		fontSize: 16,
	},
});
