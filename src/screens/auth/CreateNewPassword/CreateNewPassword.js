import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image } from "react-native";
import { Formik } from "formik";
import { CreateNewPasswordValidationSchema } from "../../../utility/ValidationSchema.js";
import * as theme from "../../../constants/theme.js";
import {
	Button,
	Block,
	Text,
	Input,
	ErrorMessage,CustomActivityIndicator
} from "../../../components/Index.js";
import AccountProto from "./../../../protos/account_pb";

export default CreateNewPassword = ({
	navigation,
	data,
	forgotPasswordData,
	verificationData,
	createNewPassword,
}) => {
	const [passwordFocus, setPasswordFocus] = useState(false);
	const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

	const onSubmitCreateNewPassword = (values) => {
		const createNewPasswordData = new AccountProto.PasswordReset();
		createNewPasswordData.setAccountid(
			forgotPasswordData.forgotPassword.refid
		);
		createNewPasswordData.setNewpassword(values.password);
		createNewPasswordData.setCode(verificationData.code.array[4]);
		createNewPassword(createNewPasswordData);
	};

	useEffect(() => {
		if (data.createNewPassword !== null) {
			if (data.createNewPassword.success) {
				navigation.navigate("Login");
			}
		}
	}, [data]);

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
							h3
							center
							style={{ marginTop: 6 }}
							color={theme.colors.black}
						>
							Create new Password
						</Text>
						<Text
							center
							style={{ marginTop: 6, padding: 5 }}
							color={theme.colors.gray}
						>
							Your new password must be different from previous
							used password.
						</Text>
					</Block>
				</Block>
				<Block flex={2.5} center>
					<Block center middle style={{ marginTop: 44 }}>
						<Formik
							initialValues={{
								password: "Josh@123",
								confirmPassword: "Josh@123",
							}}
							onSubmit={(values) => {
								onSubmitCreateNewPassword(values);
							}}
							validationSchema={CreateNewPasswordValidationSchema}
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
										password
										label="Password"
										focus={passwordFocus}
										style={{ marginBottom: 5 }}
										onChangeText={handleChange("password")}
										onBlur={() => {
											setFieldTouched("password");
											setPasswordFocus(false);
										}}
										onFocus={() => {
											setPasswordFocus(true);
										}}
										value={values.password}
										style={{
											borderBottomColor: passwordFocus
												? theme.colors.primary2
												: touched.password &&
												  errors.password
												? theme.colors.red
												: theme.colors.solidGray,
										}}
									/>
									<ErrorMessage
										error={errors.password}
										visible={touched.password}
									/>
									<Input
										full
										password
										label="Confirm Password"
										focus={confirmPasswordFocus}
										style={{ marginBottom: 5 }}
										onChangeText={handleChange(
											"confirmPassword"
										)}
										onBlur={() => {
											setFieldTouched("confirmPassword");
											setConfirmPasswordFocus(false);
										}}
										onFocus={() =>
											setConfirmPasswordFocus(true)
										}
										value={values.confirmPassword}
										style={{
											borderBottomColor: confirmPasswordFocus
												? theme.colors.primary2
												: touched.confirmPassword &&
												  errors.confirmPassword
												? theme.colors.red
												: theme.colors.solidGray,
										}}
									/>
									<ErrorMessage
										error={errors.confirmPassword}
										visible={touched.confirmPassword}
									/>
									{!errors.confirmPassword &&
									!errors.password ? (
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
												<Text
													button
													style={{ fontSize: 18 }}
												>
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
												backgroundColor:
													theme.colors.gray,
											}}
										>
											<Text
												button
												style={{ fontSize: 18 }}
											>
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
