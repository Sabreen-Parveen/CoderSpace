import { Auth } from "aws-amplify";

export default async function signIn(email, password) {
  return await Auth.signIn(email, password);
}
