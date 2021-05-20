import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image, ActivityIndicator } from "react-native";
import { Formik } from "formik";
import { ForgotPasswordValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
	Button,
	Block,
	Text,
	Input,
	ErrorMessage,
} from "./../../../components/Index.js";

export default ForgotPassword = ({ navigation, data, forgotPassword }) => {
	const [identifierFocus, setIdentifierFocus] = useState(false);
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
							style={{ marginTop: 6,fontSize:18 }}
							color={theme.colors.black}
						>
							Forgot password?
						</Text>
						<Text
							center
							style={{ marginTop: 6, padding: 5,fontSize:15  }}
							color={theme.colors.gray}
						>
							Your new password must be different from previous
							used password.
						</Text>
					</Block>
				</Block>
				<Block flex={2.5} center>
					<Block center middle style={{ marginTop: 25 }}>
						<Formik
							initialValues={{
								identifier: "",
							}}
							onSubmit={(values) => {
								forgotPassword(values);
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
										focus={identifierFocus}
										onChangeText={handleChange(
											"identifier"
										)}
										onBlur={() => {
											setFieldTouched("identifier");
											setIdentifierFocus(false);
										}}
										onFocus={() => setIdentifierFocus(true)}
										value={values.identifier}
										style={{
											borderBottomColor: identifierFocus
												? theme.colors.primary2
												: touched.identifier &&
												  errors.identifier
												? theme.colors.red
												: theme.colors.solidGray,
										}}
									/>
									<ErrorMessage
										error={errors.identifier}
										visible={touched.identifier}
									/>
									{!errors.identifierFocus ? (
										<Button
											full
											style={{
												marginTop: 12,
												marginBottom: 12,
											}}
											onPress={handleSubmit}
										>
											{data.isLoading ? (
												<ActivityIndicator
													size="small"
													color={theme.colors.white}
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
