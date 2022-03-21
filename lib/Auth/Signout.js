import { Auth } from "aws-amplify";

export default async function signOut() {
  await Auth.signOut();
}
