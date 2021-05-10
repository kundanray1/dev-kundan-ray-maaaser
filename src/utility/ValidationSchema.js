
import * as Yup from "yup";

//validationf or all auth screen form
export const validationSchema = Yup.object().shape({
  emailOrPhone: Yup.string().required().label("Email address / Phone Number"),
  password: Yup.string().required().min(6).max(50).label("Password"),
  confirmPassword: Yup.string().required().min(6).max(50).oneOf([Yup.ref('password'), null], 'Both passwords must match').label("Confirm Password"),
});
