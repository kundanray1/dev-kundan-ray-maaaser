import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image } from "react-native";
import { Formik } from "formik";
import { ForgotPasswordValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
	Button,
	Block,
	Text,
	Input,
	ErrorMessage,CustomActivityIndicator
} from "./../../../components/Index.js";

export default ForgotPassword = ({ navigation, data, forgotPassword }) => {
	const [emailPhoneFocus, setEmailPhoneFocus] = useState(false);

	useEffect(() => {
		if (data.forgotPassword !== null) {
			if (data.forgotPassword.success) {
				console.log("after success forgotPassword", data);
				navigation.navigate("Verification");
			}
		}
	}, [data]);

	const onSubmitForgotPassword = (values) => {
		forgotPassword(values.emailPhone);
	};

	return (
		<KeyboardAwareScrollView
			style={{ marginVertical: 10 }}
			showsVerticalScrollIndicator={false}
		>
			<Block center middle>
				<Block style={{ marginTop: 20 }}>
					<Block center>
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
							Forgot password?
						</Text>
						<Text
							center
							style={{ marginTop: 6, padding: 5, fontSize: 15 }}
							color={theme.colors.gray}
						>
							Your new password must be different from previous used password.
						</Text>
					</Block>
				</Block>
				<Block flex={2.5} center>
					<Block center middle style={{ marginTop: 25 }}>
						<Formik
							initialValues={{
								emailPhone: "j@gmail.com",
							}}
							onSubmit={(values) => {
								onSubmitForgotPassword(values);
							}}
							validationSchema={ForgotPasswordValidationSchema}
						>
							{({
								handleChange,
								touched,
								setFieldTouched,
								handleSubmit,
								values,
								errors,
							}) => (
								<Block>
									<Input
										full
										label="Email address / Phone Number"
										style={{ marginBottom: 5 }}
										focus={emailPhoneFocus}
										onChangeText={handleChange("emailPhone")}
										onBlur={() => {
											setFieldTouched("emailPhone");
											setEmailPhoneFocus(false);
										}}
										onFocus={() => setEmailPhoneFocus(true)}
										value={values.emailPhone}
										style={{
											borderBottomColor: emailPhoneFocus
												? theme.colors.primary2
												: touched.emailPhone && errors.emailPhone
												? theme.colors.red
												: theme.colors.solidGray,
										}}
									/>
									<ErrorMessage
										error={errors.emailPhone}
										visible={touched.emailPhone}
									/>
									{!errors.emailPhoneFocus ? (
										<Button
											full
											style={{
												marginTop: 12,
												marginBottom: 12,
											}}
											onPress={handleSubmit}
										>
											{data.isLoading ? (
												 <CustomActivityIndicator
                         isLoading={data.isLoading}
                         label="Requesting..."
                        />
											) : (
												<Text button style={{ fontSize: 18 }}>
													Send
												</Text>
											)}
										</Button>
									) : (
										<Button
											full
											style={{
												marginTop: 12,
												marginBottom: 12,
												backgroundColor: theme.colors.gray,
											}}
										>
											<Text button style={{ fontSize: 18 }}>
												Send
											</Text>
										</Button>
									)}
								</Block>
							)}
						</Formik>
					</Block>
				</Block>
			</Block>
		</KeyboardAwareScrollView>
	);
};
