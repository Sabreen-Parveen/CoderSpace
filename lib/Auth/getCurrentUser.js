import { Auth } from "aws-amplify";

export default function getCurrentUser() {
  return Auth.currentAuthenticatedUser();
}
