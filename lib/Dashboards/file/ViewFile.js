import useAuthContext from "../../../components/contexts/useAuthContext";
import useGetRequest from "../../../components/Hooks/useGetRequest";
import { getRequestWithAuth } from "../../../components/utils/requests";
import ShowFiles from "../../../components/UI/Files/ShowFiles";
import { useEffect, useState } from "react";

export default function ViewFile() {
  const [profileData, setProfileData] = useState({});
  const { userDetail } = useAuthContext();
  const {
    data: user,
    error,
    loading,
  } = useGetRequest(`/user/${userDetail.sub}`, {
    initialDataState: {
      user: {},
    },
  });
  // const value = data.user;
  // console.log(data.user);
  useEffect(() => {
    setProfileData(user);
  }, [user]);
  // console.log(profileData.user[0].files);
  return (
    <>
      {loading || error ? null : !Object.keys(profileData.user)
          .length ? null : (
        <ShowFiles
          additionalData={profileData}
          fileIds={profileData.user[0].files}
        ></ShowFiles>
      )}
    </>
  );
}
