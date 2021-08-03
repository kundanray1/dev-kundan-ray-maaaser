import * as Yup from "yup";

//validationf or all auth screen form
export const LoginValidationSchema = Yup.object().shape({
  password: Yup.string().required().label("Password"),
  identifier: Yup.string().required().label("Email"),
});

export const RegisterValidationSchema = Yup.object().shape({
  emailOrPhone: Yup.string().required().label("Email / Phone"),
  password: Yup.string().required().label("Password"),
  confirmPassword: Yup.string()
    .required()
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
  zipCode: Yup.number()
    .positive()
    .integer()
    .typeError("CVC should contain number only")
    .required()
    .label("Zip Code"),
});

export const ProfileValidationSchema = Yup.object().shape({
  fullName: Yup.string().required().label("Name"),
  street1: Yup.string().required().label("Street 1"),
  // street2: Yup.string().required().label("Street 2"),
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
  zipCode: Yup.number()
    .positive()
    .integer()
    .typeError("CVC should contain number only")
    .required()
    .label("Zip Code"),
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
  // street2: Yup.string().required().label("Street address 2"),
  state: Yup.string().required().label("State"),
  city: Yup.string().required().label("City"),
  // zipCode: Yup.number()
  //   .positive()
  //   .integer()
  //   .typeError("Zip code should contain number only")
  //   .required()
  //   .label("Zip code"),
});

export const ManualValidationSchema = Yup.object().shape({
  amount: Yup.number()
    .positive()
    .min(1, "Minimum amount is 1")
    .max(100000, "Maximum amount is 100000")
    .typeError("Amount should contain number only")
    .required()
    .label("Amount"),
  remarks: Yup.string().required().label("Remarks"),

});
export const LinkScheduleDonationValidationSchema = Yup.object().shape({
  amount: Yup.number()
    .positive()
    .min(1, "Minimum amount is 1")
    .max(100000, "Maximum amount is 100000")
    .typeError("Amount should contain number only")
    .required()
    .label("Amount"),
  remarks: Yup.string().required().label("Remarks"),

});
export const LoadFundValidationSchema = Yup.object().shape({
  amount: Yup.number()
    .positive()
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
    .typeError("Routing number should contain number only")
    .required()
    .label("Routing number"),
  confirmAccountNumber: Yup.string()
    .required()
    .min(6)
    .max(50)
    .oneOf([Yup.ref("accountNumber"), null], "Both account number must match")
    .label("Confirm account number"),
});

export const AddMemberValidationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  // phoneNumber: Yup.number()
  //   .positive()
  //   .integer()
  //   .typeError("Phone number should contain number only")
  //   .required()
  //   .label("Phone Number"),
  // password: Yup.string().required().min(6).max(50).label("Password"),

});

export const ACHLoadFundValidationSchema = Yup.object().shape({
  amount: Yup.number()
    .positive()
    .min(1, "Minimum amount is 1")
    .max(100000, "Maximum amount is 100000")
    .typeError("Amount should contain number only")
    .required()
    .label("Amount"),
  remarks: Yup.string().required().label("Remarks"),
});

export const CardLoadFundValidationSchema = Yup.object().shape({
  amount: Yup.number()
    .positive()
    .min(1, "Minimum amount is 1")
    .max(100000, "Maximum amount is 100000")
    .typeError("Amount should contain number only")
    .required()
    .label("Amount"),
  remarks: Yup.string().required().label("Remarks"),

});
export const ChangePasswordValidationSchema = Yup.object().shape({
  currentPassword: Yup.string().required().min(6).max(50).label("Current Password"),
  password: Yup.string().required().min(6).max(50).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .min(6)
    .max(50)
    .oneOf([Yup.ref("password"), null], "Both new password and confirm password must match")
    .label("Confirm Password"),
});

export const StartACampaignValidationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  targetAmount: Yup.number()
    .positive()
    .min(1, "Minimum amount is 1")
    .typeError("Target amount should contain number only")
    .required()
    .label("Target amount"),
});

export const StartASubCampaignValidationSchema = Yup.object().shape({
  targetAmount: Yup.number()
    .positive()
    .min(1, "Minimum amount is 1")
    .typeError("Target amount should contain number only")
    .required()
    .label("Target amount"),
});
export const StartACampaignThirdValidationSchema = Yup.object().shape({
  description: Yup.string().required().min(1).label("Description"),
});
