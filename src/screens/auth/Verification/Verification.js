import React, { useState, useRef } from "react";
import {
	Image,
	View,
	StyleSheet,
	KeyboardAvoidingView,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Button, Block, Text, ErrorMessage } from "../../../components/Index.js";
import { TextInput } from "react-native-gesture-handler";

export default Verification = ({ navigation }) => {
	const [loading, setLoading] = useState(false);
	const [internalValue, setInternalValue] = useState("");
	let textInput = useRef(null);
	const lengthInput = 6;
	const onChangeText = (value) => {
		setInternalValue(value);
	};
	const handleSubmit = () => {
		setLoading(!loading);
	};
	
	return (
		<Block center style={{ marginTop: 20 }}>
			<Image
				source={require("../../../assets/icons/logo.png")}
				style={{ height: 100, width: 100 }}
			/>
			<Text bold center style={{ marginTop: 6, fontSize:18 }} color={theme.colors.black}>
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

			<KeyboardAvoidingView
				keyboardVerticalOffset={50}
				behavior="padding"
				style={styles.containerAvoidingView}
			>
				<TextInput
					ref={(input) => textInput = input}
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
					onPress={handleSubmit}
					disabled={internalValue.length == 6 ? false : true}
				>
					{loading ? (
						<Block row>
							<Text button style={{ fontSize: 18, marginTop: 6 }}>
								Sending
							</Text>
							<ActivityIndicator
								size="small"
								color={theme.colors.white}
							/>
						</Block>
					) : (
						<Text button style={{ fontSize: 18 }}>
							Send
						</Text>
					)}
				</Button>
				<TouchableOpacity
					onPress={() => console.log("Resend Value")}
					style={{ justifyContent: "flex-start" }}
				>
					<Text bold color={theme.colors.solidGray}>
						If you didn't receive a code!{" "}
						<Text h4 color={theme.colors.primary2}>
							Resend
						</Text>
					</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
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
	cellText:{
		textAlign:'center',
		fontSize:16
	}
,
});



