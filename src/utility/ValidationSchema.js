import * as Yup from "yup";

//validationf or all auth screen form
export const LoginValidationSchema = Yup.object().shape({
  password: Yup.string().required().min(6).max(50).label("Password"),
  identifier: Yup.string().required().min(6).max(50).label("Email"),
});

export const RegisterValidationSchema = Yup.object().shape({
  emailOrPhone: Yup.string().required().label("Email / Phone"),
  password: Yup.string().required().min(6).max(50).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .min(6)
    .max(50)
    .oneOf([Yup.ref("password"), null], "Both passwords must match")
    .label("Confirm Password"),
});

export const ForgotPasswordValidationSchema = Yup.object().shape({
  emailPhone: Yup.string()
    .required()
    .email()
    .label("Email / Phone"),
});

export const CreateNewPasswordValidationSchema = Yup.object().shape({
  password: Yup.string().required().min(6).max(50).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .min(6)
    .max(50)
    .oneOf([Yup.ref("password"), null], "Both passwords must match")
    .label("Confirm Password"),
});
export const NotificationValidationSchema = Yup.object().shape({
  notification: Yup.string().required().min(6).label("Notification"),
});

export const LetsGetStartedDonorValidationSchema = Yup.object().shape({
  fullName: Yup.string().required().label("Name"),
  street1: Yup.string().required().label("Street 1"),
  street2: Yup.string().required().label("Street 2"),
  state: Yup.string().required().label("State"),
  city: Yup.string().required().label("City"),
  zipCode: Yup.string().required().label("Zip Code"),
});

export const LetsGetStartedReceiverValidationSchema = Yup.object().shape({
  fullName: Yup.string().required().label("Name"),
  street1: Yup.string().required().label("Street 1"),
  street2: Yup.string().required().label("Street 2"),
  state: Yup.string().required().label("State"),
  city: Yup.string().required().label("City"),
  zipCode: Yup.string().required().label("Zip Code"),
  bio: Yup.string().required().label("Bio"),
});

export const LinkNewCardValidationSchema = Yup.object().shape({
  cardholderName: Yup.string().required().label("Cardholder name"),
  cardNumber: Yup.string().required().label("Card number"),
  cvc: Yup.number()
    .positive()
    .integer()
    .typeError("CVC should contain number only")
    .required()
    .label("CVC"),
  street1: Yup.string().required().label("Street address 1"),
  street2: Yup.string().required().label("Street address 2"),
  state: Yup.string().required().label("State"),
  city: Yup.string().required().label("City"),
  zipCode: Yup.number()
    .positive()
    .integer()
    .typeError("Zip code should contain number only")
    .required()
    .label("Zip code"),
});

export const ManualValidationSchema = Yup.object().shape({
  receiverName: Yup.string().required().label("Receiver name"),
  amount: Yup.number()
    .positive()
    .integer()
    .min(1, "Minimum amount is 1")
    .max(100000, "Maximum amount is 100000")
    .typeError("Amount should contain number only")
    .required()
    .label("Amount"),
});
export const ScheduleDonationValidationSchema = Yup.object().shape({
  receiverName: Yup.string().required().label("Receiver name"),
  amount: Yup.number()
    .positive()
    .integer()
    .min(0, "Minimum amount is 1")
    .max(100000, "Maximum amount is 100000")
    .typeError("Amount should contain number only")
    .required()
    .label("Amount"),
});
export const LoadFundValidationSchema = Yup.object().shape({
  amount: Yup.number()
    .positive()
    .integer()
    .min(1, "Minimum amount is 1")
    .max(100000, "Maximum amount is 100000")
    .typeError("Amount should contain number only")
    .required()
    .label("Amount"),
});

export const LinkNewAccountValidationSchema = Yup.object().shape({
  bankName: Yup.string().required().label("Bank name "),
  accountHolderName: Yup.string().required().label("Account Holder Name "),
  accountNumber: Yup.string().required().label("Account number"),
  routingNumber: Yup.number()
    .positive()
    .integer()
    .typeError("Routing number should contain number only")
    .required()
    .label("Routing number"),
});
