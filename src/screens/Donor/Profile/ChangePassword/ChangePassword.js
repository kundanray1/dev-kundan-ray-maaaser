import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { ChangePasswordValidationSchema } from "../../../../utility/ValidationSchema.js";
import * as theme from "../../../../constants/theme.js";
import {
	Button,
	Block,
	Text,
	Input,
	ErrorMessage,
	CustomActivityIndicator,
} from "../../../../components/Index.js";
import AccountProto from "./../../../../protos/account_pb";
import API from "./../../../../api/API";

export default ChangePassword = ({
	navigation,
	data,
	changePassword,
	changePasswordClear,
	route,
}) => {
	const {clientType}=route.params
	const [currentPasswordFocus, setCurrentPasswordFocus] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);
	const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

	const onSubmitChangePassword = (values) => {
		const changePasswordData = new AccountProto.PasswordChangeRequest();
		changePasswordData.setOldpassword(values.currentPassword);
		changePasswordData.setNewpassword(values.password);
		changePassword(changePasswordData);
	};

	useEffect(() => {
		if (data.changePassword !== null) {
			if (data.changePassword.success) {
				changePasswordClear()
				if(clientType=="receiver"){
				navigation.navigate("Receiver Profile");
				}else{
				navigation.navigate("Profile");
				}
			}
		}
	}, [data.changePassword]);

	return (
		 <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>

				<Formik
					initialValues={{
						currentPassword:"",
						password: "",
						confirmPassword: "",
					}}
					onSubmit={(values) => {
						onSubmitChangePassword(values);
					}}
					validationSchema={ChangePasswordValidationSchema}
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
								
								password
								label="Current Password"
								focus={currentPasswordFocus}
								style={{ marginBottom: 5 }}
								onChangeText={handleChange("currentPassword")}
								onBlur={() => {
									setFieldTouched("currentPassword");
									setCurrentPasswordFocus(false);
								}}
								onFocus={() => {
									setCurrentPasswordFocus(true);
								}}
								value={values.currentPassword}
								style={{
									borderBottomColor: currentPasswordFocus
										? theme.colors.primary2
										: touched.currentPassword && errors.currentPassword
										? theme.colors.red
										: theme.colors.solidGray,
								}}
							/>
							<ErrorMessage
								error={errors.currentPassword}
								visible={touched.currentPassword}
							/>
							<Input
								
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
										: touched.password && errors.password
										? theme.colors.red
										: theme.colors.solidGray,
								}}
							/>
							<ErrorMessage
								error={errors.password}
								visible={touched.password}
							/>
							<Input
								
								password
								label="Confirm Password"
								focus={confirmPasswordFocus}
								style={{ marginBottom: 5 }}
								onChangeText={handleChange("confirmPassword")}
								onBlur={() => {
									setFieldTouched("confirmPassword");
									setConfirmPasswordFocus(false);
								}}
								onFocus={() => setConfirmPasswordFocus(true)}
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
							<Block style={{ flex: 0, paddingTop:22 }}>
							{!errors.currentPassword && !errors.confirmPassword && !errors.password ? (
								<Button
									onPress={handleSubmit}
								>
									{data.isLoading ? (
										<>
										<CustomActivityIndicator
											isLoading={data.isLoading}
											label="Requesting..."
										/>
											<Text button style={{ fontSize: 18 }}>
											Change 
										</Text>
										</>
									) : (
										<Text button style={{ fontSize: 18 }}>
											Change 
										</Text>
									)}
								</Button>
							) : (
								<Button
								>
									<Text button style={{ fontSize: 18 }}>
										Change 
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
