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
	ErrorMessage,
	CustomActivityIndicator,
} from "./../../../components/Index.js";

export default ForgotPassword = ({ navigation, data, forgotPassword }) => {
	const [emailPhoneFocus, setEmailPhoneFocus] = useState(false);
	useEffect(() => {
		if (data.forgotPassword !== null) {
			if (data.forgotPassword.success) {
				navigation.navigate("Verification");
			}
		}
	}, [data]);

	const onSubmitForgotPassword = (values) => {
		forgotPassword(values.emailPhone);
	};

	return (
		<KeyboardAwareScrollView
     
      showsVerticalScrollIndicator={false}
    >
		<Block center style={{ marginVertical: 60 }}>
			<Image
				source={require("../../../assets/icons/logo.png")}
				style={{ height: 100, width: 100 }}
			/>
			<Text
				center
				style={{ paddingTop: 20, fontSize: 18, fontWeight: "700" }}
				color={theme.colors.black}
			>
				Forgot password?
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
				Enter your email address or phone number and we’ll send you
				instructions on how to change your password.
			</Text>

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
					<>
						<Input
							full
							label="Email / Phone"
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
							<Block style={{ flex:0,marginTop: 30 }}>

						{!errors.emailPhoneFocus ? (
								<Button full onPress={handleSubmit}>
									{data.isLoading ? (
										<>
										<CustomActivityIndicator
											isLoading={data.isLoading}
											label="Requesting..."
										/>
										<Text button style={{ fontSize: 18 }}>
											Send
										</Text>
										</>
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
									backgroundColor: theme.colors.gray,
								}}
							>
								<Text button style={{ fontSize: 18 }}>
									Send
								</Text>
							</Button>
						)}
							</Block>
					</>
				)}
			</Formik>
		</Block>
		</KeyboardAwareScrollView>
	);
};
