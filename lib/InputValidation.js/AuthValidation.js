import * as Yup from "yup";

export const SignupValidation = Yup.object().shape({
  email: Yup.string().email().required("Email is a required field"),

  firstName: Yup.string().required("First name is a required field"),
  lastName: Yup.string().required("Last name is a required field"),
  phone: Yup.string().required("Phone number is a required field"),
  password: Yup.string()
    .required("Please enter a password")
    .min(4, "Password must be atleast 4 characters long"),
  tnc: Yup.bool().equals([true], "Please accept the terms and conditions"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const LoginValidation = Yup.object().shape({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .required("Please enter a password")
    .min(4, "Password must be atleast 4 characters long"),
});

export const forgotPasswordValidation = Yup.object().shape({
  email: Yup.string().email().required("Please enter your email"),
});

export const newPasswordValidation = Yup.object().shape({
  code: Yup.string().required("Please enter a valid code"),
  password: Yup.string()
    .required("Please enter your new password")
    .min(4, "Password should be atleast 4 characters long"),
  confirmPassword: Yup.string()
    .required("Please confirm your new password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
