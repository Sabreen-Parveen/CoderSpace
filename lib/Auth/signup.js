import { Auth } from "aws-amplify";

export default function signUp(
  username,
  email,
  password,
  phone_number,
  name,
  middle_name,
  family_name
) {
  return Auth.signUp({
    username,
    password,
    attributes: {
      email,
      phone_number,
      name,
      middle_name,
      family_name,
    },
  });
}
