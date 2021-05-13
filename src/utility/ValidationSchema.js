
import * as Yup from "yup";

//validationf or all auth screen form
export const LoginValidationSchema = Yup.object().shape({
  password: Yup.string().required().min(6).max(50).label("Password"),
  identifier: Yup.string().required().min(6).max(50).label("Email"),
});

export const RegisterValidationSchema = Yup.object().shape({
  emailOrPhone: Yup.string().required().label("Email address / Phone Number"),
  password: Yup.string().required().min(6).max(50).label("Password"),
  confirmPassword: Yup.string().required().min(6).max(50).oneOf([Yup.ref('password'), null], 'Both passwords must match').label("Confirm Password"),
});

export const ForgotPasswordValidationSchema = Yup.object().shape({
  emailOrPhone: Yup.string().required().label("Email address / Phone Number"),
});

export const CreateNewPasswordValidationSchema = Yup.object().shape({
  password: Yup.string().required().min(6).max(50).label("Password"),
  confirmPassword: Yup.string().required().min(6).max(50).oneOf([Yup.ref('password'), null], 'Both passwords must match').label("Confirm Password"),
});
export const NotificationValidationSchema = Yup.object().shape({
  notification: Yup.string().required().min(6).label("Notification")
  });
