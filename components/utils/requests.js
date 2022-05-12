import { API } from "aws-amplify";
import getCurrentSessionData from "../../lib/Auth/getCurrentUser";

export async function getRequestWithAuth(path, data = {}) {
  // const tokens = await getCurrentSessionData();
  // const jwtToken = tokens.getIdToken().getJwtToken();
  // data.headers = {
  //   Authorization: jwtToken,
  // };

  return API.get("CoderSpaceApi", path, data);
}

export async function postRequestWithAuth(path, data) {
  // const tokens = await getCurrentSessionData();
  // const jwtToken = tokens.getIdToken().getJwtToken();
  // data.headers = {
  //   Authorization: jwtToken,
  // };
  console.log(data);
  return API.post("CoderSpaceApi", path, data);
}

export async function patchRequestWithAuth(path, data) {
  // const tokens = await getCurrentSessionData();
  // const jwtToken = tokens.getIdToken().getJwtToken();
  // data.headers = {
  //   Authorization: jwtToken,
  // };
  // console.log("data: ", data);
  return API.patch("CoderSpaceApi", path, data);
}

export async function filePostRequestWithAuth(path, data) {
  //   const tokens = await getCurrentSessionData();
  //   const jwtToken = tokens.getIdToken().getJwtToken();
  data.headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Content-Type": "multipart/form-data",
  };

  return API.post("CoderSpaceApi", path, data);
}
