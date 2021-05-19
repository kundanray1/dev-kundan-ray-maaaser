import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
	StyleSheet,
	Image,
	ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import { descriptionValidationSchema } from "./../../utility/ValidationSchema.js";
import * as theme from "../../constants/theme.js";
import {
	Button,
	Block,
	Text,
	Input,
	ErrorMessage,
} from "../../components/Index.js";
import { addPost } from "./../../store/actions/PostsActions";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

const Adddescription = ({ navigation, posts }) => {
	const dispatch = useDispatch();
	const [descriptionFocus, setDescriptionFocus] = useState(false);
	const onSubmitRegister = ({ description }) => {
		console.log("=====================================");
		console.log("inside onSubmitRegister");
		dispatch(addPost({ description }));
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
							source={require("../../assets/icons/logo.png")}
							style={{ height: 100, width: 100 }}
						/>
						<Text
							h3
							center
							style={{ marginTop: 6 }}
							color={theme.colors.black}
						>
							Forgot Password?
						</Text>
						<Text
							center
							style={{ marginTop: 6, padding: 5 }}
							color={theme.colors.gray}
						>
							Enter your email address or phone number and we’ll
							send you instructions on how to change your
							password.
						</Text>
					</Block>
				</Block>
				<Block flex={2.5} center>
					<Block center middle style={{ marginTop: 44 }}>
						<Formik
							initialValues={{
								description: "",
							}}
							onSubmit={(values) => {
								onSubmitRegister(values);
							}}
							validationSchema={descriptionValidationSchema}
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
										label="Description"
										style={{ marginBottom: 5 }}
										onChangeText={handleChange(
											"description"
										)}
										onBlur={() => {
											setFieldTouched("description");
											setDescriptionFocus(false);
										}}
										onFocus={() =>
											setDescriptionFocus(true)
										}
										value={values.description}
										style={{
											borderBottomColor: descriptionFocus
												? theme.colors.primary2
												: touched.description &&
												  errors.description
												? theme.colors.red
												: theme.colors.solidGray,
										}}
									/>
									<ErrorMessage
										error={errors.description}
										visible={touched.description}
									/>

									{!errors.description ? (
										<Button
											full
											style={{
												marginTop: 12,
												marginBottom: 12,
											}}
											onPress={handleSubmit}
										>
											
												<Text
													button
													style={{ fontSize: 18 }}
												>
													Add Notification
												</Text>
											
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
												Add Notification
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
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

const structuredSelector = createStructuredSelector({
	posts: (state) => state.posts,
});

const mapDispatchToProps = { addPost };
export default connect(structuredSelector, mapDispatchToProps)(Adddescription);
